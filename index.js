import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('You: ', async (userInput) => {
  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'phi3:mini',
      prompt: userInput,
      stream: false
    })
  });

  const data = await response.json();
  console.log(`\nPATCH: ${data.response}`);
  rl.close();
});
