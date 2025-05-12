const table = document.getElementById('llm-table');
const toggleBtn = document.getElementById('toggle-table');
toggleBtn.addEventListener('click', () => {
  table.style.display = table.style.display === 'none' ? 'table' : 'none';
});

const funFacts = [
  'The term "LLM" was popularized in 2020.',
  'LLMs can contain billions of parameters.',
  'GPT-3 was trained on 45TB of text data.',
  'Meta’s LLaMA model was designed to be lightweight and open.'
];
const factBtn = document.getElementById('fun-fact-btn');
const factText = document.getElementById('fun-fact');
factBtn.addEventListener('click', () => {
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  factText.textContent = fact;
  alert(fact);
});

const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

document.querySelectorAll('#platforms a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Opening ${link.textContent}…`);
    window.open(link.href, '_blank');
  });
});
