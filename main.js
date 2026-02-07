function toggleDarkMode() {
  const text = document.body.classList.contains('dark') ? '🌙' : '☀️';
  document.body.classList.toggle('dark');
  document.getElementById('theme-toggle').textContent =  text;
}

function adjustTextSize(multiplier) {
  const baseFontSize = 2;
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.style.fontSize = (baseFontSize * multiplier) + 'rem';
  });
}