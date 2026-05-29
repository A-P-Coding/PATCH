# PATCH Requirements

## Notifications & Accountability
- Send scheduled messages to phone at set times
- Receive and respond to SMS messages
- Maintain conversational memory within a session
- Run continuously on Raspberry Pi

## CRM & People database
- Store contacts and interaction history locally
- Surface relevant context before meetings
- Remind about follow-ups

## Obsidian + Snipd Integration
- Read Obsidian vault markdown files from filesystem
- Ingest Snipd podcast highlights
- Deliver daily/weekly digest via notifications
- Retrieve relevant notes based on current goals (RAG pattern)

## Automation Framework
- General-purpose task scheduler
- New automations plug into this layer

## Hardware Constraints
- 64 GB Micro SD with A2 performance
- Raspberry Pi 5 8GB
- Enclosure must be 3d printed
    - Prototyping with PLA (cheap and available)
    - Final enclosure in PETG: higher glass transition temperature than PLA, 
necessary given Pi 5 SoC operating temperatures under LLM load