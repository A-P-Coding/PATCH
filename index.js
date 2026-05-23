import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const systemPrompt = `You are PATCH, a personal AI assistant for Aayan. 
You are direct, concise, and helpful. You do not ramble. 
You assist with tasks, answer questions, and help manage Aayan's life and projects.
Keep responses short unless detail is specifically asked for.`;

rl.question('You: ', async (userInput) => {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'phi3:mini',
      prompt: userInput,
      system: systemPrompt,
      stream: false
    })
  });

  const data = await response.json();
  console.log(`\nPATCH: ${data.response}`);
  rl.close();
});