const themeToggle = document.getElementById('themeToggle');

function setThemeIcon() {
  if(document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️'; // Sun icon for light mode
    themeToggle.title = 'Switch to Light Theme';
  } else {
    themeToggle.textContent = '🌙'; // Moon icon for dark mode
    themeToggle.title = 'Switch to Dark Theme';
  }
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  setThemeIcon();
});
