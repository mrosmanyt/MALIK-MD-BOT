const state = {
  page: 'overview',
  users: { skip: 0, limit: 40, search: '', total: 0 },
  commands: [],
  overview: null,
};

const titles = {
  overview: 'Overview',
  users: 'Users',
  commands: 'Commands',
  settings: 'Settings',
};

async function api(path, opts = {}) {
  const res = await fetch(`/api/admin${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    ...opts,
  });
  if (res.status === 401) {
    location.href = '/admin/login';
    throw new Error('Unauthorized');
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || res.statusText);
  return data;
}

function setPage(name) {
  state.page = name;
  document.querySelectorAll('.page').forEach((el) => {
    el.classList.toggle('active', el.id === `page-${name}`);
  });
  document.querySelectorAll('#nav button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.page === name);
  });
  document.getElementById('pageTitle').textContent = titles[name] || name;
  loadPage();
}

function fmtDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

async function loadOverview() {
  const data = await api('/overview');
  state.overview = data;
  document.getElementById('pageMeta').textContent =
    `${data.bot} · v${data.version} · uptime ${data.uptime}`;

  const cards = [
    { label: 'Uptime', value: data.uptime, hint: `since ${fmtDate(data.startedAt)}` },
    { label: 'Commands', value: data.commandCount, hint: `${data.categories} categories` },
    { label: 'Users', value: data.userCount, hint: `storage: ${data.usersStorage}` },
    {
      label: 'MongoDB',
      value: data.mongo ? 'Connected' : 'Offline',
      hint: data.mongo ? 'group + user docs' : 'JSON fallback for users',
    },
  ];
  document.getElementById('statCards').innerHTML = cards
    .map(
      (c) => `<div class="card"><div class="label">${c.label}</div>
        <div class="value">${c.value}</div>
        <div class="hint">${c.hint}</div></div>`
    )
    .join('');

  const rows = [
    ['Mode', data.mode],
    ['Prefix', data.prefix],
    ['Timezone', data.timeZone],
    ['Started', fmtDate(data.startedAt)],
  ];
  document.getElementById('overviewTable').innerHTML = rows
    .map(([k, v]) => `<tr><th style="width:180px">${k}</th><td>${v}</td></tr>`)
    .join('');
}

async function loadUsers() {
  const q = new URLSearchParams({
    limit: String(state.users.limit),
    skip: String(state.users.skip),
  });
  if (state.users.search) q.set('search', state.users.search);
  const data = await api(`/users?${q}`);
  state.users.total = data.total;
  document.getElementById('pageMeta').textContent =
    `${data.total} users · ${data.storage} storage`;

  const body = document.getElementById('usersBody');
  const empty = document.getElementById('usersEmpty');
  if (!data.users.length) {
    body.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    body.innerHTML = data.users
      .map(
        (u) => `<tr>
          <td>${escapeHtml(u.pushName || 'User')}</td>
          <td class="mono">${escapeHtml(u.jid)}</td>
          <td>${u.messageCount}</td>
          <td>${fmtDate(u.lastSeen)}</td>
        </tr>`
      )
      .join('');
  }
  document.getElementById('userPrev').disabled = state.users.skip <= 0;
  document.getElementById('userNext').disabled =
    state.users.skip + state.users.limit >= state.users.total;
}

async function loadCommands() {
  const data = await api('/commands');
  state.commands = data.commands || [];
  const cats = [...new Set(state.commands.map((c) => c.category))].sort();
  const sel = document.getElementById('cmdCategory');
  const current = sel.value;
  sel.innerHTML =
    `<option value="">All categories</option>` +
    cats.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  sel.value = current;
  renderCommands();
  document.getElementById('pageMeta').textContent = `${data.total} commands registered`;
}

function renderCommands() {
  const q = document.getElementById('cmdSearch').value.trim().toLowerCase();
  const cat = document.getElementById('cmdCategory').value;
  let rows = state.commands;
  if (cat) rows = rows.filter((c) => c.category === cat);
  if (q) {
    rows = rows.filter(
      (c) =>
        c.pattern.toLowerCase().includes(q) ||
        (c.desc || '').toLowerCase().includes(q) ||
        (c.alias || []).some((a) => a.toLowerCase().includes(q))
    );
  }
  document.getElementById('commandsBody').innerHTML = rows
    .map((c) => {
      const aliases = (c.alias || []).length
        ? ` <span class="muted">(${c.alias.join(', ')})</span>`
        : '';
      return `<tr>
        <td class="mono">.${escapeHtml(c.pattern)}${aliases}</td>
        <td><span class="pill">${escapeHtml(c.category)}</span></td>
        <td>${escapeHtml(c.desc || '')}</td>
        <td>${c.fromMe ? '<span class="pill bad">owner</span>' : '<span class="pill ok">any</span>'}</td>
      </tr>`;
    })
    .join('');
}

async function loadSettings() {
  const data = await api('/settings');
  document.getElementById('pageMeta').textContent = 'Secrets shown as redacted previews only';
  const entries = Object.entries(data);
  document.getElementById('settingsGrid').innerHTML = entries
    .map(([k, v]) => {
      let display;
      if (v && typeof v === 'object' && 'set' in v) {
        display = v.set ? `${escapeHtml(v.preview)} <span class="pill">set</span>` : '<span class="muted">not set</span>';
      } else if (typeof v === 'boolean') {
        display = v
          ? '<span class="pill ok">true</span>'
          : '<span class="pill">false</span>';
      } else {
        display = escapeHtml(String(v ?? ''));
      }
      return `<div class="setting"><div class="k">${escapeHtml(k)}</div><div class="v">${display}</div></div>`;
    })
    .join('');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function loadPage() {
  try {
    if (state.page === 'overview') await loadOverview();
    else if (state.page === 'users') await loadUsers();
    else if (state.page === 'commands') await loadCommands();
    else if (state.page === 'settings') await loadSettings();
  } catch (err) {
    document.getElementById('pageMeta').textContent = err.message || 'Failed to load';
  }
}

document.getElementById('nav').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-page]');
  if (btn) setPage(btn.dataset.page);
});

document.getElementById('refreshBtn').addEventListener('click', () => loadPage());

document.getElementById('logoutBtn').addEventListener('click', async () => {
  await api('/logout', { method: 'POST' });
  location.href = '/admin/login';
});

let searchTimer;
document.getElementById('userSearch').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.users.search = e.target.value.trim();
    state.users.skip = 0;
    loadUsers();
  }, 250);
});
document.getElementById('userPrev').addEventListener('click', () => {
  state.users.skip = Math.max(0, state.users.skip - state.users.limit);
  loadUsers();
});
document.getElementById('userNext').addEventListener('click', () => {
  state.users.skip += state.users.limit;
  loadUsers();
});
document.getElementById('cmdSearch').addEventListener('input', () => renderCommands());
document.getElementById('cmdCategory').addEventListener('change', () => renderCommands());

// boot
api('/me')
  .then(() => setPage('overview'))
  .catch(() => {
    location.href = '/admin/login';
  });
