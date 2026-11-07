// Source-based questions. Each cites a specific page and passed an
// independent AI cross-check. Only 'approved' questions reach students.
export const generatedQuestions = [
  {
    "id": "mvm-anesthesia-001",
    "domain": "anesthesia",
    "question": "Which of the following is a recognized source of waste anesthetic gas exposure for staff in the surgery suite?",
    "options": [
      "An uncuffed endotracheal tube",
      "Using a low-flow anesthesia technique",
      "Using a total intravenous anesthesia protocol",
      "Adding a local anesthetic nerve block"
    ],
    "correctAnswer": "An uncuffed endotracheal tube",
    "explanation": "Gas can leak around an uncuffed endotracheal tube into the room. Low-flow techniques, total intravenous anesthesia, and local or regional blocks are listed as ways to reduce exposure, not sources of it.",
    "source": {
      "title": "Merck Veterinary Manual: Waste Anesthetic Gases as a Veterinary Workplace Hazard",
      "reference": "https://www.merckvetmanual.com/public-health/toxicological-hazards-in-the-veterinary-workplace/waste-anesthetic-gases-as-a-veterinary-workplace-hazard",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-anesthesia-002",
    "domain": "anesthesia",
    "question": "When should the vaporizer be turned on to limit staff exposure to waste anesthetic gas?",
    "options": [
      "Before the patient is brought into the surgery suite",
      "While the mask or chamber is being fitted to the patient",
      "Only after the breathing circuit is connected to the patient",
      "As soon as the anesthesia machine is leak tested"
    ],
    "correctAnswer": "Only after the breathing circuit is connected to the patient",
    "explanation": "Turning the vaporizer on before the circuit is connected to the patient releases anesthetic gas directly into the room. Waiting until the patient is connected is one of the recommended safe handling practices.",
    "source": {
      "title": "Merck Veterinary Manual: Waste Anesthetic Gases as a Veterinary Workplace Hazard",
      "reference": "https://www.merckvetmanual.com/public-health/toxicological-hazards-in-the-veterinary-workplace/waste-anesthetic-gases-as-a-veterinary-workplace-hazard",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-anesthesia-003",
    "domain": "anesthesia",
    "question": "Which practice is recommended when filling an isoflurane vaporizer?",
    "options": [
      "Fill it in a well-ventilated area, ideally when the room is not in use",
      "Fill it during surgery so vapor is drawn into the scavenger",
      "Fill it with the oxygen flush valve open",
      "Fill it in a small closed room so vapor does not spread"
    ],
    "correctAnswer": "Fill it in a well-ventilated area, ideally when the room is not in use",
    "explanation": "Spills and vapor during filling are a source of exposure, so vaporizers should be filled in a well-ventilated area or under a hood, and at a time like the end of the day when fewer staff are present. A closed room concentrates the vapor rather than protecting staff.",
    "source": {
      "title": "Merck Veterinary Manual: Waste Anesthetic Gases as a Veterinary Workplace Hazard",
      "reference": "https://www.merckvetmanual.com/public-health/toxicological-hazards-in-the-veterinary-workplace/waste-anesthetic-gases-as-a-veterinary-workplace-hazard",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-anesthesia-004",
    "domain": "anesthesia",
    "question": "During isoflurane anesthesia, a dog develops tachycardia and a rapid, unexpected rise in end-tidal CO2 that does not improve with increased ventilation. Which condition should the technician alert the veterinarian to?",
    "options": [
      "Malignant hyperthermia",
      "Anesthetic overdose",
      "Hypothermia",
      "Hypoglycemia"
    ],
    "correctAnswer": "Malignant hyperthermia",
    "explanation": "In dogs, a rapid, unexpected increase in end-tidal CO2 with tachycardia is the earliest and most prominent sign of malignant hyperthermia; a rise in body temperature often comes later. An anesthetic overdose typically depresses heart rate and breathing rather than driving CO2 production up.",
    "source": {
      "title": "Merck Veterinary Manual: Malignant Hyperthermia in Animals",
      "reference": "https://www.merckvetmanual.com/metabolic-disorders/malignant-hyperthermia/malignant-hyperthermia-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-anesthesia-005",
    "domain": "anesthesia",
    "question": "Which drug is the specific treatment for malignant hyperthermia?",
    "options": [
      "Dantrolene",
      "Atropine",
      "Naloxone",
      "Acepromazine"
    ],
    "correctAnswer": "Dantrolene",
    "explanation": "Dantrolene, given IV, is the only specific treatment for malignant hyperthermia; it acts on skeletal muscle calcium release. Atropine treats bradycardia and naloxone reverses opioids, but neither addresses the underlying muscle problem.",
    "source": {
      "title": "Merck Veterinary Manual: Malignant Hyperthermia in Animals",
      "reference": "https://www.merckvetmanual.com/metabolic-disorders/malignant-hyperthermia/malignant-hyperthermia-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-anesthesia-006",
    "domain": "anesthesia",
    "question": "When malignant hyperthermia is suspected in an anesthetized patient, what is the first step with the anesthesia machine?",
    "options": [
      "Turn off and remove the vaporizer, then maximize fresh gas flow",
      "Increase the vaporizer setting to deepen anesthesia",
      "Switch from isoflurane to sevoflurane",
      "Close the pop-off valve to raise airway pressure"
    ],
    "correctAnswer": "Turn off and remove the vaporizer, then maximize fresh gas flow",
    "explanation": "All triggering agents must be stopped immediately: turn off and remove the vaporizer, then raise fresh gas flow to the maximum to flush anesthetic out of the circuit. Sevoflurane is also a halogenated inhalant and can trigger malignant hyperthermia, so switching agents does not help.",
    "source": {
      "title": "Merck Veterinary Manual: Malignant Hyperthermia in Animals",
      "reference": "https://www.merckvetmanual.com/metabolic-disorders/malignant-hyperthermia/malignant-hyperthermia-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-emergency-001",
    "domain": "emergency",
    "question": "What is the recommended chest compression rate during CPR in dogs and cats?",
    "options": [
      "60 to 80 compressions per minute",
      "80 to 100 compressions per minute",
      "100 to 120 compressions per minute",
      "140 to 160 compressions per minute"
    ],
    "correctAnswer": "100 to 120 compressions per minute",
    "explanation": "Chest compressions should be delivered at 100 to 120 per minute regardless of the patient's size. Slower rates do not generate enough blood flow, while much faster rates do not allow adequate chest recoil.",
    "source": {
      "title": "Merck Veterinary Manual: Cardiopulmonary Resuscitation of Small Animals",
      "reference": "https://www.merckvetmanual.com/emergency-medicine-and-critical-care/specific-diagnostics-and-therapy/cardiopulmonary-resuscitation-of-small-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-emergency-002",
    "domain": "emergency",
    "question": "During CPR, how long should each cycle of uninterrupted chest compressions last before a brief pause to switch compressors and check the ECG?",
    "options": [
      "30 seconds",
      "1 minute",
      "2 minutes",
      "5 minutes"
    ],
    "correctAnswer": "2 minutes",
    "explanation": "Compressions are delivered in uninterrupted 2-minute cycles, because it takes about a minute of continuous compressions for perfusion pressure to build. The pause between cycles should be under 10 seconds.",
    "source": {
      "title": "Merck Veterinary Manual: Cardiopulmonary Resuscitation of Small Animals",
      "reference": "https://www.merckvetmanual.com/emergency-medicine-and-critical-care/specific-diagnostics-and-therapy/cardiopulmonary-resuscitation-of-small-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-emergency-003",
    "domain": "emergency",
    "question": "During CPR on an intubated dog, how often should breaths be delivered?",
    "options": [
      "One breath every 2 seconds",
      "One breath every 6 seconds",
      "One breath every 15 seconds",
      "One breath every 30 seconds"
    ],
    "correctAnswer": "One breath every 6 seconds",
    "explanation": "Intubated patients are ventilated at about 10 breaths per minute, or one breath every 6 seconds, while compressions continue. Ventilating too fast causes hyperventilation, which can reduce blood flow to the brain and heart.",
    "source": {
      "title": "Merck Veterinary Manual: Cardiopulmonary Resuscitation of Small Animals",
      "reference": "https://www.merckvetmanual.com/emergency-medicine-and-critical-care/specific-diagnostics-and-therapy/cardiopulmonary-resuscitation-of-small-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-emergency-004",
    "domain": "emergency",
    "question": "During CPR on an intubated cat, the capnograph shows an end-tidal CO2 of 8 mm Hg. What should the team check first?",
    "options": [
      "Endotracheal tube placement and the quality of chest compressions",
      "Whether the cat has achieved return of spontaneous circulation",
      "Whether the pulse oximeter probe has fallen off",
      "Whether the cat needs a second dose of atropine"
    ],
    "correctAnswer": "Endotracheal tube placement and the quality of chest compressions",
    "explanation": "A very low end-tidal CO2 during CPR suggests the tube may be in the esophagus or misplaced, or that compressions are ineffective; the goal during CPR is at least 18 mm Hg. A sudden, sustained rise in end-tidal CO2, not a low value, is what suggests return of spontaneous circulation.",
    "source": {
      "title": "Merck Veterinary Manual: Cardiopulmonary Resuscitation of Small Animals",
      "reference": "https://www.merckvetmanual.com/emergency-medicine-and-critical-care/specific-diagnostics-and-therapy/cardiopulmonary-resuscitation-of-small-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-animal-care-001",
    "domain": "animal-care",
    "question": "A hospitalized dog with an indwelling urinary catheter is being monitored. What is the normal range for urine output?",
    "options": [
      "0.1 to 0.5 mL/kg/hour",
      "1 to 2 mL/kg/hour",
      "5 to 10 mL/kg/hour",
      "10 to 20 mL/kg/hour"
    ],
    "correctAnswer": "1 to 2 mL/kg/hour",
    "explanation": "Normal urine output is 1 to 2 mL/kg/hour. Output below about 0.8 mL/kg/hour is considered oliguric and should be reported to the veterinarian.",
    "source": {
      "title": "Merck Veterinary Manual: Monitoring the Critically Ill Small Animal Using the Rule of 20",
      "reference": "https://www.merckvetmanual.com/emergency-medicine-and-critical-care/monitoring-the-critically-ill-small-animal/monitoring-the-critically-ill-small-animal-using-the-rule-of-20",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "mvm-animal-care-002",
    "domain": "animal-care",
    "question": "When actively cooling a severely hyperthermic dog, why should the dog NOT be immersed in cold water?",
    "options": [
      "It causes peripheral vasoconstriction, which slows heat loss",
      "It lowers body temperature too slowly to be useful",
      "It increases the risk of aspiration pneumonia",
      "It interferes with accurate rectal temperature readings"
    ],
    "correctAnswer": "It causes peripheral vasoconstriction, which slows heat loss",
    "explanation": "Cold water immersion constricts peripheral blood vessels, which traps heat in the body core. Recommended cooling methods include IV fluids, wet towels with fans, and alcohol on the paw pads and axillary and inguinal areas.",
    "source": {
      "title": "Merck Veterinary Manual: Monitoring the Critically Ill Small Animal Using the Rule of 20",
      "reference": "https://www.merckvetmanual.com/emergency-medicine-and-critical-care/monitoring-the-critically-ill-small-animal/monitoring-the-critically-ill-small-animal-using-the-rule-of-20",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:17:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key."
    }
  },
  {
    "id": "aaha-anesthesia-001",
    "domain": "anesthesia",
    "question": "A healthy 2.5-kg cat is being anesthetized for a spay. Which breathing circuit is generally recommended for a patient this size?",
    "options": [
      "Non-rebreathing circuit",
      "Adult rebreathing (circle) circuit",
      "Induction chamber",
      "Face mask without a breathing circuit"
    ],
    "correctAnswer": "Non-rebreathing circuit",
    "explanation": "Non-rebreathing circuits are generally used for cats and small dogs under about 3 to 5 kg, because they add little resistance and dead space. Adult rebreathing circuits are used for larger patients; an induction chamber and a mask alone do not secure the airway for maintenance.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-002",
    "domain": "anesthesia",
    "question": "When leak testing an anesthesia breathing circuit, the pop-off valve is closed and the circuit is filled to what pressure before checking that it holds steady?",
    "options": [
      "5 to 10 cm H2O",
      "20 to 30 cm H2O",
      "50 to 60 cm H2O",
      "80 to 100 cm H2O"
    ],
    "correctAnswer": "20 to 30 cm H2O",
    "explanation": "The circuit is pressurized to 20 to 30 cm H2O on the manometer with the pop-off valve closed and the oxygen turned off; the pressure should hold steady. This is done before every patient and after changing any part of the circuit.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-003",
    "domain": "anesthesia",
    "question": "After completing a leak test on the anesthesia machine, what must be done before connecting the patient?",
    "options": [
      "Open the pop-off valve",
      "Close the oxygen flowmeter completely",
      "Fill the reservoir bag using the oxygen flush valve",
      "Turn the vaporizer to its highest setting"
    ],
    "correctAnswer": "Open the pop-off valve",
    "explanation": "The pop-off valve is closed only for the leak test. Leaving it closed when the patient is connected lets pressure build in the circuit and the patient's lungs, which can cause barotrauma.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-004",
    "domain": "anesthesia",
    "question": "Which action should be avoided when a patient is connected to a non-rebreathing circuit?",
    "options": [
      "Using the oxygen flush valve",
      "Monitoring end-tidal CO2",
      "Running oxygen at 200 to 400 mL/kg/min",
      "Leak testing the circuit before use"
    ],
    "correctAnswer": "Using the oxygen flush valve",
    "explanation": "The oxygen flush valve should never be used with a non-rebreathing circuit, because it delivers a high-pressure surge of oxygen directly toward the patient's lungs. High oxygen flow rates of 200 to 400 mL/kg/min are normal for these circuits.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-005",
    "domain": "anesthesia",
    "question": "An anesthetized dog's end-tidal CO2 rises to 65 mm Hg. What should the technician discuss with the veterinarian?",
    "options": [
      "Starting positive pressure ventilation",
      "Increasing the vaporizer setting",
      "Lowering the oxygen flow rate",
      "No change, because this value is normal under anesthesia"
    ],
    "correctAnswer": "Starting positive pressure ventilation",
    "explanation": "End-tidal CO2 in an appropriately anesthetized patient is about 40 to 50 mm Hg. Above 60 mm Hg indicates significant hypoventilation, and positive pressure ventilation should be started. Deepening anesthesia would further depress breathing.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-006",
    "domain": "anesthesia",
    "question": "At what SpO2 value do the AAHA anesthesia guidelines begin to consider oxygenation a concern?",
    "options": [
      "Below 99%",
      "Below 95%",
      "Below 85%",
      "Below 75%"
    ],
    "correctAnswer": "Below 95%",
    "explanation": "Oxygen saturation below 95% is a concern, and below 90% is severe. Waiting until values fall much lower delays correcting the cause, such as a misplaced tube or a disconnected circuit.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-007",
    "domain": "anesthesia",
    "question": "An anesthetized dog has a mean arterial pressure of 52 mm Hg. Which strategy allows the inhalant anesthetic dose to be reduced and can help improve blood pressure?",
    "options": [
      "Adding an opioid or a local anesthetic block",
      "Increasing the vaporizer setting",
      "Switching to a non-rebreathing circuit",
      "Turning off the IV fluids"
    ],
    "correctAnswer": "Adding an opioid or a local anesthetic block",
    "explanation": "A mean arterial pressure below about 60 to 70 mm Hg is hypotension. Balanced anesthesia, which adds analgesia such as an opioid or a local block, lets the patient stay comfortable on a lower inhalant dose. A crystalloid bolus of 5 to 20 mL/kg may also be given.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-008",
    "domain": "anesthesia",
    "question": "When do most postoperative anesthetic deaths in dogs and cats occur?",
    "options": [
      "Within the first 3 hours after anesthesia",
      "12 to 24 hours after anesthesia",
      "2 to 3 days after anesthesia",
      "About one week after anesthesia"
    ],
    "correctAnswer": "Within the first 3 hours after anesthesia",
    "explanation": "Roughly half of canine and more than half of feline anesthetic deaths happen after surgery, mostly in the first 3 hours. Recovery should be monitored as closely as maintenance until the patient is alert, warm, and able to move.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-009",
    "domain": "anesthesia",
    "question": "In most dogs, when should the endotracheal tube be removed during recovery?",
    "options": [
      "When the patient is swallowing vigorously",
      "As soon as the vaporizer is turned off",
      "When the patient first twitches its ears",
      "Only after the patient can stand and walk"
    ],
    "correctAnswer": "When the patient is swallowing vigorously",
    "explanation": "Extubation is done when breathing and SpO2 are normal and the patient swallows vigorously, which shows it can protect its own airway. The cuff is deflated just before the tube is pulled.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-anesthesia-010",
    "domain": "anesthesia",
    "question": "What is the recommended initial intraoperative crystalloid fluid rate for a dog with normal heart and kidney function under inhalant anesthesia?",
    "options": [
      "1 mL/kg/hour",
      "5 mL/kg/hour",
      "20 mL/kg/hour",
      "40 mL/kg/hour"
    ],
    "correctAnswer": "5 mL/kg/hour",
    "explanation": "Current AAHA guidelines recommend starting at 5 mL/kg/hour for dogs and 3 to 5 mL/kg/hour for cats with normal heart and kidney function. Higher rates raise the risk of fluid overload and should be reserved for situations like acute blood loss.",
    "source": {
      "title": "AAHA 2024 Fluid Therapy Guidelines: Fluid Therapy and Anesthesia",
      "reference": "https://www.aaha.org/resources/2024-aaha-fluid-therapy-guidelines-for-dogs-and-cats/section-4-fluid-therapy-and-anesthesia/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-dentistry-001",
    "domain": "dentistry",
    "question": "How is extubation modified after a dental procedure to help protect the airway from fluid and debris?",
    "options": [
      "Lower the nose slightly and leave the cuff slightly inflated while removing the tube",
      "Fully deflate the cuff and raise the nose before removing the tube",
      "Remove the tube while the patient is still deeply anesthetized",
      "Leave the tube in place until the patient can stand"
    ],
    "correctAnswer": "Lower the nose slightly and leave the cuff slightly inflated while removing the tube",
    "explanation": "After dental procedures, the nose is positioned slightly lower than the back of the head and the cuff is left slightly inflated so the tube sweeps fluid and debris out rather than letting it fall into the trachea.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-dentistry-002",
    "domain": "dentistry",
    "question": "Which hand instrument is used for subgingival scaling because its rounded heel and toe are less traumatic to the gingiva?",
    "options": [
      "Curette",
      "Sickle scaler",
      "Periodontal probe",
      "Extraction forceps"
    ],
    "correctAnswer": "Curette",
    "explanation": "Curettes have a rounded heel and toe, making them safer below the gumline. Sickle scalers have a sharp tip and are used above the gumline; a periodontal probe measures pockets rather than removing calculus.",
    "source": {
      "title": "AAHA 2019 Dental Care Guidelines: Essential Steps",
      "reference": "https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/essential-steps/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-dentistry-003",
    "domain": "dentistry",
    "question": "Why do the AAHA dental guidelines advise against using rotary scalers?",
    "options": [
      "They excessively roughen the enamel",
      "They cannot remove calculus",
      "They require general anesthesia",
      "They are too slow for routine cleanings"
    ],
    "correctAnswer": "They excessively roughen the enamel",
    "explanation": "Rotary scalers roughen the tooth surface, which makes it easier for plaque to build up again. Ultrasonic scalers followed by hand instruments are recommended instead.",
    "source": {
      "title": "AAHA 2019 Dental Care Guidelines: Essential Steps",
      "reference": "https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/essential-steps/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-dentistry-004",
    "domain": "dentistry",
    "question": "Which describes recommended technique for polishing teeth after scaling?",
    "options": [
      "A low-speed handpiece at no more than 3,000 rpm with fine prophy paste",
      "A high-speed handpiece with coarse pumice",
      "A low-speed handpiece with coarse pumice, held on each tooth for one minute",
      "Polishing is skipped when the ultrasonic scaler was used"
    ],
    "correctAnswer": "A low-speed handpiece at no more than 3,000 rpm with fine prophy paste",
    "explanation": "Polishing smooths the enamel scratches left by scaling. It uses a low-speed handpiece at no more than 3,000 rpm with fine paste; coarse grit roughens the surface, and excessive speed or pressure can overheat the tooth.",
    "source": {
      "title": "AAHA 2019 Dental Care Guidelines: Essential Steps",
      "reference": "https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/essential-steps/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-dentistry-005",
    "domain": "dentistry",
    "question": "What is the normal periodontal probing depth in a medium-sized dog?",
    "options": [
      "No more than 2 to 3 mm",
      "4 to 5 mm",
      "6 to 8 mm",
      "More than 10 mm"
    ],
    "correctAnswer": "No more than 2 to 3 mm",
    "explanation": "Normal probing depth is no more than 2 to 3 mm in a medium-sized dog and about 1 mm in a medium-sized cat. Deeper measurements suggest periodontal pockets, and each tooth should be probed in at least six places.",
    "source": {
      "title": "AAHA 2019 Dental Care Guidelines: Essential Steps",
      "reference": "https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/essential-steps/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-dentistry-006",
    "domain": "dentistry",
    "question": "A dog's dental radiographs show 25% to 50% attachment loss on several teeth. Which periodontal disease stage is this?",
    "options": [
      "PD1",
      "PD2",
      "PD3",
      "PD4"
    ],
    "correctAnswer": "PD3",
    "explanation": "PD1 is gingivitis without attachment loss, PD2 is under 25% attachment loss, PD3 is 25% to 50%, and PD4 is more than 50%.",
    "source": {
      "title": "AAHA 2019 Dental Care Guidelines: Essential Steps",
      "reference": "https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/essential-steps/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pharmacy-001",
    "domain": "pharmacy",
    "question": "A dog scheduled for anesthesia takes several daily medications. Which is commonly withheld on the day of anesthesia?",
    "options": [
      "Enalapril",
      "Pimobendan",
      "Levothyroxine",
      "Prednisone"
    ],
    "correctAnswer": "Enalapril",
    "explanation": "ACE inhibitors such as enalapril and benazepril are commonly held the day of anesthesia because they can worsen anesthetic hypotension. Thyroid, cardiac medications such as pimobendan, and steroids are generally continued, and steroids should never be stopped abruptly.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pharmacy-002",
    "domain": "pharmacy",
    "question": "A diabetic dog has been fasted for anesthesia. What is generally recommended for its morning insulin?",
    "options": [
      "Give a reduced dose",
      "Give the full usual dose",
      "Give double the usual dose",
      "Give the full dose IV instead of subcutaneously"
    ],
    "correctAnswer": "Give a reduced dose",
    "explanation": "A fasted patient will not eat the meal its usual insulin dose is meant to cover, so a full dose risks hypoglycemia. A reduced dose is given, and blood glucose is monitored during anesthesia.",
    "source": {
      "title": "AAHA 2020 Anesthesia and Monitoring Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2020-anesthesia/anesthesia_and_monitoring_guidelines_final.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pharmacy-003",
    "domain": "pharmacy",
    "question": "A dog needs IV fluids at 60 mL/hour through a gravity drip set that delivers 15 drops/mL. What drip rate should be set?",
    "options": [
      "1 drop every second",
      "1 drop every 4 seconds",
      "1 drop every 15 seconds",
      "4 drops every second"
    ],
    "correctAnswer": "1 drop every 4 seconds",
    "explanation": "Drops per second = mL/hour x drops/mL / 3,600 seconds. Here, 60 x 15 = 900 drops per hour, and 900 / 3,600 = 0.25 drops per second, or 1 drop every 4 seconds.",
    "source": {
      "title": "AAHA 2024 Fluid Therapy Guidelines: Fluid Administration and Monitoring",
      "reference": "https://www.aaha.org/resources/2024-aaha-fluid-therapy-guidelines-for-dogs-and-cats/section-8-fluid-administration-and-monitoring/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pharmacy-004",
    "domain": "pharmacy",
    "question": "How many drops per mL does a standard microdrip administration set deliver?",
    "options": [
      "10 drops/mL",
      "15 drops/mL",
      "20 drops/mL",
      "60 drops/mL"
    ],
    "correctAnswer": "60 drops/mL",
    "explanation": "Microdrip sets deliver 60 drops/mL, which makes them useful for small patients and slow rates. The most commonly used macrodrip sets deliver 10 or 15 drops/mL.",
    "source": {
      "title": "AAHA 2024 Fluid Therapy Guidelines: Fluid Administration and Monitoring",
      "reference": "https://www.aaha.org/resources/2024-aaha-fluid-therapy-guidelines-for-dogs-and-cats/section-8-fluid-administration-and-monitoring/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-animal-care-001",
    "domain": "animal-care",
    "question": "How often should a hospitalized patient's peripheral IV catheter be checked, according to the AAHA fluid therapy guidelines?",
    "options": [
      "At least twice a day, unwrapping the bandage fully",
      "Once every 3 days, when the catheter is replaced",
      "Only when the fluid pump alarms",
      "Once a day, by looking at the outside of the bandage"
    ],
    "correctAnswer": "At least twice a day, unwrapping the bandage fully",
    "explanation": "Catheters should be checked at least twice daily with the bandage fully unwrapped to look for swelling or thrombophlebitis. Routine replacement on a fixed schedule is not needed; catheters are replaced when there is a clinical reason.",
    "source": {
      "title": "AAHA 2024 Fluid Therapy Guidelines: Fluid Administration and Monitoring",
      "reference": "https://www.aaha.org/resources/2024-aaha-fluid-therapy-guidelines-for-dogs-and-cats/section-8-fluid-administration-and-monitoring/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-animal-care-002",
    "domain": "animal-care",
    "question": "Which practice is recommended for flushing IV catheters?",
    "options": [
      "Use prefilled saline flush syringes",
      "Draw flushes from a shared fluid bag kept in the treatment area",
      "Draw flushes from the patient's running fluid bag through the injection port",
      "Reuse a capped flush syringe for the same patient over several days"
    ],
    "correctAnswer": "Use prefilled saline flush syringes",
    "explanation": "Prefilled syringes are preferred because drawing flushes from fluid bags increases the risk of contamination. Ports should also be wiped with isopropyl alcohol before connecting or disconnecting.",
    "source": {
      "title": "AAHA 2024 Fluid Therapy Guidelines: Fluid Administration and Monitoring",
      "reference": "https://www.aaha.org/resources/2024-aaha-fluid-therapy-guidelines-for-dogs-and-cats/section-8-fluid-administration-and-monitoring/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-animal-care-003",
    "domain": "animal-care",
    "question": "A cat that has been on IV fluids for two days has gained weight and has an increased respiratory rate. It now also has chemosis and a clear nasal discharge. What do these signs most likely indicate?",
    "options": [
      "Fluid overload",
      "Dehydration",
      "Hypoglycemia",
      "Hyperthermia"
    ],
    "correctAnswer": "Fluid overload",
    "explanation": "Weight gain, a rising respiratory rate, chemosis, and clear nasal discharge in a patient receiving fluids are warning signs of fluid overload. Fluids should be stopped or slowed and the veterinarian alerted.",
    "source": {
      "title": "AAHA 2024 Fluid Therapy Guidelines: Fluid Therapy and Anesthesia",
      "reference": "https://www.aaha.org/resources/2024-aaha-fluid-therapy-guidelines-for-dogs-and-cats/section-4-fluid-therapy-and-anesthesia/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T00:49:24+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-001",
    "domain": "laboratory",
    "question": "Which type of blood collection tube is used for a complete blood count (CBC) on a dog?",
    "options": [
      "EDTA tube",
      "Heparin tube",
      "Sodium fluoride tube",
      "Serum tube with no anticoagulant"
    ],
    "correctAnswer": "EDTA tube",
    "explanation": "Blood for a CBC is collected into a tube containing EDTA anticoagulant and mixed right away to prevent clotting. The tube should be filled to the mark, and if the sample can't be run promptly, a freshly made blood smear should be sent with it.",
    "source": {
      "title": "Merck Veterinary Manual: Clinical Hematology",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-procedures-for-the-private-practice-laboratory/clinical-hematology",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:45:21+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-diagnostic-imaging-001",
    "domain": "diagnostic-imaging",
    "question": "A patient must be manually restrained for a radiograph. Which practice protects the technician?",
    "options": [
      "Wear a lead apron, lead gloves, and a thyroid shield, and keep gloved hands out of the primary beam",
      "Wear lead gloves so hands can safely be placed in the primary beam",
      "Wear a lead apron only, since thyroid shields are optional",
      "Open the collimator wide so the first image doesn't need to be repeated"
    ],
    "correctAnswer": "Wear a lead apron, lead gloves, and a thyroid shield, and keep gloved hands out of the primary beam",
    "explanation": "Lead aprons and gloves block most scatter radiation but only a small fraction of the primary beam, so gloved hands should never be in the beam. Thyroid shields are considered mandatory. Collimating tightly to the patient, not opening it wide, reduces scatter and staff exposure. Manual restraint should be kept to a minimum, with sedation often preferred.",
    "source": {
      "title": "Merck Veterinary Manual: Radiography of Animals",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-imaging/radiography-of-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:45:21+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-animal-care-003",
    "domain": "animal-care",
    "question": "During triage, a dog has a capillary refill time of 3 seconds. What does this most likely indicate?",
    "options": [
      "Poor perfusion or peripheral vasoconstriction",
      "Normal perfusion",
      "A hyperdynamic state, such as early compensated shock",
      "Elevated bilirubin"
    ],
    "correctAnswer": "Poor perfusion or peripheral vasoconstriction",
    "explanation": "A normal capillary refill time is 1 to 2 seconds. Longer than 2 seconds suggests poor perfusion or peripheral vasoconstriction. A time shorter than 1 second can be seen in hyperdynamic states such as fever, heatstroke, or early compensated shock.",
    "source": {
      "title": "Merck Veterinary Manual: Parameters to Evaluate During Triage",
      "reference": "https://www.merckvetmanual.com/multimedia/table/parameters-to-evaluate-during-triage",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:45:21+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-surgical-nursing-001",
    "domain": "surgical-nursing",
    "question": "Which combination of conditions is commonly used for steam sterilization in an autoclave?",
    "options": [
      "121\u00b0C (250\u00b0F) at 15 psi for 15 minutes",
      "60\u00b0C at 5 psi",
      "80\u00b0C with no added pressure",
      "100\u00b0C at normal atmospheric pressure"
    ],
    "correctAnswer": "121\u00b0C (250\u00b0F) at 15 psi for 15 minutes",
    "explanation": "Pressurized steam is the most efficient sterilization method, commonly run at 121\u00b0C at 15 psi. Boiling at 100\u00b0C without pressure provides only some measure of sterility, and lower temperatures do not sterilize.",
    "source": {
      "title": "Merck Veterinary Manual: Heat as a Disinfectant",
      "reference": "https://www.merckvetmanual.com/pharmacology/antiseptics-and-disinfectants/heat-as-a-disinfectant-for-use-with-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-surgical-nursing-002",
    "domain": "surgical-nursing",
    "question": "If no autoclave is available, what can be said about boiling scrubbed surgical instruments?",
    "options": [
      "It reliably destroys all bacterial spores",
      "It provides some measure of sterility but does not guarantee it",
      "It is the preferred method for heat-sensitive items",
      "It is as reliable as steam under pressure"
    ],
    "correctAnswer": "It provides some measure of sterility but does not guarantee it",
    "explanation": "Boiling is only a fallback for instruments that have already been scrubbed, and it gives some measure of sterility rather than guaranteed sterility. Steam under pressure is far more effective.",
    "source": {
      "title": "Merck Veterinary Manual: Heat as a Disinfectant",
      "reference": "https://www.merckvetmanual.com/pharmacology/antiseptics-and-disinfectants/heat-as-a-disinfectant-for-use-with-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-surgical-nursing-003",
    "domain": "surgical-nursing",
    "question": "Which item is best sterilized with ethylene oxide rather than steam?",
    "options": [
      "A towel clamp",
      "A metal needle holder",
      "A stainless steel spay pack",
      "A flexible endoscope"
    ],
    "correctAnswer": "A flexible endoscope",
    "explanation": "Ethylene oxide is used for equipment that cannot be autoclaved, such as endoscopes, catheters, tubing, and implantable devices. Stainless steel instruments tolerate steam, which is faster and more efficient.",
    "source": {
      "title": "Merck Veterinary Manual: Vapor-Phase Disinfectants",
      "reference": "https://merckvetmanual.com/pharmacology/antiseptics-and-disinfectants/vapor-phase-disinfectants",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-surgical-nursing-001",
    "domain": "surgical-nursing",
    "question": "Which statement about ethylene oxide sterilization is correct?",
    "options": [
      "It is the fastest sterilization method available",
      "It is flammable and classified as a carcinogen, so staff exposure is monitored",
      "It is safe to use without any aeration time",
      "It is the preferred method for linen surgical drapes"
    ],
    "correctAnswer": "It is flammable and classified as a carcinogen, so staff exposure is monitored",
    "explanation": "Ethylene oxide is flammable and classified as a carcinogen. A full cycle including aeration takes about 12 to 24 hours, and staff who use it should be trained and have their exposure monitored.",
    "source": {
      "title": "AAHA Trends: Sterilization Methods in Vet Med",
      "reference": "https://www.aaha.org/trends-magazine/publications/sterilization-methods-in-vet-med-not-one-size-fits-all/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-surgical-nursing-002",
    "domain": "surgical-nursing",
    "question": "Which material cannot be sterilized with hydrogen peroxide gas plasma?",
    "options": [
      "Camera equipment",
      "Plastic IV catheters",
      "Cotton gauze",
      "Stainless steel instruments"
    ],
    "correctAnswer": "Cotton gauze",
    "explanation": "Hydrogen peroxide gas plasma is a low-temperature method for heat-sensitive items, and its byproducts are water vapor and oxygen. Wood, paper, linen, and gauze cannot be sterilized this way.",
    "source": {
      "title": "AAHA Trends: Sterilization Methods in Vet Med",
      "reference": "https://www.aaha.org/trends-magazine/publications/sterilization-methods-in-vet-med-not-one-size-fits-all/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-surgical-nursing-003",
    "domain": "surgical-nursing",
    "question": "Surgical instruments have been soaking in a \"cold sterile\" tray. Which statement is correct?",
    "options": [
      "They are sterile once they have soaked for 10 minutes",
      "They are sterile as long as the solution is changed daily",
      "They are high-level disinfected, not sterile, and should not be used for surgery",
      "They are acceptable for minor surgery but not major surgery"
    ],
    "correctAnswer": "They are high-level disinfected, not sterile, and should not be used for surgery",
    "explanation": "Cold sterile soaking solutions are high-level disinfectants, not true sterilants. AAHA standards prohibit using cold sterile instruments for any surgery, minor or major.",
    "source": {
      "title": "AAHA Trends: Sterilization Methods in Vet Med",
      "reference": "https://www.aaha.org/trends-magazine/publications/sterilization-methods-in-vet-med-not-one-size-fits-all/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-surgical-nursing-004",
    "domain": "surgical-nursing",
    "question": "What must be done to surgical instruments before they are sterilized?",
    "options": [
      "Nothing, because sterilization removes organic material",
      "Soak them overnight in dilute chlorhexidine",
      "Clean them to remove blood and other organic material",
      "Wrap them while still wet so steam penetrates better"
    ],
    "correctAnswer": "Clean them to remove blood and other organic material",
    "explanation": "Equipment must be properly cleaned before it is sterilized. Cleaning removes organic matter, which otherwise reduces the effectiveness of disinfection and sterilization.",
    "source": {
      "title": "AAHA 2018 Infection Control, Prevention, and Biosecurity Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/infection-control/icpb_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-surgical-nursing-005",
    "domain": "surgical-nursing",
    "question": "Which test confirms that an autoclave cycle actually killed microorganisms?",
    "options": [
      "Indicator tape changing color",
      "The pack wrap looking dry after the cycle",
      "The pressure gauge reaching its target",
      "A biological indicator (spore test)"
    ],
    "correctAnswer": "A biological indicator (spore test)",
    "explanation": "Biological indicators contain bacterial spores and confirm that sterilization conditions were adequate to kill them. Indicator tape and gauge readings only show that certain conditions were reached.",
    "source": {
      "title": "AAHA Trends: Sterilization Methods in Vet Med",
      "reference": "https://www.aaha.org/trends-magazine/publications/sterilization-methods-in-vet-med-not-one-size-fits-all/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-surgical-nursing-006",
    "domain": "surgical-nursing",
    "question": "Which method of presurgical hand antisepsis do the AAHA infection control guidelines encourage?",
    "options": [
      "Rubbing with an alcohol-based surgical hand rub",
      "Scrubbing with a stiff brush for 10 minutes",
      "Washing with bar soap and water",
      "Wiping hands with a disinfectant used for surfaces"
    ],
    "correctAnswer": "Rubbing with an alcohol-based surgical hand rub",
    "explanation": "Alcohol-based surgical hand rubs are now encouraged over traditional scrubs because they act quickly, kill bacteria effectively, and cause fewer skin problems. They take about 3 minutes. Bar soap should never be used.",
    "source": {
      "title": "AAHA 2018 Infection Control, Prevention, and Biosecurity Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/infection-control/icpb_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "lit-surgical-nursing-001",
    "domain": "surgical-nursing",
    "question": "Why is chlorhexidine gluconate a common choice for surgical skin preparation?",
    "options": [
      "It needs no contact time to work",
      "Dilute solutions can be premixed and stored for weeks",
      "It must be rinsed off immediately after application",
      "It has residual activity on the skin for at least 24 hours"
    ],
    "correctAnswer": "It has residual activity on the skin for at least 24 hours",
    "explanation": "Chlorhexidine binds to skin and keeps working for at least 24 hours. Dilute solutions below 2% can become contaminated, so they should not be premixed and stored.",
    "source": {
      "title": "Nye and Thieman Mankin, Small Animal Patient Preoperative Preparation (Frontiers in Veterinary Science, 2024)",
      "reference": "https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2024.1374826/full",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "lit-surgical-nursing-002",
    "domain": "surgical-nursing",
    "question": "Why is 70% alcohol used for skin antisepsis instead of 100% alcohol?",
    "options": [
      "Water is needed for alcohol to kill microorganisms effectively",
      "100% alcohol inactivates chlorhexidine",
      "100% alcohol is too expensive for routine use",
      "70% alcohol dries faster on haired skin"
    ],
    "correctAnswer": "Water is needed for alcohol to kill microorganisms effectively",
    "explanation": "Alcohol is most effective at concentrations of 60% to 90%, because water is necessary for its microbicidal action. Pure alcohol is less effective.",
    "source": {
      "title": "Nye and Thieman Mankin, Small Animal Patient Preoperative Preparation (Frontiers in Veterinary Science, 2024)",
      "reference": "https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2024.1374826/full",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-surgical-nursing-004",
    "domain": "surgical-nursing",
    "question": "Which term describes applying an antimicrobial agent to body tissues, such as a patient's skin before surgery, to prevent infection?",
    "options": [
      "Antisepsis",
      "Sanitization",
      "Sterilization",
      "Disinfection"
    ],
    "correctAnswer": "Antisepsis",
    "explanation": "Antiseptics are applied to body tissues to suppress or prevent infection. Disinfectants are applied to surfaces such as floors and tables, sterilization destroys all microorganisms, and sanitization reduces microbes to an acceptable level.",
    "source": {
      "title": "Merck Veterinary Manual: Overview of Antiseptics and Disinfectants",
      "reference": "https://www.merckvetmanual.com/pharmacology/antiseptics-and-disinfectants/overview-of-antiseptics-and-disinfectants-for-use-with-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pain-management-001",
    "domain": "pain-management",
    "question": "Chronic pain is conventionally defined as pain lasting longer than how long?",
    "options": [
      "2 weeks",
      "1 year",
      "3 months",
      "1 week"
    ],
    "correctAnswer": "3 months",
    "explanation": "Chronic pain is conventionally defined as lasting more than 3 months, though the guidelines note this cutoff is arbitrary. The longer pain persists, the more likely it is to become maladaptive and harder to treat.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pain-management-002",
    "domain": "pain-management",
    "question": "What is multimodal analgesia?",
    "options": [
      "Combining drugs or therapies that act at different points in the pain pathway",
      "Using only nondrug therapies for pain",
      "Giving the maximum dose of a single analgesic",
      "Switching analgesics every few hours"
    ],
    "correctAnswer": "Combining drugs or therapies that act at different points in the pain pathway",
    "explanation": "Multimodal analgesia combines drugs and nondrug approaches that work at different points in the pain pathway. This reduces reliance on any one drug and lowers the risk of side effects.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pain-management-003",
    "domain": "pain-management",
    "question": "What is the goal of preemptive analgesia?",
    "options": [
      "To shorten anesthetic recovery by reversing sedation",
      "To replace general anesthesia",
      "To avoid the need for postoperative pain scoring",
      "To prevent pain before it starts or becomes established"
    ],
    "correctAnswer": "To prevent pain before it starts or becomes established",
    "explanation": "Preemptive analgesia means giving analgesics as early as possible in the disease process, or before a painful procedure, to stop pain before it starts or becomes established. Established pain is harder to control.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pain-management-004",
    "domain": "pain-management",
    "question": "Which pain assessment tool scores a cat's facial expressions and can be used without touching the cat?",
    "options": [
      "Glasgow Short Form scale for dogs",
      "Feline Grimace Scale",
      "Canine Brief Pain Inventory",
      "Liverpool Osteoarthritis in Dogs (LOAD)"
    ],
    "correctAnswer": "Feline Grimace Scale",
    "explanation": "The Feline Grimace Scale is a validated tool that scores facial expressions and can be used without palpation after initial training. The Canine Brief Pain Inventory and LOAD are owner questionnaires for dogs with chronic pain.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pain-management-005",
    "domain": "pain-management",
    "question": "According to the 2022 AAHA pain guidelines, which type of analgesic is described as the most effective available in small animal practice?",
    "options": [
      "NSAIDs",
      "Local anesthetics",
      "Gabapentin",
      "Oral tramadol"
    ],
    "correctAnswer": "Local anesthetics",
    "explanation": "Local anesthetics such as lidocaine and bupivacaine are described as the most effective analgesics available and should be used in every surgery. Gabapentin has limited evidence for pain, and oral tramadol was not effective postoperatively in dogs.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pain-management-006",
    "domain": "pain-management",
    "question": "How does cold therapy help manage acute pain after surgery?",
    "options": [
      "It reduces nociceptor activation and edema in the tissue",
      "It replaces the need for analgesic drugs",
      "It increases blood flow to speed healing",
      "It is only useful for chronic pain"
    ],
    "correctAnswer": "It reduces nociceptor activation and edema in the tissue",
    "explanation": "Cold therapy cools tissue to a depth of 2 to 4 cm, which reduces nociceptor activation and edema. Cold compression in the first 72 hours after stifle surgery reduced pain and lameness.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-pain-management-007",
    "domain": "pain-management",
    "question": "A dog stands hunched with its belly drawn up. This posture most likely indicates pain in which region?",
    "options": [
      "The elbow",
      "The tail",
      "The abdomen",
      "The head"
    ],
    "correctAnswer": "The abdomen",
    "explanation": "A hunched, \"tucked up\" posture suggests abdominal pain. Other postural clues include shifting weight off a painful limb, and postural straining, which suggests lower urinary or lower GI tract pain.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-animal-care-004",
    "domain": "animal-care",
    "question": "What is the normal heart rate range for a cat at triage?",
    "options": [
      "150 to 220 beats per minute",
      "70 to 100 beats per minute",
      "60 to 120 beats per minute",
      "240 to 300 beats per minute"
    ],
    "correctAnswer": "150 to 220 beats per minute",
    "explanation": "A normal heart rate in cats is about 150 to 220 beats per minute, much higher than in dogs (about 60 to 120 in large dogs and 70 to 120 in small dogs). A cat with a heart rate below 150 may be in shock.",
    "source": {
      "title": "Merck Veterinary Manual: Parameters to Evaluate During Triage",
      "reference": "https://www.merckvetmanual.com/multimedia/table/parameters-to-evaluate-during-triage",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-animal-care-005",
    "domain": "animal-care",
    "question": "A dog arrives with pale, almost white mucous membranes. What do these suggest?",
    "options": [
      "Anemia or shock",
      "Carbon monoxide exposure",
      "Elevated bilirubin",
      "Normal perfusion"
    ],
    "correctAnswer": "Anemia or shock",
    "explanation": "Pale or white mucous membranes suggest anemia or shock. Yellow membranes suggest elevated bilirubin, and pink membranes indicate normal red cell volume and perfusion.",
    "source": {
      "title": "Merck Veterinary Manual: Parameters to Evaluate During Triage",
      "reference": "https://www.merckvetmanual.com/multimedia/table/parameters-to-evaluate-during-triage",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-animal-care-006",
    "domain": "animal-care",
    "question": "Yellow mucous membranes in a dog or cat most likely indicate which problem?",
    "options": [
      "Elevated bilirubin from liver disease or red blood cell breakdown",
      "Severe hypoxemia",
      "Low platelet count",
      "Normal perfusion"
    ],
    "correctAnswer": "Elevated bilirubin from liver disease or red blood cell breakdown",
    "explanation": "Yellow (icteric) mucous membranes indicate elevated bilirubin, from liver disease or from red blood cell breakdown. Cyanotic membranes indicate severe hypoxemia, and petechiae suggest a platelet problem.",
    "source": {
      "title": "Merck Veterinary Manual: Parameters to Evaluate During Triage",
      "reference": "https://www.merckvetmanual.com/multimedia/table/parameters-to-evaluate-during-triage",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-animal-care-007",
    "domain": "animal-care",
    "question": "A dog in early shock has bounding pulses. What does this finding usually indicate?",
    "options": [
      "Normal circulation",
      "Hyperdynamic compensatory shock",
      "Cardiac arrest",
      "Severe vasoconstriction with low cardiac output"
    ],
    "correctAnswer": "Hyperdynamic compensatory shock",
    "explanation": "Bounding pulses reflect a hyperdynamic, compensatory stage of shock with a widened pulse pressure. Weak or absent pulses suggest low cardiac output or vasoconstriction.",
    "source": {
      "title": "Merck Veterinary Manual: Parameters to Evaluate During Triage",
      "reference": "https://www.merckvetmanual.com/multimedia/table/parameters-to-evaluate-during-triage",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-animal-care-008",
    "domain": "animal-care",
    "question": "A dog responds only to painful stimuli and not to sound or touch. How is this level of consciousness described?",
    "options": [
      "Alert",
      "Depressed",
      "Comatose",
      "Stupor"
    ],
    "correctAnswer": "Stupor",
    "explanation": "A patient in stupor can be roused only by painful stimuli, which indicates a severe neurologic or metabolic disturbance. A depressed patient responds less to sight and touch but can still be roused, and a comatose patient cannot be roused at all.",
    "source": {
      "title": "Merck Veterinary Manual: Parameters to Evaluate During Triage",
      "reference": "https://www.merckvetmanual.com/multimedia/table/parameters-to-evaluate-during-triage",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-animal-care-004",
    "domain": "animal-care",
    "question": "A puppy with suspected parvovirus has just been handled. How should the technician clean their hands?",
    "options": [
      "Wipe hands with a dry paper towel",
      "Hand hygiene is not needed if gloves were worn",
      "Use alcohol-based hand sanitizer",
      "Wash with soap and water"
    ],
    "correctAnswer": "Wash with soap and water",
    "explanation": "Alcohol-based hand sanitizer does not work against nonenveloped viruses such as parvovirus, or against Clostridium spores and Cryptosporidium, so hands must be washed with soap and water. Hand hygiene is also needed after removing gloves.",
    "source": {
      "title": "AAHA 2018 Infection Control, Prevention, and Biosecurity Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/infection-control/icpb_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-animal-care-005",
    "domain": "animal-care",
    "question": "A surface disinfectant's label calls for 10 minutes of contact time, but the surface dries after 3 minutes. What should be done?",
    "options": [
      "Reapply the disinfectant so the surface stays wet for the full contact time",
      "Nothing, because the disinfectant worked as soon as it was applied",
      "Wipe the surface with a dry towel",
      "Rinse the surface with water"
    ],
    "correctAnswer": "Reapply the disinfectant so the surface stays wet for the full contact time",
    "explanation": "Disinfectants need their full contact time, generally 5 to 10 minutes, to work. If the surface dries early, the disinfectant should be reapplied so it stays wet.",
    "source": {
      "title": "AAHA 2018 Infection Control, Prevention, and Biosecurity Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/infection-control/icpb_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-animal-care-006",
    "domain": "animal-care",
    "question": "A technician removes a disposable gown after treating a patient in isolation and will see the same patient later. What should happen to the gown?",
    "options": [
      "Hang it outside the isolation room to reuse for that patient",
      "Wear it to the next patient on the ward",
      "Discard it and use a new one next time",
      "Reuse it for that patient only if it looks clean"
    ],
    "correctAnswer": "Discard it and use a new one next time",
    "explanation": "Disposable gowns, gloves, and shoe covers are never reused, even on the same patient. Reusing them risks contaminating the wearer and the environment.",
    "source": {
      "title": "AAHA 2018 Infection Control, Prevention, and Biosecurity Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/infection-control/icpb_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-animal-care-007",
    "domain": "animal-care",
    "question": "Which practice is correct when using diluted bleach as a disinfectant?",
    "options": [
      "Mix it with other cleaners to make it stronger",
      "Make a fresh dilution daily and never mix it with other chemicals",
      "Store the dilution in a clear spray bottle in the sun",
      "Make a large batch once a month"
    ],
    "correctAnswer": "Make a fresh dilution daily and never mix it with other chemicals",
    "explanation": "Diluted bleach loses strength, so dilutions should be changed daily and not stored in clear containers. Bleach must never be mixed with other chemicals, since some combinations release toxic gases.",
    "source": {
      "title": "AAHA 2018 Infection Control, Prevention, and Biosecurity Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/infection-control/icpb_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-animal-care-009",
    "domain": "animal-care",
    "question": "On the 9-point body condition score scale, what score is considered ideal for a cat?",
    "options": [
      "9",
      "7",
      "3",
      "5"
    ],
    "correctAnswer": "5",
    "explanation": "On the 9-point scale, ideal is 5 for cats and 4 to 5 for dogs, while 1 is very thin and 9 is obese. Recording the scale used, such as 5/9, avoids confusion with the 5-point scale, where 3 is ideal.",
    "source": {
      "title": "Merck Veterinary Manual: Body Condition Score Scales for Dogs and Cats",
      "reference": "https://www.merckvetmanual.com/multimedia/table/body-condition-score-scales-for-dogs-and-cats",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aafp-animal-care-001",
    "domain": "animal-care",
    "question": "According to the 2022 AAFP/ISFM Cat Friendly Veterinary Interaction Guidelines, which restraint technique should be avoided?",
    "options": [
      "Loosely wrapping the cat in a towel",
      "Letting the cat stay in its chosen position",
      "Examining the cat in the bottom half of its carrier",
      "Scruffing"
    ],
    "correctAnswer": "Scruffing",
    "explanation": "Scruffing and heavy restraint increase fear and should be avoided. The guidelines recommend minimal restraint, loose towel wraps for anxious cats, and starting the exam where the cat chooses to be.",
    "source": {
      "title": "2022 AAFP/ISFM Cat Friendly Veterinary Interaction Guidelines",
      "reference": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10845437/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aafp-animal-care-002",
    "domain": "animal-care",
    "question": "A fearful cat will not come out of its carrier. Which approach do the Cat Friendly guidelines recommend?",
    "options": [
      "Tip the carrier upside down so the cat falls out",
      "Leave the cat in the carrier and skip the exam",
      "Pull the cat out by the scruff",
      "Remove the top half of the carrier and examine the cat in the bottom half"
    ],
    "correctAnswer": "Remove the top half of the carrier and examine the cat in the bottom half",
    "explanation": "Removing the carrier's top lets the cat stay in a familiar space during the exam, and a towel over the cat can give it a sense of hiding. Forcing a cat out increases fear and makes handling harder.",
    "source": {
      "title": "2022 AAFP/ISFM Cat Friendly Veterinary Interaction Guidelines",
      "reference": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10845437/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aafp-animal-care-003",
    "domain": "animal-care",
    "question": "Which approach to a nervous cat do the Cat Friendly guidelines recommend?",
    "options": [
      "Corner the cat so it cannot escape",
      "Approach quickly from the front to finish faster",
      "Lean over the cat and maintain steady eye contact",
      "Get to the cat's level, avoid direct eye contact, and move slowly"
    ],
    "correctAnswer": "Get to the cat's level, avoid direct eye contact, and move slowly",
    "explanation": "Cats feel threatened by being loomed over, stared at, or cornered. Getting to the cat's level, avoiding direct eye contact, blinking slowly, and approaching slowly from the side reduce fear.",
    "source": {
      "title": "2022 AAFP/ISFM Cat Friendly Veterinary Interaction Guidelines",
      "reference": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10845437/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-001",
    "domain": "pharmacy",
    "question": "How do NSAIDs such as meloxicam produce their effects?",
    "options": [
      "They inhibit cyclooxygenase (COX), blocking prostaglandin synthesis",
      "They stimulate mu opioid receptors",
      "They block NMDA receptors",
      "They block sodium channels in nerves"
    ],
    "correctAnswer": "They inhibit cyclooxygenase (COX), blocking prostaglandin synthesis",
    "explanation": "NSAIDs block prostaglandin synthesis by inhibiting cyclooxygenase (COX) enzymes. Ketamine blocks NMDA receptors, opioids act on opioid receptors, and local anesthetics block sodium channels.",
    "source": {
      "title": "Merck Veterinary Manual: Analgesics Used in Animals",
      "reference": "https://www.merckvetmanual.com/therapeutics/pain-assessment-and-management/analgesics-used-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-002",
    "domain": "pharmacy",
    "question": "A dog receiving an NSAID is prescribed prednisone. What is the concern?",
    "options": [
      "There is no concern",
      "Prednisone makes NSAIDs ineffective, but the combination is otherwise safe",
      "Corticosteroids and NSAIDs should not be given concurrently",
      "NSAIDs must be given at a double dose when combined with steroids"
    ],
    "correctAnswer": "Corticosteroids and NSAIDs should not be given concurrently",
    "explanation": "Corticosteroids and NSAIDs should not be given together because the combination raises the risk of serious adverse effects. The veterinarian should be alerted before both are dispensed.",
    "source": {
      "title": "Merck Veterinary Manual: Analgesics Used in Animals",
      "reference": "https://www.merckvetmanual.com/therapeutics/pain-assessment-and-management/analgesics-used-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-003",
    "domain": "pharmacy",
    "question": "Why must acetaminophen never be given to cats?",
    "options": [
      "It has no effect on pain in cats",
      "It is too expensive for routine feline use",
      "It causes only mild sedation in cats",
      "Cats cannot metabolize it adequately, which can cause fatal methemoglobinemia"
    ],
    "correctAnswer": "Cats cannot metabolize it adequately, which can cause fatal methemoglobinemia",
    "explanation": "Cats lack adequate metabolic pathways to process acetaminophen, which can lead to fatal methemoglobinemia. It is not approved for use in animals.",
    "source": {
      "title": "Merck Veterinary Manual: Analgesics Used in Animals",
      "reference": "https://www.merckvetmanual.com/therapeutics/pain-assessment-and-management/analgesics-used-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-004",
    "domain": "pharmacy",
    "question": "Which drug reverses the effects of alpha-2 agonists such as dexmedetomidine?",
    "options": [
      "Flumazenil",
      "Naloxone",
      "Atropine",
      "Atipamezole"
    ],
    "correctAnswer": "Atipamezole",
    "explanation": "Atipamezole is an alpha-2 antagonist that reverses alpha-2 agonist sedation. Once reversed, the alpha-2 agonist no longer provides analgesia, so other pain control may be needed.",
    "source": {
      "title": "Merck Veterinary Manual: Analgesics Used in Animals",
      "reference": "https://www.merckvetmanual.com/therapeutics/pain-assessment-and-management/analgesics-used-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-005",
    "domain": "pharmacy",
    "question": "How is buprenorphine classified?",
    "options": [
      "Alpha-2 agonist",
      "Partial mu opioid agonist",
      "Full mu opioid agonist",
      "Pure opioid antagonist"
    ],
    "correctAnswer": "Partial mu opioid agonist",
    "explanation": "Buprenorphine is a partial mu agonist. Morphine, hydromorphone, and fentanyl are full mu agonists, butorphanol is an agonist-antagonist, and naloxone is a pure opioid antagonist.",
    "source": {
      "title": "Merck Veterinary Manual: Analgesics Used in Animals",
      "reference": "https://www.merckvetmanual.com/therapeutics/pain-assessment-and-management/analgesics-used-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-006",
    "domain": "pharmacy",
    "question": "Ketamine produces analgesia mainly by blocking which receptor?",
    "options": [
      "NMDA receptor",
      "Mu opioid receptor",
      "GABA receptor",
      "Alpha-2 receptor"
    ],
    "correctAnswer": "NMDA receptor",
    "explanation": "Ketamine is a noncompetitive antagonist of NMDA receptors, which play a role in pain processing and central sensitization.",
    "source": {
      "title": "Merck Veterinary Manual: Analgesics Used in Animals",
      "reference": "https://www.merckvetmanual.com/therapeutics/pain-assessment-and-management/analgesics-used-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-007",
    "domain": "pharmacy",
    "question": "Repeated use of which drug in cats has been associated with acute kidney failure and death?",
    "options": [
      "Atipamezole",
      "Gabapentin",
      "Meloxicam",
      "Buprenorphine"
    ],
    "correctAnswer": "Meloxicam",
    "explanation": "Repeated meloxicam use in cats has been linked to acute renal failure and death. Buprenorphine is an opioid, gabapentin is not an NSAID, and atipamezole is a reversal agent.",
    "source": {
      "title": "Merck Veterinary Manual: Analgesics Used in Animals",
      "reference": "https://www.merckvetmanual.com/therapeutics/pain-assessment-and-management/analgesics-used-in-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-pharmacy-008",
    "domain": "pharmacy",
    "question": "What can happen if a hypotonic solution is given intravenously?",
    "options": [
      "Red blood cells can swell and lyse (hemolysis)",
      "Blood clots form immediately at the catheter",
      "Nothing, because tonicity does not matter for IV fluids",
      "Red blood cells shrink (crenation)"
    ],
    "correctAnswer": "Red blood cells can swell and lyse (hemolysis)",
    "explanation": "Hypotonic solutions given IV can cause red blood cells to swell and burst (hemolysis), while hypertonic solutions can cause crenation. Tonicity is important for any IV product.",
    "source": {
      "title": "Merck Veterinary Manual: Routes of Administration and Dosage Forms of Drugs",
      "reference": "https://www.merckvetmanual.com/pharmacology/pharmacology-introduction/routes-of-administration-and-dosage-forms-of-drugs",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-002",
    "domain": "laboratory",
    "question": "A urine sample cannot be analyzed within 30 minutes of collection. What is the recommended handling?",
    "options": [
      "Add tap water to keep it diluted",
      "Freeze it immediately",
      "Leave it on the counter until the end of the day",
      "Refrigerate it for up to 24 hours, knowing crystals may form"
    ],
    "correctAnswer": "Refrigerate it for up to 24 hours, knowing crystals may form",
    "explanation": "Urine should be evaluated within 30 minutes. If that isn't possible, it can be refrigerated for up to 24 hours. Refrigeration may cause crystals to precipitate but does not change pH or specific gravity.",
    "source": {
      "title": "Merck Veterinary Manual: Urinalysis",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-procedures-for-the-private-practice-laboratory/urinalysis",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-003",
    "domain": "laboratory",
    "question": "How should urine specific gravity be measured in dogs and cats?",
    "options": [
      "With a glucometer",
      "By looking at the urine color",
      "With the specific gravity pad on a urine dipstick",
      "With a refractometer"
    ],
    "correctAnswer": "With a refractometer",
    "explanation": "Urine specific gravity should be measured with a veterinary refractometer. The dipstick's specific gravity, leukocyte, and nitrite pads are not valid in animals and should not be used.",
    "source": {
      "title": "Merck Veterinary Manual: Urinalysis",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-procedures-for-the-private-practice-laboratory/urinalysis",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-004",
    "domain": "laboratory",
    "question": "Urine sediment contains crystals shaped like \"coffin lids.\" Which crystal type is this?",
    "options": [
      "Calcium oxalate dihydrate",
      "Cystine",
      "Struvite",
      "Calcium oxalate monohydrate"
    ],
    "correctAnswer": "Struvite",
    "explanation": "Struvite crystals look like coffin lids or prisms. Calcium oxalate dihydrate crystals are square with an X or envelope-shaped, and calcium oxalate monohydrate crystals are dumbbell-shaped.",
    "source": {
      "title": "Merck Veterinary Manual: Urinalysis",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-procedures-for-the-private-practice-laboratory/urinalysis",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-005",
    "domain": "laboratory",
    "question": "Urine sediment shows small, flat, colorless crystals that look like picket fence posts. Which toxicity should be considered?",
    "options": [
      "Ethylene glycol",
      "Chocolate",
      "Acetaminophen",
      "Lead"
    ],
    "correctAnswer": "Ethylene glycol",
    "explanation": "Small, flat, colorless crystals resembling picket fence posts in neutral to acidic urine are associated with ethylene glycol (antifreeze) toxicity, which is an emergency.",
    "source": {
      "title": "Merck Veterinary Manual: Urinalysis",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-procedures-for-the-private-practice-laboratory/urinalysis",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-006",
    "domain": "laboratory",
    "question": "Which fecal flotation method is more sensitive for detecting parasite eggs?",
    "options": [
      "Simple (passive) flotation",
      "Centrifugal flotation",
      "Simple flotation read after only 2 minutes",
      "Flotation using tap water"
    ],
    "correctAnswer": "Centrifugal flotation",
    "explanation": "Centrifugal flotation is far more sensitive than simple flotation. Flotation also needs a high-specific-gravity solution, so tap water will not float parasite eggs, and simple flotation needs time for eggs to rise.",
    "source": {
      "title": "Merck Veterinary Manual: Parasitology in Veterinary Practice",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/parasitology/parasitology-in-veterinary-practice",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-007",
    "domain": "laboratory",
    "question": "Which flotation solution is the best centrifugal option for detecting Giardia cysts?",
    "options": [
      "Sheather's sugar solution (specific gravity 1.27)",
      "Tap water",
      "Normal saline",
      "Zinc sulfate (specific gravity 1.18)"
    ],
    "correctAnswer": "Zinc sulfate (specific gravity 1.18)",
    "explanation": "Zinc sulfate with a specific gravity of 1.18 is considered the best centrifugal flotation solution for Giardia cysts. Sugar solutions are also used for flotation, but zinc sulfate is preferred for Giardia.",
    "source": {
      "title": "Merck Veterinary Manual: Parasitology in Veterinary Practice",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/parasitology/parasitology-in-veterinary-practice",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-008",
    "domain": "laboratory",
    "question": "Which test is the method of choice for detecting lungworm larvae in feces?",
    "options": [
      "Baermann examination",
      "Sedimentation",
      "Direct smear",
      "Centrifugal flotation"
    ],
    "correctAnswer": "Baermann examination",
    "explanation": "The Baermann examination is the method of choice for nematode larvae such as lungworms. Sedimentation is used for fluke eggs, and flotation does not reliably detect larvae.",
    "source": {
      "title": "Merck Veterinary Manual: Parasitology in Veterinary Practice",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/parasitology/parasitology-in-veterinary-practice",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-laboratory-009",
    "domain": "laboratory",
    "question": "What do canine heartworm antigen tests detect?",
    "options": [
      "Heartworm eggs in feces",
      "Antigen from adult female heartworms",
      "Antibodies against heartworm larvae",
      "Microfilariae in the blood"
    ],
    "correctAnswer": "Antigen from adult female heartworms",
    "explanation": "Heartworm antigen tests detect circulating antigen from adult female worms. Microfilariae are detected with tests such as the modified Knott's test, and dogs should be tested with both antigen and microfilaria tests.",
    "source": {
      "title": "Merck Veterinary Manual: Parasitology in Veterinary Practice",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/parasitology/parasitology-in-veterinary-practice",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-diagnostic-imaging-002",
    "domain": "diagnostic-imaging",
    "question": "What does the radiation safety principle ALARA stand for?",
    "options": [
      "As long as radiation is authorized",
      "As low as reasonably achievable",
      "Annual limit of allowable radiation absorption",
      "Always limit all radiation access"
    ],
    "correctAnswer": "As low as reasonably achievable",
    "explanation": "ALARA means keeping radiation exposure as low as reasonably achievable. Staff involved in imaging should also have their exposure monitored.",
    "source": {
      "title": "Merck Veterinary Manual: Radiography of Animals",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-imaging/radiography-of-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-diagnostic-imaging-003",
    "domain": "diagnostic-imaging",
    "question": "How should the x-ray beam be collimated when taking a radiograph?",
    "options": [
      "Just inside the area of interest, cutting off its edges",
      "Fully open, to capture the whole table",
      "Collimation is not needed with digital radiography",
      "To about 1 cm beyond the edges of the area being imaged"
    ],
    "correctAnswer": "To about 1 cm beyond the edges of the area being imaged",
    "explanation": "Collimating to about 1 cm beyond the subject limits scatter radiation and staff exposure while still capturing the area of interest.",
    "source": {
      "title": "Merck Veterinary Manual: Radiography of Animals",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-imaging/radiography-of-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-diagnostic-imaging-004",
    "domain": "diagnostic-imaging",
    "question": "Which staff members should avoid taking radiographs whenever possible?",
    "options": [
      "Staff who have been badge-monitored for over a year",
      "Staff who are pregnant or under 18",
      "Staff who wear glasses",
      "Staff who have worked fewer than 5 years"
    ],
    "correctAnswer": "Staff who are pregnant or under 18",
    "explanation": "People who are pregnant or under 18 should refrain from taking radiographs whenever possible, because they are more vulnerable to radiation effects.",
    "source": {
      "title": "Merck Veterinary Manual: Radiography of Animals",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-imaging/radiography-of-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-diagnostic-imaging-005",
    "domain": "diagnostic-imaging",
    "question": "Which contrast agent is used to outline the lining of the gastrointestinal tract on radiographs?",
    "options": [
      "Air in the urinary bladder",
      "Barium sulfate",
      "Sterile saline",
      "Iodinated contrast given IV"
    ],
    "correctAnswer": "Barium sulfate",
    "explanation": "Barium sulfate outlines the GI mucosa. Iodinated contrast agents are used to show blood vessels and the urinary collecting system.",
    "source": {
      "title": "Merck Veterinary Manual: Radiography of Animals",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-imaging/radiography-of-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-diagnostic-imaging-006",
    "domain": "diagnostic-imaging",
    "question": "Which approach best reduces staff radiation exposure when positioning a patient for radiographs?",
    "options": [
      "Stand closer to the x-ray tube so positioning is faster",
      "Use chemical restraint (sedation or anesthesia) instead of manual restraint when possible",
      "Take extra images to make sure one is usable",
      "Hold the patient without lead gear to work faster"
    ],
    "correctAnswer": "Use chemical restraint (sedation or anesthesia) instead of manual restraint when possible",
    "explanation": "Manual restraint should be kept to a minimum, and chemical restraint is often preferred. Taking time to position correctly for the first image also reduces repeat exposures.",
    "source": {
      "title": "Merck Veterinary Manual: Radiography of Animals",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/diagnostic-imaging/radiography-of-animals",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-communication-001",
    "domain": "communication",
    "question": "A client can't bring a fresh fecal sample to the clinic for more than 2 hours. What should the technician tell them?",
    "options": [
      "Keep it in a warm place so parasites stay active",
      "Refrigerate the sample in a sealed, leakproof container",
      "Leave it in the yard and bring it tomorrow",
      "Freeze it, then thaw it in warm water before the visit"
    ],
    "correctAnswer": "Refrigerate the sample in a sealed, leakproof container",
    "explanation": "Fecal samples should be fresh and kept in a leakproof, sealed container. If they can't be submitted within 2 hours, they should be refrigerated. Samples left in soil or at room temperature for long periods are unreliable.",
    "source": {
      "title": "Merck Veterinary Manual: Parasitology in Veterinary Practice",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/parasitology/parasitology-in-veterinary-practice",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "mvm-communication-002",
    "domain": "communication",
    "question": "A client asks why their dog needs more fecal tests when the first one was negative. Which explanation is accurate?",
    "options": [
      "Negative results are never reliable",
      "The first test was probably done incorrectly",
      "A single negative fecal test can't rule out parasites, because parasites don't shed eggs constantly",
      "More tests are only needed for cats"
    ],
    "correctAnswer": "A single negative fecal test can't rule out parasites, because parasites don't shed eggs constantly",
    "explanation": "A single negative fecal exam is not enough to rule out parasites. Testing several samples, such as on consecutive days, improves the chance of detecting intermittent shedding.",
    "source": {
      "title": "Merck Veterinary Manual: Parasitology in Veterinary Practice",
      "reference": "https://www.merckvetmanual.com/clinical-pathology-and-procedures/parasitology/parasitology-in-veterinary-practice",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-communication-001",
    "domain": "communication",
    "question": "What do the AAHA/IAAHPC end-of-life guidelines, citing the AVMA, say about sedation before euthanasia?",
    "options": [
      "Sedation should never be used before euthanasia",
      "Sedation is only given after the client leaves",
      "Sedation is only needed for horses",
      "Pre-euthanasia sedation or anesthesia is recommended, especially when clients are present"
    ],
    "correctAnswer": "Pre-euthanasia sedation or anesthesia is recommended, especially when clients are present",
    "explanation": "Pre-euthanasia sedation or anesthesia is recommended, especially when clients are present. An IV catheter is also recommended for giving the euthanasia solution when clients are present.",
    "source": {
      "title": "2016 AAHA/IAAHPC End-of-Life Care Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/end-of-life-care/2016_aaha_iaahpc_eolc_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-communication-002",
    "domain": "communication",
    "question": "A client says they do not want to be present for their pet's euthanasia. How should the team respond?",
    "options": [
      "Delay the euthanasia until they change their mind",
      "Tell them most clients regret leaving",
      "Insist that they stay, since it helps the pet",
      "Respect the decision without making the client feel guilty"
    ],
    "correctAnswer": "Respect the decision without making the client feel guilty",
    "explanation": "Clients should be offered the chance to be present and to hold or comfort their pet, but a choice not to be present must be respected without guilt. Clients should be told what each step involves.",
    "source": {
      "title": "2016 AAHA/IAAHPC End-of-Life Care Guidelines",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/end-of-life-care/2016_aaha_iaahpc_eolc_guidelines.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-communication-003",
    "domain": "communication",
    "question": "How often do the 2022 AAHA pain guidelines suggest reevaluating patients with chronic pain?",
    "options": [
      "Once a year at the annual exam",
      "About every 3 to 6 months, or sooner if problems arise",
      "Only when the owner reports a problem",
      "Every week for the rest of the pet's life"
    ],
    "correctAnswer": "About every 3 to 6 months, or sooner if problems arise",
    "explanation": "Chronic pain patients should be reevaluated about every 3 to 6 months, or sooner if problems come up. Technicians often coordinate these cases by checking in with owners about pain control and daily activities.",
    "source": {
      "title": "AAHA 2022 Pain Management Guidelines for Dogs and Cats",
      "reference": "https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-pain-management/resources/2022-aaha-pain-management-guidelines-for-dog-and-cats_updated_060622.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "recover-emergency-001",
    "domain": "emergency",
    "question": "According to the 2024 RECOVER guidelines, which statement about epinephrine during CPR is correct?",
    "options": [
      "Epinephrine should be given before the first defibrillation for shockable rhythms",
      "High-dose epinephrine is no longer recommended; the standard dose is 0.01 mg/kg",
      "Epinephrine should be given every 30 seconds",
      "High-dose epinephrine (0.1 mg/kg) is the first-line dose"
    ],
    "correctAnswer": "High-dose epinephrine is no longer recommended; the standard dose is 0.01 mg/kg",
    "explanation": "RECOVER 2024 recommends against routine high-dose epinephrine; the standard dose is 0.01 mg/kg every 3 to 5 minutes for nonshockable rhythms. Epinephrine is not recommended before the first defibrillation attempt for shockable rhythms.",
    "source": {
      "title": "2024 RECOVER Guidelines: Updated Treatment Recommendations for CPR in Dogs and Cats",
      "reference": "https://escholarship.org/content/qt4fw7q61v/qt4fw7q61v.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "recover-emergency-002",
    "domain": "emergency",
    "question": "During CPR, how often should atropine be given, if it is used?",
    "options": [
      "Every 3 to 5 minutes",
      "Only after return of spontaneous circulation",
      "Once, early in the CPR effort",
      "Every 2-minute cycle"
    ],
    "correctAnswer": "Once, early in the CPR effort",
    "explanation": "Atropine, if used, is given as a single dose early in CPR. RECOVER recommends against repeated doses.",
    "source": {
      "title": "2024 RECOVER Guidelines: Updated Treatment Recommendations for CPR in Dogs and Cats",
      "reference": "https://escholarship.org/content/qt4fw7q61v/qt4fw7q61v.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "recover-emergency-003",
    "domain": "emergency",
    "question": "Where should chest compressions be focused for a medium-to-large, keel-chested dog such as a greyhound?",
    "options": [
      "On the sternum with the dog on its back",
      "Over the widest part of the chest",
      "Over the abdomen",
      "Directly over the heart"
    ],
    "correctAnswer": "Directly over the heart",
    "explanation": "For keel-chested dogs, hands are placed directly over the heart (the cardiac pump). For round-chested dogs, compressions go over the widest part of the thorax (the thoracic pump).",
    "source": {
      "title": "2024 RECOVER Guidelines: Updated Treatment Recommendations for CPR in Dogs and Cats",
      "reference": "https://escholarship.org/content/qt4fw7q61v/qt4fw7q61v.pdf",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  },
  {
    "id": "aaha-dentistry-007",
    "domain": "dentistry",
    "question": "Are systemic antibiotics routinely needed after dental extractions, according to the AAHA dental guidelines?",
    "options": [
      "Yes, for every extraction",
      "Only if the patient is under 1 year old",
      "Yes, but only for cats",
      "No, they are usually not indicated, because most dental procedures are clean-contaminated"
    ],
    "correctAnswer": "No, they are usually not indicated, because most dental procedures are clean-contaminated",
    "explanation": "Most dental procedures are clean-contaminated, so systemic antibiotics after extractions are usually not indicated. They are used in specific situations, such as radiographic evidence of presumed osteomyelitis.",
    "source": {
      "title": "AAHA 2019 Dental Care Guidelines: Essential Steps",
      "reference": "https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/essential-steps/",
      "verified": true
    },
    "reviewStatus": "approved",
    "verification": {
      "method": "ai-crosscheck",
      "result": "pass",
      "checkedAt": "2026-11-07T18:57:33+00:00",
      "note": "Independent AI answered blind from the cited page and matched the answer key; flagged wording fixed."
    }
  }
];
