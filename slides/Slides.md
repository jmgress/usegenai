---
marp: true
theme: custom-default
footer: 'James Gress | AI Director @ Accenture | https://jmgress.github.io/usegenai/'
---
# AI at Work and in Life (Opportunities to Optimize)

![bg right:40%](img/00-jamesgress.png)

## James Gress
_AI Director Accenture_


<i class="fa-brands fa-linkedin"></i> LinkedIn: [jamesgress](https://linkedin.com/in/jamesgress/)  
<i class="fa-brands fa-github"></i> GitHub: [jmgress](https://github.com/jmgress)  
<i class="fa-brands fa-meetup"></i> [Tampa Bay Generative AI Meetup](https://www.meetup.com/tampa-bay-generative-ai-meetup/)
<!-- 
Done 100's of Prototypes
Taken 10 applications to Production ranging from simple RAG to more complex Agentic systems
Specialize in AI in the SDLD or TDLC
-->

---

# AI Grew Up Fast

- **2023** — AI could **chat and write**. ChatGPT went mainstream: drafting emails, summarizing text, answering questions, and generating basic images.
- **2024** — AI could **see, hear, and reason**. Multimodal models handled images, voice, and documents. Retrieval made answers grounded; coding assistants became everyday tools.
- **2025** — AI could **act**. Agents planned multi-step tasks, used tools, browsed the web, and executed work across apps. Reasoning models closed the gap on hard problems.
- **2026** — AI **works alongside us**. Desktop-level agents (Cowork, Agent Mode) read our files, manage our inboxes, and deliver finished outcomes — not just responses.

> Three years ago it gave us answers. Today it gets things done.

---

# Context is Everything: Why the AI Seems to "Get" You

<div style="text-align: center;">

![width:1200px](img/contextwindow.drawio.svg?page=1)


</div>

<!-- Typical ordering inside the context window
System prompt – The hidden instructions from the platform or developer.
Example: “You are ChatGPT, a large language model trained by OpenAI. Follow these guidelines…”
Can also include special behavior rules, safety policies, or formatting requirements.
Developer or application-specific instructions – Additional hidden setup from the app integrating the model.
Example: “Always respond in JSON unless otherwise specified.”
Conversation history – Your past messages + the model’s past responses.
May be direct text or summaries if the history is long.
Injected knowledge or retrieved content – Snippets from web search, databases, documents, or memory.
Your latest prompt – The most recent user message. -->

<!--
System Prompts can vastly ajust the behavior, some issues in the past have been
Google, Implicit prompt bias, with image generation
Grok, Spreading extremist narratives
OpenAI Sycophantic behavior -->

---

# Lot's of tools in this space (here is a handful)
- https://chatgpt.com/
- https://www.perplexity.ai/
- https://claude.ai/
- https://copilot.microsoft.com/chats/
- https://gemini.google.com/app
- https://www.meta.ai/
- https://grok.com/
- https://chat.mistral.ai/chat

<!-- https://www.genspark.ai/ -->

---

# Comparing Today's Top Models

| Provider | Model | Strengths |
|---|---|---|
| **OpenAI** | GPT-5.4 | Balanced reasoning, strong tool use, large 400K context |
| **Anthropic** | Claude Opus 4.7 | Deepest reasoning, long-form writing, agentic tasks |
| **Anthropic** | Claude Sonnet 4.6 | Best everyday balance of speed & quality |
| **Anthropic** | Claude Haiku 4.5 | Fast, lightweight, cost-efficient |
| **Google** | Gemini 3.1 | Massive context, strong multimodal (image/video) |
| **xAI** | Grok 4 | Real-time X/web data, more candid tone |

<!-- No single "best" model — pick based on the task:
- Reasoning-heavy work → Opus or GPT-5.1 Thinking
- Fast drafting & chat → Sonnet or Haiku
- Research with big docs → Gemini
- Current events / social signal → Grok -->

---
 
# Claude Mythos Preview
### Anthropic's most capable model — deliberately held back
 
> **Not being released:** its ability to autonomously find and exploit zero-day vulnerabilities poses serious cybersecurity risks if misused, so Anthropic is keeping it to a small set of **Project Glasswing** partners while they learn how to deploy Mythos-class models safely at scale.
 
- **Announced April 7, 2026** — called a "step change" in capability; stronger than the just-released Opus 4.7
- **Proof point** — in testing, autonomously discovered and exploited zero-days across every major OS and browser (oldest: a 27-year-old OpenBSD bug)

---

# ⚠️ 5 Things to Watch For When Writing a Prompt

1. **Leading prompts** — How you phrase the question shapes the answer. "Why is X the best?" will defend X. Ask neutrally.
2. **Anchoring with your draft** — If you share your plan or answer first, the model tends to build on it rather than challenge it. Ask for critique before revealing your version.
3. **Forcing a format** — Demanding "5 bullets" or "a one-paragraph answer" can distort the content. Let the format fit the answer, not the other way around.
4. **Under-specified context** — Missing the audience, goal, or constraints leads to generic output. Say who it's for, what it's for, and what "good" looks like.
5. **Privacy & data leakage** — Don't paste secrets, client data, or PII into consumer chat tools. Assume it could be retained.

---

# ⚠️ 5 Things to Watch For in the Response

1. **Sycophancy** — The model often agrees with you, even when you're wrong. Push back and ask "what's the counter-argument?"
2. **Confabulations** — Confidently stated facts, citations, or quotes that don't exist. Verify anything that matters.
3. **Stale knowledge** — Models have training cutoffs. For anything time-sensitive, ask it to search or provide the source.
4. **False precision** — Specific numbers, percentages, and statistics can sound authoritative but be invented. Treat any figure as a claim to verify.
5. **Missing trade-offs** — Answers often arrive without the downsides. Ask "what are the trade-offs?" or "what would make this fail?"

---

# Before We Go Live — A Few Caveats

- **Audience first** — This is aimed at a **general audience**. There are more technical ways to do every one of these things; we're keeping it approachable.
- **Not exhaustive** — New features ship **daily**. There's no way to cover everything, and some of what I show will be outdated soon.
- **My way, not the only way** — These are patterns **I use**. Your workflow may look different, and that's fine.
- **Things will go sideways** — That's part of the fun. When something doesn't work, it's a chance to see how to recover.

---

# Let's do this live..... it's more exciting and what could go wrong?

<!-- This a general audience discussion on how some of AI tools work and what are we exactly talking to, will be using ChatGPT but
there are many others, and a lof of them have similer features.

Somthings work really well, however somethings don't, and somethings if we give it a bit better context can get more out of them 

type in "What are you?, "What are you?, How did you get created" -->

---

# Don't Overly Complicate Things

You don't need a perfect prompt to get value.

- **Start simple** — ask like you'd ask a smart coworker. Refine from there.
- **Skip the "prompt engineering" rabbit hole** — most tasks don't need a 10-paragraph setup.
- **Iterate, don't perfect** — a short follow-up beats a long rewrite.
- **Use plain language** — no special syntax, no magic words.

> If it takes longer to write the prompt than to do the task yourself, you're overthinking it.

---

# A simple question (the Task)?

> Create a presentation that explains the core components of a good prompt.

---

# The Claude Sidebar — What You're Seeing

A quick tour of the top-left navigation:

- **New chat** — Start a fresh conversation with no prior context.
- **Projects** — A dedicated workspace that holds files, instructions, and related chats together so Claude stays on the same page across sessions.
- **Artifacts** — Longer-form outputs (documents, code, slides, diagrams) that open in a side panel you can edit alongside the chat.
- **Ask your org** — Search and draw on your organization's shared knowledge — connected docs, wikis, and approved sources.
- **Customize** — Set your preferences, personality, and default instructions so every new chat starts the way you like.

---

# Pick a Mode — Steer Claude Before You Start

Buttons above the chat box tune Claude for the kind of task you're doing:

- **Write** — Optimized for drafting and editing: emails, docs, posts, marketing copy.
- **Learn** — Tutor-style responses that explain step-by-step, check understanding, and adapt to your level.
- **Code** — Focused on engineering tasks: writing, explaining, debugging, and reviewing code.
- **Career chat** — Career-specific coaching: resumes, interviews, job search, professional growth.
- **Claude Choose** — Let Claude pick the best mode based on what you ask.

> Same model underneath — different default instructions so the response fits the task.

---

# Use Voice — Think Out Loud, Get Work Done

Voice turns dead time into productive time.

- **Hands-free, eyes-free** — works on your commute, walk, or while doing chores
- **Lower friction** — it's easier to talk through an idea than to type it
- **Great for drafts and outlines** — let the model capture your thinking, clean it up later

> **Real example:** On my drive to and from work, I talked through the ideas for *this* presentation. Claude turned that rambling into a clean outline — and that outline became the slides you're looking at now.

---

# Pin the Chat — or Start a Project

Once a conversation is going well, don't lose it.

- **Pin the chat** — keep it at the top of your sidebar so you can return and continue with full context.
- **Start a Project** — a dedicated workspace that holds instructions, files, and related chats together.

**When to pin:** ongoing tasks, a thread you'll reference later, a "working session" you want to resume.

**When to use a Project:** recurring work, shared context across multiple chats, or when you want the model to always follow the same ground rules (tone, audience, format).

> Same model, same chat, richer context — better answers every time.

---

# It's getting better at Math

> What is 2 + 2?

> How many days has it been since ChatGPT was launched?

---

# Normalizing

<!-- _footer: "" -->

> You are a project manager that is an expert at writing reports at a leadership level, please take the attached status report and give me a rolled up status for an executive level report.  Some of the status are high level and some are very detailed and technical, please normalize and roll this up so that an c suite executive expects.

---

# Memory 

> Please remember that I like my emails to be professional.

---

# Creating Projects
- Projects is a feature that lets you create a dedicated workspace where the model can keep context, files, and instructions together for a specific goal or topic.

---

# Agent Mode
- Agent Mode is a ChatGPT capability that lets the AI act as a goal-oriented “agent,” able to plan, break down, and execute multi-step tasks by deciding which tools, data sources, and actions to use—often chaining them together—until it reaches your intended outcome.

> Please find me a flight and hotel for my upcoming vacation to Denmark starting next week Wednesday returning in two weeks on Thursday. I would like the flight to direct and a hotel in Alborg on the fjord with a city view and walking distant to many restaurants.

---

# Claude Cowork

**Cowork** is Claude's agentic desktop experience — you give it a goal, and it does the work for you across your apps.

- **Goal & outcome** — describe what you want done, not each step
- **Works with your files** — read, edit, and create directly on your machine
- **Deep app integration** — Gmail, Drive, Slack, Chrome
- **Multi-step execution** — plans and chains actions to completion
- **Desktop app, paid plans only**

<!-- Example — opening 5 roles:
Cowork reads your inbox, pre-fills role requests, and drafts JDs directly in the staffing tool. -->

---

# Canvas Mode
- Canvas is a collaborative editing space that opens alongside the chat so you and the AI can work together on longer-form content—like documents, code, or designs—in a structured, editable format.

---

# Study
- Study feature is like an interactive tutor mode—it helps you learn or review material step-by-step, adapting to your pace and preferred style.

---

# Codex
- Codex feature in ChatGPT was the coding-focused experience powered by the Codex model, designed to help users write, understand, and debug code directly in the chat.

---

# Temporay Chat

- Temporary Chat in ChatGPT is a conversation mode where the AI doesn’t retain any memory of what you say once the chat ends.
- No long-term memory – nothing from the conversation is saved to your account’s history or the model’s memory.
- Fresh context – every temporary chat starts with a blank slate, so past interactions won’t influence responses.
- Privacy-focused – ideal for sensitive or one-off questions you don’t want tied to your ongoing chat history.
> It’s essentially incognito mode for ChatGPT conversations.

---

# Turn an AI Paper into a podcast and now video

- https://notebooklm.google.com

---

# Creating Presentations

- https://gamma.app

---

# Sam Altman – CEO of OpenAI

## "What does my future look like?"

> "There are sort of two views you can take.  
> You can say, ‘Oh man, it’s doing everything I can do,’  
> or you can say, ‘Look at all the new things I can now do.’"

— **April 2025**

---

# Questions?

---

# Appendix

---

# Deep Research
- Deep Research is a feature that uses multi-step reasoning and trusted sources to conduct thorough, accurate investigations on complex topics.

> I’m preparing a 10-minute talk for small business owners on how AI can help them reduce operational costs without sacrificing quality.
Please research trusted, recent sources (from the last 6 months) and:
Identify the top 5 most impactful AI use cases for small businesses.
Provide 2 real-world examples for each, including company names and outcomes.
Highlight potential pitfalls or risks for each use case.
Organize your findings in a clear table with citations.

<!-- This works well because it forces Deep Research to:
Pull from current, credible sources
Perform multi-step reasoning (finding, comparing, summarizing)
Give structured output that’s presentation-ready -->

<!-- Also noticed that this triggers a message across to mobile devices that it has started -->