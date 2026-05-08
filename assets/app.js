(() => {
  const STORE_KEY = "ppl-guide-state-v1";
  const state = loadState();

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const view = $("#view");
  const sectionNav = $("#section-nav");
  const searchInput = $("#search-input");
  const themeToggle = $("#theme-toggle");
  const sidebar = $("#sidebar");
  const mobileToggle = $("#mobile-nav-toggle");
  const installBanner = $("#install-banner");
  const installBtn = $("#install-btn");
  const installDismiss = $("#install-dismiss");
  const progressFill = $("#progress-fill");
  const progressText = $("#progress-text");
  const resetBtn = $("#reset-progress");

  const ICONS = {
    plane: '<path d="M2 16l9-3 4-9 2 1-3 8 6-2 1 2-7 4-2 6h-2l1-5-5 1-1 2H4l1-3-3-2z" fill="currentColor"/>',
    book: '<path d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4V4zm16 0h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    wind: '<path d="M3 8h11a3 3 0 100-6M3 14h16a3 3 0 110 6M3 11h7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    cloud: '<path d="M7 18h11a4 4 0 000-8 6 6 0 00-11.7-1.3A4 4 0 007 18z" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    compass: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M14.5 9.5L13 13l-3.5 1.5L11 11z" fill="currentColor"/>',
    tower: '<path d="M12 2v6M9 5l3-3 3 3M5 22l4-9h6l4 9M9 13h6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    user: '<circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 21a8 8 0 0116 0" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    checklist: '<path d="M4 6l2 2 3-3M4 12l2 2 3-3M4 18l2 2 3-3M12 6h8M12 12h8M12 18h8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'
  };

  /* ----- State ----- */
  function loadState() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
      return { studied: new Set(s.studied || []), theme: s.theme || null };
    } catch {
      return { studied: new Set(), theme: null };
    }
  }
  function saveState() {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      studied: Array.from(state.studied),
      theme: state.theme
    }));
  }

  /* ----- Theme ----- */
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  function initTheme() {
    if (state.theme) applyTheme(state.theme);
    else if (matchMedia("(prefers-color-scheme: dark)").matches) applyTheme("dark");
  }
  themeToggle.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    state.theme = cur === "dark" ? "light" : "dark";
    applyTheme(state.theme);
    saveState();
  });

  /* ----- Routing ----- */
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, "");
    if (!h) return { kind: "home" };
    if (h.startsWith("search=")) return { kind: "search", q: decodeURIComponent(h.slice(7)) };
    const [sec, top] = h.split("/");
    if (sec && top) return { kind: "topic", section: sec, topic: top };
    if (sec) return { kind: "section", section: sec };
    return { kind: "home" };
  }
  window.addEventListener("hashchange", route);

  function route() {
    const r = parseHash();
    closeMobileNav();
    if (r.kind === "home") renderHome();
    else if (r.kind === "section") renderSection(r.section);
    else if (r.kind === "topic") renderTopic(r.section, r.topic);
    else if (r.kind === "search") renderSearch(r.q);
    updateActiveNav(r);
    window.scrollTo(0, 0);
  }

  /* ----- Sidebar ----- */
  function renderSidebar() {
    const groups = [
      { title: "Aircraft", ids: ["c172s"] },
      { title: "Knowledge", ids: ["regs", "aero", "wx", "airspace", "nav", "airport", "human"] },
      { title: "Test prep", ids: ["acs"] }
    ];
    const html = groups.map(g => {
      const items = g.ids.map(id => {
        const sec = CONTENT.sections.find(s => s.id === id);
        if (!sec) return "";
        const studiedCount = sec.topics.filter(t => state.studied.has(`${sec.id}/${t.id}`)).length;
        return `
          <a class="nav-item" href="#/${sec.id}" data-section="${sec.id}">
            <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[sec.icon] || ""}</svg>
            <span>${escapeHTML(sec.title)}</span>
            <span class="count">${studiedCount}/${sec.topics.length}</span>
          </a>`;
      }).join("");
      return `<div class="nav-group-title">${g.title}</div>${items}`;
    }).join("");
    sectionNav.innerHTML = html;
  }

  function updateActiveNav(r) {
    $$(".nav-item", sectionNav).forEach(el => {
      el.classList.toggle("active", el.dataset.section === (r.section || ""));
    });
  }

  /* ----- Progress ----- */
  function totalTopics() {
    return CONTENT.sections.reduce((n, s) => n + s.topics.length, 0);
  }
  function updateProgress() {
    const total = totalTopics();
    const done = state.studied.size;
    const pct = total ? Math.round((done / total) * 100) : 0;
    progressFill.style.width = `${pct}%`;
    progressText.textContent = `${pct}%`;
  }
  resetBtn.addEventListener("click", () => {
    if (!confirm("Reset all studied topics?")) return;
    state.studied = new Set();
    saveState();
    renderSidebar();
    updateProgress();
    route();
  });

  /* ----- Renderers ----- */
  function renderHome() {
    const totalT = totalTopics();
    const done = state.studied.size;
    const cards = CONTENT.sections.map(s => {
      const studied = s.topics.filter(t => state.studied.has(`${s.id}/${t.id}`)).length;
      return `
        <a class="card" href="#/${s.id}">
          <div class="card-title">${escapeHTML(s.title)}</div>
          <div class="card-sub">${escapeHTML(s.blurb)}</div>
          <div class="card-tags">
            <span class="tag">${s.topics.length} topic${s.topics.length === 1 ? "" : "s"}</span>
            ${studied ? `<span class="tag">${studied} studied</span>` : ""}
          </div>
        </a>`;
    }).join("");

    view.innerHTML = `
      <section class="hero">
        <h1>Private Pilot Study Guide</h1>
        <p>An offline-capable reference for the FAR/AIM, PHAK, ACS, and the Cessna 172S POH —
        organized for fast lookup before checkride day. ${done}/${totalT} topics studied.</p>
        <div class="chips">
          <span class="chip">FAR/AIM</span>
          <span class="chip">PHAK</span>
          <span class="chip">ACS</span>
          <span class="chip">Cessna 172S POH</span>
        </div>
      </section>

      <div class="section-title"><h2>Sections</h2><span class="src">Tap to dive in</span></div>
      <div class="grid">${cards}</div>

      <div class="section-title"><h2>Quick V-speeds</h2><span class="src">C172S · KIAS</span></div>
      ${renderQref([
        ["VSO","40","kts"],["VR","55","kts"],["VX","62","kts"],["VY","74","kts"],
        ["VG (best glide)","68","kts"],["VFE 10–30°","85","kts"],["VNO","129","kts"],["VNE","163","kts"]
      ])}
    `;
  }

  function renderSection(id) {
    const sec = CONTENT.sections.find(s => s.id === id);
    if (!sec) return renderHome();
    const cards = sec.topics.map(t => {
      const studied = state.studied.has(`${sec.id}/${t.id}`);
      return `
        <a class="card" href="#/${sec.id}/${t.id}">
          <div class="card-title">${escapeHTML(t.title)}${studied ? ' <span class="tag" style="background:transparent;border-color:transparent;color:var(--good)">✓ studied</span>' : ""}</div>
          <div class="card-sub">${escapeHTML(t.summary || "")}</div>
          <div class="card-tags">
            <span class="tag src">${escapeHTML(t.source)}</span>
            ${(t.tags || []).slice(0, 3).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
          </div>
        </a>`;
    }).join("");
    view.innerHTML = `
      <div class="section-title">
        <h2>${escapeHTML(sec.title)}</h2>
        <span class="src">${escapeHTML(sec.blurb)}</span>
      </div>
      <div class="grid">${cards}</div>
    `;
  }

  function renderTopic(secId, topicId) {
    const sec = CONTENT.sections.find(s => s.id === secId);
    const topic = sec && sec.topics.find(t => t.id === topicId);
    if (!sec || !topic) return renderHome();
    const key = `${sec.id}/${topic.id}`;
    const studied = state.studied.has(key);
    view.innerHTML = `
      <article class="topic">
        <div class="breadcrumb">
          <a href="#/">Home</a> <span>›</span>
          <a href="#/${sec.id}">${escapeHTML(sec.title)}</a> <span>›</span>
          <span>${escapeHTML(topic.title)}</span>
        </div>
        <h1>${escapeHTML(topic.title)}</h1>
        <div class="meta">
          <span class="tag src">${escapeHTML(topic.source)}</span>
          ${(topic.tags || []).map(t => `<span class="tag">${escapeHTML(t)}</span>`).join("")}
        </div>
        <div class="rendered">${renderMarkdown(topic.body)}</div>
        <div class="actions">
          <button class="btn ${studied ? "studied" : ""}" id="mark-studied">
            ${studied ? "✓ Studied" : "Mark as studied"}
          </button>
          ${prevNextNav(sec, topic)}
        </div>
      </article>
    `;
    $("#mark-studied").addEventListener("click", () => {
      if (state.studied.has(key)) state.studied.delete(key);
      else state.studied.add(key);
      saveState();
      renderSidebar();
      updateProgress();
      renderTopic(secId, topicId);
    });
  }

  function prevNextNav(sec, topic) {
    const i = sec.topics.indexOf(topic);
    const prev = sec.topics[i - 1];
    const next = sec.topics[i + 1];
    return `
      ${prev ? `<a class="btn secondary" href="#/${sec.id}/${prev.id}">← ${escapeHTML(prev.title)}</a>` : ""}
      ${next ? `<a class="btn secondary" href="#/${sec.id}/${next.id}">${escapeHTML(next.title)} →</a>` : ""}
    `;
  }

  /* ----- Search ----- */
  function buildIndex() {
    const idx = [];
    CONTENT.sections.forEach(s => {
      s.topics.forEach(t => {
        idx.push({
          section: s,
          topic: t,
          haystack: [s.title, t.title, t.summary || "", t.source || "", (t.tags || []).join(" "), t.body]
            .join(" \n ").toLowerCase()
        });
      });
    });
    return idx;
  }
  const SEARCH_INDEX = buildIndex();

  function renderSearch(q) {
    const query = q.trim().toLowerCase();
    if (!query) return renderHome();
    const terms = query.split(/\s+/).filter(Boolean);
    const hits = SEARCH_INDEX
      .map(entry => {
        let score = 0;
        for (const t of terms) {
          const inTitle = entry.topic.title.toLowerCase().includes(t);
          const inTags = (entry.topic.tags || []).some(x => x.toLowerCase().includes(t));
          const inHay = entry.haystack.includes(t);
          if (inTitle) score += 10;
          if (inTags) score += 4;
          if (inHay) score += 1;
        }
        return { entry, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);

    const items = hits.map(({ entry }) => {
      const t = entry.topic;
      const s = entry.section;
      const snippet = makeSnippet(t.body, terms);
      return `
        <a class="result" href="#/${s.id}/${t.id}">
          <h4>${highlight(t.title, terms)} <span class="tag" style="font-weight:400">${escapeHTML(s.title)}</span></h4>
          <p>${snippet}</p>
        </a>`;
    }).join("");

    view.innerHTML = `
      <div class="section-title">
        <h2>Search: "${escapeHTML(q)}"</h2>
        <span class="src">${hits.length} result${hits.length === 1 ? "" : "s"}</span>
      </div>
      <div class="search-results">${items || '<p style="color:var(--text-muted)">No matches. Try different keywords.</p>'}</div>
    `;
  }

  function makeSnippet(text, terms) {
    const plain = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    const lower = plain.toLowerCase();
    let pos = -1;
    for (const t of terms) { pos = lower.indexOf(t); if (pos >= 0) break; }
    if (pos < 0) pos = 0;
    const start = Math.max(0, pos - 60);
    const end = Math.min(plain.length, pos + 140);
    const slice = (start > 0 ? "… " : "") + plain.slice(start, end) + (end < plain.length ? " …" : "");
    return highlight(slice, terms);
  }

  function highlight(s, terms) {
    let out = escapeHTML(s);
    for (const t of terms) {
      if (!t) continue;
      const re = new RegExp(`(${escapeRegex(t)})`, "ig");
      out = out.replace(re, "<mark>$1</mark>");
    }
    return out;
  }

  searchInput.addEventListener("input", debounce(() => {
    const q = searchInput.value.trim();
    if (!q) {
      if (location.hash.startsWith("#search=")) location.hash = "";
      return;
    }
    location.hash = `#search=${encodeURIComponent(q)}`;
  }, 120));

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.blur();
    }
  });

  /* ----- Mobile nav ----- */
  mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
  function closeMobileNav() {
    sidebar.classList.remove("open");
  }
  document.addEventListener("click", (e) => {
    if (!sidebar.classList.contains("open")) return;
    if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) closeMobileNav();
  });

  /* ----- Install prompt ----- */
  let deferredInstall;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstall = e;
    if (sessionStorage.getItem("install-dismissed")) return;
    installBanner.hidden = false;
  });
  installBtn.addEventListener("click", async () => {
    installBanner.hidden = true;
    if (!deferredInstall) return;
    deferredInstall.prompt();
    deferredInstall = null;
  });
  installDismiss.addEventListener("click", () => {
    installBanner.hidden = true;
    sessionStorage.setItem("install-dismissed", "1");
  });

  /* ----- Markdown rendering ----- */
  // Tiny purpose-built renderer. Supports: H1–H3, paragraphs, bullet lists,
  // ordered lists, fenced tables, inline code, bold, italic, links,
  // <qref> blocks (label|value|unit), and callouts.
  function renderMarkdown(src) {
    const lines = src.replace(/\r\n/g, "\n").split("\n");
    let i = 0;
    let html = "";

    while (i < lines.length) {
      const line = lines[i];

      // qref block
      if (/^<qref>\s*$/.test(line)) {
        const items = [];
        i++;
        while (i < lines.length && !/^<\/qref>\s*$/.test(lines[i])) {
          const parts = lines[i].split("|").map(s => s.trim());
          if (parts.length >= 2) items.push(parts);
          i++;
        }
        i++; // skip </qref>
        html += renderQref(items);
        continue;
      }

      // tables: header line | separator | rows
      if (/^\s*\|.+\|\s*$/.test(line) && /^\s*\|.+\|\s*$/.test(lines[i + 1] || "") && /^\s*\|?\s*[-: |]+\s*\|?\s*$/.test(lines[i + 1])) {
        const headers = splitRow(line);
        i += 2;
        const rows = [];
        while (i < lines.length && /^\s*\|.+\|\s*$/.test(lines[i])) {
          rows.push(splitRow(lines[i]));
          i++;
        }
        html += "<table><thead><tr>" +
          headers.map(h => `<th>${inline(h)}</th>`).join("") +
          "</tr></thead><tbody>" +
          rows.map(r => "<tr>" + r.map(c => `<td>${inline(c)}</td>`).join("") + "</tr>").join("") +
          "</tbody></table>";
        continue;
      }

      // headings
      if (/^### /.test(line)) { html += `<h3>${inline(line.slice(4))}</h3>`; i++; continue; }
      if (/^## /.test(line))  { html += `<h2>${inline(line.slice(3))}</h2>`; i++; continue; }
      if (/^# /.test(line))   { html += `<h1>${inline(line.slice(2))}</h1>`; i++; continue; }

      // blockquote callout
      if (/^>\s/.test(line)) {
        const buf = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          buf.push(lines[i].replace(/^>\s?/, ""));
          i++;
        }
        html += `<blockquote>${inline(buf.join(" "))}</blockquote>`;
        continue;
      }

      // unordered list
      if (/^\s*[-*]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
          i++;
        }
        html += "<ul>" + items.map(x => `<li>${inline(x)}</li>`).join("") + "</ul>";
        continue;
      }

      // ordered list
      if (/^\s*\d+\.\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
          i++;
        }
        html += "<ol>" + items.map(x => `<li>${inline(x)}</li>`).join("") + "</ol>";
        continue;
      }

      // empty
      if (/^\s*$/.test(line)) { i++; continue; }

      // paragraph (collect until blank)
      const buf = [];
      while (i < lines.length && lines[i].trim() && !/^[#>*\-\d]/.test(lines[i].trim()[0]) && !/^\|/.test(lines[i].trim()) && !/^<qref>/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      if (buf.length) html += `<p>${inline(buf.join(" "))}</p>`;
      else i++;
    }
    return html;
  }

  function splitRow(line) {
    return line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map(s => s.trim());
  }

  function inline(s) {
    let out = escapeHTML(s);
    // inline code
    out = out.replace(/`([^`]+)`/g, (_, c) => `<code>${c}</code>`);
    // bold
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // italic
    out = out.replace(/(^|[\s(])\*([^*]+)\*/g, "$1<em>$2</em>");
    // links [text](url)
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" rel="noopener">$1</a>');
    return out;
  }

  function renderQref(items) {
    if (!items.length) return "";
    return `<div class="qref">` + items.map(([label, value, unit = ""]) => `
      <div class="item">
        <div class="label">${inline(label)}</div>
        <div class="value">${inline(value)}${unit ? `<span class="unit"> ${inline(unit)}</span>` : ""}</div>
      </div>
    `).join("") + `</div>`;
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  }

  /* ----- Init ----- */
  initTheme();
  renderSidebar();
  updateProgress();
  route();
})();
