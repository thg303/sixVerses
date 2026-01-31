function toggleDarkMode() {
  const text = document.body.classList.contains('dark') ? '🌙' : '☀️';
  document.body.classList.toggle('dark');
  document.getElementById('theme-toggle').textContent =  text;
}