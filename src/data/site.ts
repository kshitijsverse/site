// Single source of truth for links and the course line. Edit here, every page updates.

export const site = {
  name: "Kshitij's Verse",
  person: "Kshitij Sharma",
  handle: "@kshitijsverse",
  url: "https://kshitijsverse.com",
  email: "hello@kshitijsverse.com",
  description:
    "Kshitij Sharma, a Senior Staff AI/ML engineer, teaches AI the way it's built in industry: from Python to AI agents, one short lesson at a time.",
  calProfile: "kshitijsverse",
};

export const channels = [
  { name: "Instagram", href: "https://www.instagram.com/kshitijsverse/", what: "Daily Reels: one AI idea in under a minute" },
  { name: "YouTube", href: "https://www.youtube.com/@kshitijsverse", what: "Shorts, plus longer walkthroughs of each stop" },
  { name: "WhatsApp channel", href: "https://whatsapp.com/channel/0029VbDXIwa7YScwpjxPjf09", what: "The day's lesson, new tools and AI job openings" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kshitij-sharma-ai/", what: "Lessons from building AI in production, for working professionals" },
  { name: "X", href: "https://x.com/kshitijsverse", what: "AI news as it breaks, with quick takes" },
  { name: "Threads", href: "https://www.threads.net/@kshitijsverse", what: "Short takes and Reels" },
  { name: "GitHub", href: "https://github.com/kshitijsverse", what: "Code for every lesson" },
];

export const calls = [
  { title: "Intro chat: learning AI", length: "15 min", slug: "15min", what: "Not sure where to start? Tell me where you are and we'll pick your first step." },
  { title: "AI career & learning guidance", length: "30 min", slug: "30min", what: "Talk to a Senior Staff AI/ML engineer about your goals, your background and a plan that gets you there." },
];

export type Phase = { id: string; name: string; color: string };

export const phases: Phase[] = [
  { id: "found", name: "Foundations", color: "var(--line-found)" },
  { id: "ml", name: "Machine learning", color: "var(--line-ml)" },
  { id: "dl", name: "Deep learning", color: "var(--line-dl)" },
  { id: "llm", name: "Language models", color: "var(--line-llm)" },
  { id: "agent", name: "Agents", color: "var(--line-agent)" },
];

export type Stop = {
  name: string;
  phase: Phase["id"];
  learn: string;
  build: string;
};

// The order can change as we go; the line is drawn from this list.
export const stops: Stop[] = [
  {
    name: "Python",
    phase: "found",
    learn: "Variables, lists, loops and functions: the parts of Python that every AI project uses.",
    build: "Small scripts that read a file, clean it up and answer a question about it.",
  },
  {
    name: "Statistics & maths",
    phase: "found",
    learn: "Averages, spread, probability and just enough linear algebra to read a model.",
    build: "A notebook that explains a real dataset with numbers you can defend.",
  },
  {
    name: "Machine learning",
    phase: "ml",
    learn: "How a model learns from examples: regression, classification, training and testing.",
    build: "Your first model that predicts something useful, and an honest measure of how good it is.",
  },
  {
    name: "Deep learning",
    phase: "dl",
    learn: "Neural networks from the inside: layers, gradients and why depth helps.",
    build: "A small network trained from scratch, then the same thing in PyTorch.",
  },
  {
    name: "Transformers",
    phase: "llm",
    learn: "Attention, tokens and embeddings: the architecture behind ChatGPT and Claude.",
    build: "A tiny transformer that writes text, so the big ones stop being magic.",
  },
  {
    name: "NLP & LLMs",
    phase: "llm",
    learn: "Prompting, retrieval (RAG), fine-tuning and evaluating language models.",
    build: "A question-answering tool over your own notes.",
  },
  {
    name: "AI agents",
    phase: "agent",
    learn: "Models that plan, use tools and take actions, and how to keep them reliable.",
    build: "An agent that finishes a real multi-step task on its own.",
  },
];

export const currentStop = 0; // index into stops: where the course currently is

export const phaseOf = (id: Phase["id"]) => phases.find((p) => p.id === id)!;
