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
| **OpenAI** | GPT-5.1 | Balanced reasoning, strong tool use, large 400K context |
| **Anthropic** | Claude Opus 4.5 | Deepest reasoning, long-form writing, agentic tasks |
| **Anthropic** | Claude Sonnet 4.5 | Best everyday balance of speed & quality |
| **Anthropic** | Claude Haiku 4.5 | Fast, lightweight, cost-efficient |
| **Google** | Gemini 2.5 Pro | Massive context, strong multimodal (image/video) |
| **xAI** | Grok 4 | Real-time X/web data, more candid tone |

<!-- No single "best" model — pick based on the task:
- Reasoning-heavy work → Opus or GPT-5.1 Thinking
- Fast drafting & chat → Sonnet or Haiku
- Research with big docs → Gemini
- Current events / social signal → Grok -->


---

# ⚠️ Watch Out for Sycophancy in AI

**What Happened**  
- In April 2025, an update to GPT-4o made it overly flattering and agreeable.  
- The model would praise and agree with users Help me create a status report, some team members gave very high-level updates while others gave very detailed ones. Please rewrite and group them so they are all at the same mid-level of detail, suitable for an executive audience.
Original Updates:
Improve customer experience
Conduct Q3 market survey of 500 customers in North America
Launch mobile app
Update privacy policy to align with new GDPR changes
Design wireframes for the new dashboard
Enhance product quality
Implement real-time chat supportexcessively—even when wrong.  

**OpenAI's Response**  
- Rolled back to a previous, more balanced version.  
- Adjusted training to reduce over-agreeableness.  
- Planning more personality controls and better safety reviews.  

**Takeaway**  
> AI needs to be **helpful and truthful**—not just friendly.

<!--
The rollback applied to the *model update itself* (GPT-4o’s newer version), not just the system prompt. 
OpenAI reverted the updated GPT-4o because it became overly flattering and agreeable (“sycophantic”). 
They also plan additional adjustments to system prompts and training methods, but the rollback specifically 
reverted the model version to a previous, more balanced state.
-->

---

# Let's do this live..... it's more exciting and what could go wrong?

<!-- This a general audience discussion on how some of AI tools work and what are we exactly talking to, will be using ChatGPT but
there are many others, and a lof of them have similer features.

Somthings work really well, however somethings don't, and somethings if we give it a bit better context can get more out of them 

type in "What are you?, "What are you?, How did you get created" -->

---

# A simple question (the Task)?

> Please help me write an email to ask for a raise.

---

# A better prompt (more than just the ask)?

> You are an expert at writing emails and asking for a raise.  I am working for a consulting company and managing three client projects. Please help me write an email to ask for a raise and keep the tone professional. 

---

# Be careful on how you ask

Use the word "like" or "something like" when asking to adjust the results of a response.

> Please add something like, I have enabled and trained other in how to incorprate AI into their work process to allign the team to be more productive. 

---

# Make it do some work for you.

> I report to James Gress can you find information about him to understand his personality type and adjust the email to match.

---

# It's getting better at Math

> What is 2 + 2?

> How many days has it been since ChatGPT was launched?

---

# Normalizing

<!-- _footer: "" -->

> Help me create a status report, some team members gave very high-level updates while others gave very detailed ones. Please rewrite and group them so they are all at the same mid-level of detail, suitable for an executive audience.
Original Updates:
Improve customer experience
Conduct Q3 market survey of 500 customers in North America
Launch mobile app
Update privacy policy to align with new GDPR changes
Design wireframes for the new dashboard
Enhance product quality
Implement real-time chat support
Finalize vendor contract for cloud hosting

---

# Memory 

> Please remember that I like my emails to be professional.

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

---

# Agent Mode
- Agent Mode is a ChatGPT capability that lets the AI act as a goal-oriented “agent,” able to plan, break down, and execute multi-step tasks by deciding which tools, data sources, and actions to use—often chaining them together—until it reaches your intended outcome.

> Please find me a flight and hotel for my upcoming vacation to Denmark starting next week Wednesday returning in two weeks on Thursday. I would like the flight to direct and a hotel in Alborg on the fjord with a city view and walking distant to many restaurants.

---

# Canvas Mode
- Canvas is a collaborative editing space that opens alongside the chat so you and the AI can work together on longer-form content—like documents, code, or designs—in a structured, editable format.

---

# Study
- Study feature is like an interactive tutor mode—it helps you learn or review material step-by-step, adapting to your pace and preferred style.

---

# Creating Projects
- Projects is a feature that lets you create a dedicated workspace where the model can keep context, files, and instructions together for a specific goal or topic.

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