
import { generatedQuestions } from './generated-questions.js';

// Hand-written questions. AI-drafted questions live in
// generated-questions.js (created by `npm run generate`).
// Only questions with reviewStatus 'approved' are shown to students.
const handWrittenQuestions = [
  // Add hand-written questions here, in the same format as
  // generated-questions.js. Each needs a source before it can be approved.
];

export const questions = [...handWrittenQuestions, ...generatedQuestions];
