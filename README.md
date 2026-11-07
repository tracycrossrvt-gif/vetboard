# VetBoard

VetBoard is a study tool for recently graduated veterinary technicians preparing for the **Veterinary Technician National Examination (VTNE)**. Students practice with multiple-choice questions organized by the official VTNE subjects, see a sourced explanation after every answer, and can ask an AI tutor to explain a concept further.

**Live site:** [vetboard.vercel.app](https://vetboard.vercel.app)

## Why it's built this way

VetBoard started as an AI trivia app that generated questions live. That works for trivia, but not for licensing exam prep: AI models can produce confident answers that are wrong or out of date, and students who memorize those answers are hurt on the real exam.

So VetBoard separates **what students are tested on** from **what AI is used for**:

- **Questions come from a fixed bank, not live generation.** Every question exists before a student sees it, so it can be checked.
- **Every question cites a specific source page.** Students can open the source from the app and verify the answer themselves.
- **Every question passes an independent AI cross-check.** A separate AI pass answers each question blind, using only the cited page, and its answer must match the answer key. Mismatches and unclear wording are fixed or the question is dropped.
- **Students can report problems.** A reported question is hidden for everyone immediately until it's reviewed.
- **AI is used where the risk is low.** It helps draft questions behind the scenes and explains answers to students, always treating the checked answer as correct.

## Features

- **Practice by Subject:** work through every question in one VTNE subject.
- **Practice Session:** a mixed set of questions across subjects, with a score by subject and a review of missed questions.
- **Explain further:** an AI tutor (Google Gemini) that expands on any answered question and takes follow-up questions.
- **Report a problem:** hides a question for all students right away and records the report.
- **Source links:** each explanation links to the page it came from.
- Answer options are shuffled each time, and only the server knows the correct answer until a student submits.

## Sources

| Source | Used for |
|---|---|
| [AAVSB VTNE Content Outline](https://www.aavsb.org/) | Exam subjects, their weights, and the topics within each |
| [Merck Veterinary Manual](https://www.merckvetmanual.com/) | Clinical content |
| [AAHA Guidelines](https://www.aaha.org/aaha-guidelines/) | Anesthesia, dentistry, fluid therapy, and other practice standards |
| [RECOVER Initiative](https://recoverinitiative.org/) | CPR and resuscitation (2024 guidelines) |

Questions are weighted toward the official VTNE blueprint:

| VTNE subject | Share of exam |
|---|---|
| Animal Care and Nursing | 20% |
| Pharmacy and Pharmacology | 13% |
| Surgical Nursing | 13% |
| Anesthesia | 13% |
| Laboratory Procedures | 9% |
| Dentistry | 7% |
| Emergency Medicine and Critical Care | 7% |
| Pain Management and Analgesia | 7% |
| Diagnostic Imaging | 6% |
| Communication and Veterinary Professional Support Services | 5% |

## Tech stack

- **Frontend:** React 19 with Vite
- **Backend:** Node.js and Express
- **AI:** Google Gemini, for the tutor and for drafting questions
- **Database:** Upstash Redis, for student reports
- **Hosting:** Vercel

## Project structure

```
client/                   React app
  src/components/
    PracticeMode.jsx      Practice by Subject
    PracticeSession.jsx   Mixed practice session and missed-question review
    ExplainMore.jsx       "Explain further" AI tutor
    ReportQuestion.jsx    "Report a problem" form
    SourceNote.jsx        Source link shown with each explanation
server/                   Express API
  routes/practice.js      All practice, tutor, and report endpoints
  data/
    domains.js            VTNE subjects and exam weights
    questions.js          Hand-written questions
    generated-questions.js  Source-checked questions
    validate.js           Question format checks
    reports.js            Report storage (Upstash Redis)
  scripts/
    generate-questions.js Drafts new questions with Gemini
    validate-questions.js Checks the whole question bank
    reports.js            Lists reports and restores hidden questions
```

## Running it locally

You need Node.js and a Gemini API key from [Google AI Studio](https://aistudio.google.com/).

1. Create `server/.env` with your key:
   ```
   GEMINI_API_KEY=your-key-here
   ```
   This file is ignored by git. Never put a real key in `.env.example`.

2. Start the server:
   ```
   cd server
   npm install
   npm run dev
   ```

3. In a second terminal, start the app:
   ```
   cd client
   npm install
   npm run dev
   ```

4. Open the address Vite shows, usually http://localhost:5173.

Locally, the Report button says reporting isn't set up unless the Upstash variables are also in `server/.env`. Everything else works without them.

## Managing questions

Questions live in `server/data/`. Each one has a `reviewStatus`, and **only `approved` questions are shown to students.** Draft questions also appear when running locally with `NODE_ENV=development`, so they can be checked in the app.

A question looks like this:

```js
{
  id: 'aaha-dentistry-005',
  domain: 'dentistry',
  question: 'What is the normal periodontal probing depth in a medium-sized dog?',
  options: ['No more than 2 to 3 mm', '4 to 5 mm', '6 to 8 mm', 'More than 10 mm'],
  correctAnswer: 'No more than 2 to 3 mm',
  explanation: 'Normal probing depth is no more than 2 to 3 mm in a medium-sized dog...',
  source: { title: 'AAHA 2019 Dental Care Guidelines: Essential Steps', reference: 'https://...' },
  reviewStatus: 'approved',
}
```

Commands, run from the `server` folder:

| Command | What it does |
|---|---|
| `npm run validate` | Checks every question and shows approved counts by subject. Run before deploying. |
| `npm run generate -- --domain anesthesia --count 10` | Drafts questions for one subject with Gemini. |
| `npm run generate -- --total 150` | Drafts questions across all subjects, weighted by the VTNE blueprint. |
| `npm run generate -- --domain dentistry --count 10 --source notes.txt` | Drafts questions based only on the provided source material. |
| `npm run reports` | Lists student reports and hidden questions. |
| `npm run reports -- --restore <question-id>` | Shows a hidden question to students again. |

Generated questions are saved as drafts and must be cross-checked and approved before students see them.

## Reports

When a student reports a question, it's added to a hidden list in Upstash Redis and disappears from practice for everyone. Each visitor can hide up to 5 questions a day.

To review reports, use `npm run reports`, or open the database in Vercel's **Storage** tab and use the **Data Browser** or **CLI**. To restore a question from the CLI:

```
SREM vetboard:hidden-questions <question-id>
```

To fix a question permanently, edit it in `server/data/` and redeploy, or set its `reviewStatus` to `rejected`.

## Deployment

The app deploys to Vercel automatically on every push to `main`. It needs these environment variables in Vercel:

| Variable | Purpose |
|---|---|
| `GEMINI_API_KEY` | The Explain further tutor |
| `KV_REST_API_URL` and `KV_REST_API_TOKEN` (or `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`) | Student reports. Added automatically when Upstash is connected through Vercel's Storage tab. |

Redeploy after changing environment variables, since they only apply to new deployments.

## How it was built

VetBoard was built with AI assistance. Claude (Anthropic) helped with architecture review, source research, question writing, and the independent cross-check. The product decisions were mine: moving from live AI questions to a source-checked bank, choosing the sources, and designing automated safeguards in place of per-question human review.

## Disclaimer

VetBoard is an independent study aid. It is not affiliated with or endorsed by the AAVSB, which administers the VTNE. Content is for exam preparation only and is not veterinary medical advice.
