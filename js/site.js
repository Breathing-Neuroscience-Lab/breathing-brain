(() => {
  const data = window.BREATHING_BRAIN_DATA || { team: [], publications: [] };
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  const header = document.querySelector('[data-header]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });

  const teamGrid = document.getElementById('team-grid');
  if (teamGrid && Array.isArray(data.team)) {
    teamGrid.innerHTML = data.team.map((member) => `
      <article class="member-card">
        <img src="${escapeHtml(member.image)}" alt="${escapeHtml(member.alt || `Portrait of ${member.name}`)}" loading="lazy">
        <div class="member-copy">
          <h3>${escapeHtml(member.name)}</h3>
          <p class="member-role">${escapeHtml(member.role)}</p>
          <p>${escapeHtml(member.project)}</p>
        </div>
      </article>
    `).join('');
  }

  const publicationList = document.getElementById('publication-list');
  if (publicationList && Array.isArray(data.publications)) {
    publicationList.innerHTML = data.publications.map((pub) => `
      <a class="publication" href="${escapeHtml(pub.url)}" target="_blank" rel="noopener">
        <span class="pub-year">${escapeHtml(pub.year)}</span>
        <span>
          <span class="publication-title">${escapeHtml(pub.title)}</span>
          <span class="publication-meta">${escapeHtml(pub.authors)} · <em>${escapeHtml(pub.venue)}</em></span>
        </span>
        <span class="pub-arrow" aria-hidden="true">↗</span>
      </a>
    `).join('');
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const revealTargets = document.querySelectorAll('.research-card, .method, .pi-card, .team-prompt, .publication, .application-note, .contact-panel');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealTargets.forEach((el) => el.classList.add('reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealTargets.forEach((el) => observer.observe(el));
    // Reliability fallback: content must never remain hidden if observation is delayed.
    window.setTimeout(() => revealTargets.forEach((el) => el.classList.add('visible')), 1400);
  }

  function escapeHtml(value = '') {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
})();
