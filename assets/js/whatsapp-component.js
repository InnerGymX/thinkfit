// whatsapp-component.js
(function() {
  const phone = '919217798422';
  const text = encodeURIComponent(
    "Hi, welcome to InnerGymX 🌼\n\nI’m Maanviya.I’m here to listen.\n\nYou can share what you’re struggling with — or simply tell me what made you reach out today."
  );
  const href = `https://wa.me/${phone}?text=${text}`;

  // CSS for the floating button (keeps styles self-contained)
  const css = `
    .whatsapp-float{position:fixed;right:1rem;bottom:1rem;z-index:1100}
    .whatsapp-btn{width:56px;height:56px;border-radius:50%;background:#25D366;display:inline-flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 8px 22px rgba(0,0,0,0.18);transition:transform .15s ease,box-shadow .15s ease;text-decoration:none}
    .whatsapp-btn:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,.22)}
    @media(max-width:480px){.whatsapp-float{right:.6rem;bottom:.6rem}.whatsapp-btn{width:48px;height:48px}}
  `;

  function inject() {
    // prevent double-insert
    if (document.querySelector('.whatsapp-float')) return;

    const style = document.createElement('style');
    style.setAttribute('data-whatsapp-component', '');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'whatsapp-float';

    container.innerHTML = `
      <a class="whatsapp-btn" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M20.52 3.48A11.81 11.81 0 0 0 12 .75 11.93 11.93 0 0 0 .75 12c0 2.1.55 4.14 1.6 5.94L.12 23.25l4.59-1.2A11.88 11.88 0 0 0 12 23.25C20.1 23.25 24 13.5 24 12a11.81 11.81 0 0 0-3.48-8.52zM12 21.5a9.45 9.45 0 0 1-5.12-1.46l-.37-.23-3 0.79.8-2.92-.24-.38A9.32 9.32 0 0 1 2.5 12 9.5 9.5 0 1 1 12 21.5zM17.3 14.02c-.27-.14-1.6-.8-1.85-.89-.25-.09-.43-.14-.62.14-.19.27-.74.89-.9 1.07-.16.19-.31.21-.58.08-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.61-1.5-1.88-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.16.19-.27.28-.45.09-.18.04-.34-.02-.48-.06-.12-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.44 0 1.43 1.03 2.82 1.17 3.02.14.2 2.03 3.1 4.92 4.35 1.46.62 2.6.99 3.5 1.27.46.14.88.12 1.21.07.37-.06 1.6-.65 1.83-1.27.23-.62.23-1.15.16-1.27-.07-.12-.27-.19-.56-.32z"/>
        </svg>
      </a>
    `;

    document.body.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
