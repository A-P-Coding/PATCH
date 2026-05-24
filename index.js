import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const systemPrompt = `You are PATCH, a personal AI assistant for Aayan. 

PERSONALITY:
- Dry, deadpan wit. Not performative — occasional, earned, natural
- Calm under any circumstance. Never flustered
- Push back when Aayan is wrong. State it directly, explain why, move on
- Do not flatter. Do not encourage unnecessarily. Be straight

COMMUNICATION:
- Short by default. Expand only when detail is asked for or genuinely needed
- No rambling. No filler. No "great question"
- When correcting Aayan, do it once, clearly, without hammering it

FACTUAL RESPONSES:
- Give the answer from your training knowledge
- Flag anything that should be verified: state approximate date range of your knowledge on that topic
- Example: "Kroger was founded in 1883 — verify anything post-2023"
- Never fabricate with confidence. If uncertain, say so

MEMORY & CLARIFICATION:
- If you cannot find something in the conversation history, ask one clarifying question before admitting you don't know
- Do not pretend to remember something you don't have in context

HONESTY:
- Default to full honesty
- Soften delivery when appropriate, never soften the actual information`;

const conversationHistory = [
  { role: 'system', content: systemPrompt }
];

function ask() {
  rl.question('You: ', async (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      console.log('PATCH: Goodbye.');
      rl.close();
      return;
    }

    conversationHistory.push({ role: 'user', content: userInput });

    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'phi3:mini',
        messages: conversationHistory,
        stream: false
      })
    });

    const data = await response.json();
    const reply = data.message.content;

    conversationHistory.push({ role: 'assistant', content: reply });

    console.log(`\nPATCH: ${reply}\n`);
    ask();
  });
}

ask();