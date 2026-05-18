# PATCH
### Personal Automated Task Control Hub

PATCH is a self-hosted personal AI platform running on a Raspberry Pi 5. It started as an SMS accountability agent to help me stick to my running schedule. Over time, it grew into a system that handles automated reminders, knowledge management, personal CRM, and task automation, all running on local hardware with no ongoing API costs or subscriptions.

This is also a portfolio project spanning mechanical engineering, electrical systems, JavaScript, and AI.

---

## What it does

PATCH is built around four parts:

**SMS Accountability** — Sends and receives SMS through your own phone number. Proactive check-ins, goal tracking, and conversational memory via a local LLM.

**Personal CRM** — A local database of contacts, relationships, and interaction history. PATCH surfaces context before meetings and reminds you to follow up.

**Knowledge Integration** — Reads Obsidian vault notes and Snipd podcast highlights directly from the filesystem. Delivers daily and weekly digests via SMS, pulling relevant ideas based on what you're currently working on.

**Automation Framework** — A general-purpose task runner for anything else. Custom Node.js scheduler with cron for time-based tasks and event-driven hooks for reactive ones.

---

## Tech stack

| Component | Using |
|---|---|
| Hardware | Raspberry Pi 5 |
| LLM runtime | Ollama |
| Model | Phi-3 Mini (Q4 quantized) |
| SMS gateway | textbee.dev (Android, zero cost) |
| Language | Node.js |
| Storage | JSON files, SQLite as complexity grows |
| Notes | Obsidian vault + Snipd exports (local markdown) |
| Scheduling | cron + custom task runner |
| Enclosure | Custom 3D printed, Flashforge Adventurer 5M |
| Process manager | systemd |

---

## Status

- [ ] Requirements document written
- [ ] Ordered Hardware
- [ ] GitHub repo set up
- [ ] Ollama running locally on PC
- [ ] First JS script hitting local Ollama API
- [ ] System architecture diagram
- [ ] Enclosure designed and printed
- [ ] Define automation constraints

---

## Why I built this

I wanted a personal AI assistant with no token fees and no subscriptions. Everything runs locally on a Pi, routed through my own carrier for SMS, reading my own files for context. The hardware lives in a custom enclosure I designed and printed, which lets this double as a mechanical engineering portfolio piece alongside the software.

---

*Project in progress. Updated as it's built.*
