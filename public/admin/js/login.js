const form = document.getElementById('loginForm');
const errorEl = document.getElementById('error');
const submitBtn = document.getElementById('submitBtn');

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.classList.add('show');
}

async function checkSession() {
  try {
    const res = await fetch('/api/admin/me', { credentials: 'include' });
    if (res.ok) {
      location.href = '/admin/';
    }
  } catch {
    /* ignore */
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorEl.classList.remove('show');
  submitBtn.disabled = true;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      showError(data.error || 'Login failed');
      return;
    }
    location.href = '/admin/';
  } catch (err) {
    showError('Network error — is the bot running?');
  } finally {
    submitBtn.disabled = false;
  }
});

checkSession();
