function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  