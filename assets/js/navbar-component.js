// navbar-component.js
(function() {
  // Determine prefix for links when pages are inside /pages/
  const path = (location && location.pathname) ? location.pathname : '';
  const isInPages = /\/pages\//.test(path) || /\\pages\\/.test(path);
  const prefix = isInPages ? '../' : '';

  const css = `
    /* Minimal navbar styles for pages that don't include the main site CSS */
    .container{max-width:1120px;margin:0 auto;padding:0 1.5rem}
    header.site-navbar{padding-left:1rem; padding-right:1rem; position:sticky;top:0;z-index:50;background:rgba(247,244,238,0.96);backdrop-filter:blur(10px);border-bottom:1px solid rgba(200,168,92,0.16)}
    .nav{display:flex;align-items:center;justify-content:space-between;padding:.85rem 0;gap:1rem}
    .nav-left{display:flex;flex-direction:column;gap:.1rem}
    .brand-name{font-family:Playfair Display,serif;font-size:1.1rem;letter-spacing:.08em;text-transform:uppercase;font-weight:600}
    .brand-tagline{font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(26,26,26,.7)}
    .nav-links{display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap;justify-content:flex-end}
    .nav-links a{font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(26,26,26,.7);opacity:.9}
    .nav-cta{padding:.55rem 1.1rem;border-radius:999px;border:1px solid rgba(200,168,92,.5);font-size:.78rem;text-transform:uppercase;letter-spacing:.09em;background:#c8a85c;color:#fff}
    .nav-item.dropdown{position:relative}
    .dropdown-toggle{cursor:pointer}
    .dropdown-menu{position:absolute;top:calc(100% + 6px);left:0;min-width:220px;background:#fff;border:1px solid rgba(200,168,92,.18);border-radius:10px;padding:.4rem;display:none;z-index:200}
    .dropdown-menu .has-sub{position:relative}
    .dropdown-menu .submenu{position:absolute;top:0;left:100%;min-width:200px;background:#fff;border:1px solid rgba(200,168,92,.18);border-radius:8px;padding:.35rem;display:none;box-shadow:0 12px 28px rgba(0,0,0,0.12)}
    .dropdown-menu .has-sub.open > .submenu{display:block}
    .dropdown-menu .submenu a{display:block;padding:.45rem .6rem;border-radius:6px;color:#1a1a1a}
    .dropdown-menu .submenu a:hover{background:rgba(200,168,92,.06);color:#c8a85c}
    .nav-item.dropdown.open .dropdown-menu{display:block}
    .dropdown-menu a{display:block;padding:.55rem .75rem;color:#1a1a1a;border-radius:6px}
    .dropdown-menu a:hover{background:rgba(200,168,92,.06);color:#c8a85c}
    @media(max-width:960px){.nav{flex-direction:column;align-items:flex-start}.nav-links{justify-content:center}header.site-navbar{position:relative}}
  `;

  function injectNav() {
    // avoid double-inject
    if (document.querySelector('header.site-navbar') || document.querySelector('[data-navbar-injected]')) return;

    const style = document.createElement('style');
    style.setAttribute('data-navbar-styles','');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    const header = document.querySelector('header') || document.createElement('header');
    header.classList.add('site-navbar');
    header.setAttribute('data-navbar-injected','');

    header.innerHTML = `
      <div class="container nav">
        <div class="nav-left">
          <a href="${prefix}index.html" class="brand-name">InnerGymX</a>
          <div class="brand-tagline">Train your MIND like you train your BODY.</div>
        </div>
        <nav class="nav-links" aria-label="Main Navigation">
          <a href="${prefix}index.html">Home</a>
          <div class="nav-item dropdown">
            <a class="dropdown-toggle" id="lifeAreasToggleComponent" href="#" role="button" aria-haspopup="true" aria-expanded="false">Life Areas</a>
            <div class="dropdown-menu" role="menu">
              <div class="has-sub">
                <a href="${prefix}pages/Health_final.html" class="submenu-toggle">Health</a>
                <div class="submenu" role="menu">
                  <a href="${prefix}pages/Health_final.html#struggles">Health Struggles</a>
                  <a href="${prefix}pages/Health_final.html#why">Mind-Body Link</a>
                  <a href="${prefix}pages/Health_final.html#solution">Our Process</a>
                  <a href="${prefix}pages/Health_final.html#calendar">Book a Free Session</a>
                </div>
              </div>

              <div class="has-sub">
                <a href="${prefix}pages/Money.html" class="submenu-toggle">Money & Work</a>
                <div class="submenu" role="menu">
                  <a href="${prefix}pages/Money.html#struggles">The Block</a>
                  <a href="${prefix}pages/Money.html#why">The Root Cause</a>
                  <a href="${prefix}pages/Money.html#solution">Quantum Leap</a>
                  <a href="${prefix}pages/Money.html#calendar">Start Now</a>
                </div>
              </div>

              <div class="has-sub">
                <a href="${prefix}pages/Relationships.html" class="submenu-toggle">Relationships</a>
                <div class="submenu" role="menu">
                  <a href="${prefix}pages/Relationships.html#struggles">Relationship Struggles</a>
                  <a href="${prefix}pages/Relationships.html#why">Why Relationships Feel Hard</a>
                  <a href="${prefix}pages/Relationships.html#solution">Signature Solution</a>
                  <a href="${prefix}pages/Relationships.html#calendar">Book a Free Session</a>
                </div>
              </div>

              <div class="has-sub">
                <a href="${prefix}pages/purpose_and_identity_final.html" class="submenu-toggle">Purpose & Identity</a>
                <div class="submenu" role="menu">
                  <a href="${prefix}pages/purpose_and_identity_final.html#struggles">The Void</a>
                  <a href="${prefix}pages/purpose_and_identity_final.html#why">The Root Layer</a>
                  <a href="${prefix}pages/purpose_and_identity_final.html#solution">Identity Excavation</a>
                  <a href="${prefix}pages/purpose_and_identity_final.html#calendar">Awaken</a>
                </div>
              </div>

              <div class="has-sub">
                <a href="${prefix}pages/Goals_manifestation.html" class="submenu-toggle">Goal Manifestation</a>
                <div class="submenu" role="menu">
                  <a href="${prefix}pages/Goals_manifestation.html#struggles">The Block</a>
                  <a href="${prefix}pages/Goals_manifestation.html#why">The Root Cause</a>
                  <a href="${prefix}pages/Goals_manifestation.html#solution">Quantum Leap</a>
                  <a href="${prefix}pages/Goals_manifestation.html#calendar">Start Now</a>
                </div>
              </div>
            </div>
          </div>
          <a href="${prefix}index.html#about">How I Am One Among You</a>
          <a href="${prefix}index.html#contact">Contact</a>
          <a href="${prefix}index.html#calendar" class="nav-cta">Free First Session</a>
        </nav>
      </div>
    `;

    if (!document.querySelector('header')) {
      document.body.insertBefore(header, document.body.firstChild);
    }

    // dropdown behavior
    (function() {
      const navItem = header.querySelector('.nav-item.dropdown');
      if (!navItem) return;
      const toggle = navItem.querySelector('.dropdown-toggle');

      function open() { navItem.classList.add('open'); toggle.setAttribute('aria-expanded','true'); }
      function close() { navItem.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }

      let persistedFromHover = false;
      toggle.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); if(navItem.classList.contains('open')) close(); else open(); });
      navItem.addEventListener('mouseenter', function(){ persistedFromHover = true; open(); });
      document.addEventListener('click', function(e){ if(!navItem.contains(e.target)) close(); });
      document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });
      navItem.addEventListener('focusin', open);
      navItem.addEventListener('focusout', function(){ setTimeout(()=>{ if(!navItem.contains(document.activeElement) && !persistedFromHover) close(); },0); });
      // Secondary submenu behavior (Health submenu)
      const subParents = navItem.querySelectorAll('.dropdown-menu .has-sub');
      subParents.forEach(sp => {
        const link = sp.querySelector('.submenu-toggle');
        const menu = sp.querySelector('.submenu');
        function openSub(){ sp.classList.add('open'); }
        function closeSub(){ sp.classList.remove('open'); }
        sp.addEventListener('mouseenter', openSub);
        sp.addEventListener('mouseleave', closeSub);
        link.addEventListener('focus', openSub);
        link.addEventListener('blur', function(){ setTimeout(()=>{ if(!sp.contains(document.activeElement)) closeSub(); },0); });
        // allow clicking the parent link to navigate; small screens may prefer toggling — handle touch
        link.addEventListener('click', function(e){ /* let normal navigation occur */ });
      });
    })();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectNav); else injectNav();
})();
