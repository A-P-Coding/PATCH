const response = await fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'phi3:mini',
    prompt: 'Say hello from PATCH.',
    stream: false
  })
});

const data = await response.json();
console.log(data.response);