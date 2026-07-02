// MIDI-REPA demo data. Edit this file to add/change columns, prompts, FAD numbers, or silent cells.
// Audio lives at audio/<column.id>/gen_<promptIndex>.mp3 . app.js renders the table from this.

// One column per model run. `fad` = official LAION-CLAP-music FAD vs 300 real clips (null = not computed).
const COLUMNS = [
  { id: "baseline",  label: "baseline",         mobile: "baseline (no MIDI)",         fad: "0.601" },
  { id: "dual",      label: "MIDI+JEPA&nbsp;dual", mobile: "dual: L4 pitch + L8 PupuJEPA", fad: "0.575" },
  { id: "irepa_L4",  label: "roll&nbsp;L4",     mobile: "piano-roll teacher L4",       fad: "0.580" },
  { id: "irepa_L11", label: "roll&nbsp;L11",    mobile: "piano-roll teacher L11",      fad: null    },
  { id: "pupu_L4",   label: "PupuJEPA&nbsp;L4", mobile: "PupuJEPA teacher L4",         fad: null    },
  { id: "pupu_L8",   label: "PupuJEPA&nbsp;L8", mobile: "PupuJEPA teacher L8",         fad: "0.581" },
];

// One row per prompt (ATTM-style tag triplet; last two are OOD combos).
const PROMPTS = [
  "A melancholic ambient track featuring piano.",
  "An energetic rock track with electric guitar.",
  "A relaxing jazz piece featuring saxophone.",
  "A dark electronic track with synthesizer.",
  "A dramatic classical piece featuring strings.",
  "A warm folk track with acoustic guitar.",
  "A groovy funk track with bass and drums.",
  "An uplifting cinematic track featuring orchestra.",
  "An aggressive classical piece with synthesizer.",
  "A dreamy techno track featuring violin.",
];

// Cells that collapsed to (near-)silence, as "<column.id>:<promptIndex>".
const SILENT = new Set(["irepa_L11:3", "irepa_L11:9"]);
