# PATCH
### Personal Automated Task Control Hub

PATCH is a self-hosted personal AI platform running on a Raspberry Pi 5. It started as an SMS accountability agent to help me stick to my running schedule. Over time, it grew into a system that handles automated reminders, knowledge management, personal CRM, and task automation, all running on local hardware with no ongoing API costs or subscriptions.

This is also a portfolio project spanning mechanical engineering, embedded systems, JavaScript, and AI.

---

## What it does

PATCH is built around four parts:

**SMS Accountability** — Sends and receives SMS through my own phone number. Proactive check-ins, goal tracking, and conversational memory via a local LLM run on Raspberry Pi 5.

**Personal CRM** — A local database of contacts, relationships, and interaction history. PATCH surfaces context before meetings and reminds me to follow up with connections, clients, etc.

**Knowledge Integration** — Reads Obsidian vault notes and Snipd podcast highlights directly from the filesystem. Delivers daily and weekly summaries via SMS, pulling relevant ideas based on what I'm currently working on.

**Automation Framework** — A general task system for ongoing projects and new automations.

---

## Tech stack

| Component | Using |
|---|---|
| Hardware | Raspberry Pi 5 8 GB|
| LLM host | Ollama |
| LLM Model | Phi-3 Mini (Q4 quantized) |
| SMS gateway | TBD — evaluating ntfy.sh and Twilio |
| Language | Node.js |
| Storage | JSON files, SQLite as complexity grows |
| Notes | Obsidian vault + Snipd exports (local markdown) |
| Scheduling | cron + custom task runner |
| Enclosure | Custom 3D printed, Flashforge Adventurer 5M, PETG |
| Process manager | systemd |

---

## Status

- [ ] Requirements document written
- [x] Ordered Hardware
- [x] GitHub repo set up
- [x] Ollama running locally on PC
- [x] First JS script hitting local Ollama API
- [ ] System architecture diagram
- [ ] Enclosure designed and printed
- [ ] Define automation constraints

---

## Why I built this

I wanted a personal AI assistant with no token fees and no subscriptions. Everything runs locally on a Pi, routed through a phone for SMS, reading my own files for context. The enclosure is custom-designed and printed in PETG, chosen over PLA for its higher glass transition temperature, given the Pi's thermal output under LLM inference.

---

*Project in progress. Updated as it's built.*
