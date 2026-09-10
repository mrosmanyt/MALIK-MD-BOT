/** Command registry for MALIK-MD plugins */

export const commands = [];

/**
 * Register a command.
 * @param {object} info
 * @param {string|string[]} info.pattern - command name(s) without prefix
 * @param {string} [info.desc]
 * @param {string} [info.category]
 * @param {boolean} [info.fromMe] - owner only
 * @param {boolean} [info.dontAddCommandList]
 * @param {Function} handler
 */
export function cmd(info, handler) {
  const patterns = Array.isArray(info.pattern)
    ? info.pattern
    : String(info.pattern || '')
        .split('|')
        .map((p) => p.trim())
        .filter(Boolean);

  const extraAlias = Array.isArray(info.alias)
    ? info.alias.map((a) => String(a).trim()).filter(Boolean)
    : String(info.alias || '')
        .split('|')
        .map((a) => a.trim())
        .filter(Boolean);

  const allAliases = [...new Set([...patterns.slice(1), ...extraAlias])];

  const entry = {
    pattern: patterns[0] || '',
    alias: allAliases,
    desc: info.desc || '',
    category: (info.category || 'misc').toLowerCase(),
    fromMe: !!info.fromMe,
    dontAddCommandList: !!info.dontAddCommandList,
    filename: info.filename || 'unknown',
    function: handler,
  };

  commands.push(entry);
  return entry;
}

export const AddCommand = cmd;
export const gmd = cmd;

export function findCommand(name) {
  const n = String(name || '').toLowerCase();
  return commands.find(
    (c) =>
      c.pattern.toLowerCase() === n ||
      (c.alias || []).some((a) => a.toLowerCase() === n)
  );
}

export function commandsByCategory() {
  const map = {};
  for (const c of commands) {
    if (c.dontAddCommandList) continue;
    const cat = c.category || 'misc';
    if (!map[cat]) map[cat] = [];
    map[cat].push(c);
  }
  return map;
}

export default { cmd, commands, findCommand, commandsByCategory };
