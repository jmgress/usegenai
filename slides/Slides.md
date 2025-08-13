---
marp: true
theme: custom-default
footer: 'James Gress | AI Director @ Accenture | https://jmgress.github.io/usegenai/'
---
# Hype to Help: Demystifying AI for Everyday Impact

![bg right:40%](img/00-jamesgress.png)

## James Gress
_Advanced Technology Center AI Lead Accenture_


<i class="fa-brands fa-linkedin"></i> LinkedIn: [jamesgress](https://linkedin.com/in/jamesgress/)  
<i class="fa-brands fa-github"></i> GitHub: [jmgress](https://github.com/jmgress)  
<i class="fa-brands fa-x-twitter"></i> X.com: [@jmgress](https://x.com/jmgress)  
<i class="fa-brands fa-meetup"></i> [Tampa Bay Generative AI Meetup](https://www.meetup.com/tampa-bay-generative-ai-meetup/)  
<i class="fa-brands fa-meetup"></i> [Tampa Bay DevOps Meetup](https://www.meetup.com/tampa-devops-meetup/)
<i class="fa-brands fa-meetup"></i> [Tampa Bay Platform Engineering Meetup](https://www.meetup.com/tampabayplatformengineering/)
<!-- 
Done 100's of Prototypes
Taken 10 applications to Production ranging from simple RAG to more complex Agentic systems
Specialize in AI in the SDLD or TDLC
-->

---

# What is AI?

"AI" stands for Artificial Intelligence, which refers to the ability of a computer or machine to perform tasks that typically require human intelligence. These tasks can include learning, problem-solving, perception, and decision-making. AI is a broad field encompassing various techniques and approaches aimed at creating intelligent systems. 

---

# What is Generative AI?

Generative AI is a type of artificial intelligence that creates new content like text, images, audio, and video in response to prompts. Unlike search engines that find and curate existing information, generative AI learns from data to produce new outputs. 


---

# What is a LLM (Large Language Model)

An LLM, or Large Language Model, is a type of artificial intelligence model trained on massive amounts of text data to understand, generate, and manipulate human language. Essentially, it's a sophisticated computer program that can process and produce text in a way that mimics human communication. 

---


# From Data to Intelligence: How LLM Models Are Born

<div style="text-align: center;">

![width:800px](img/buildingLLM.drawio.svg)


</div>

<!-- You have to watch out for this and check your work, it has told me things that didn't exist, just becuase of the way I worded it -->


---

# Models use a Context Window

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

# Let's do this live..... it's more exciting and what could go wrong?

<!-- This a general audience discussion on how some of AI tools work and what are we exactly talking to, will be using ChatGPT but
there are many others, and a lof of them have similer features.

Somthings work really well, however somethings don't, and somethings if we give it a bit better context can get more out of them 

type in "What are you?, "What are you?, How did you get created" -->

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

# ChatGPT
- New model GPT-5 with impressive benchmarks
- Improved Reasoning
- Model Router selecting the best models for your ask
- Increase the context window to 400K tokens
#
#

> Not indicating ChatGPT is the best, just happens to be the one I am currently using the most and is the one I am used to and is where I have the most history of my chats.

---

# ⚠️ Watch Out for Sycophancy in AI

**What Happened**  
- In April 2025, an update to GPT-4o made it overly flattering and agreeable.  
- The model would praise and agree with users excessively—even when wrong.  

**OpenAI's Response**  
- Rolled back to a previous, more balanced version.  
- Adjusted training to reduce over-agreeableness.  
- Planning more personality controls and better safety reviews.  

**Takeaway**  
> AI needs to be **helpful and truthful**—not just friendly.


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


# Context Window

<div style="text-align: center;">

![width:1200px](img/contextwindow.drawio.svg?page=1)


</div>

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

- https://lmstudio.com

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