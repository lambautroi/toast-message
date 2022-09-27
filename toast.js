function toast({ title, message, type, duration }) {
  var main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div');

    // Auto remove toast
    const autoremove = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 5000);

    // Remove toast when clicked
    toast.onclick = (e) => {
      if (e.target.closest('.toast__close')) {
        main.removeChild(toast);
        clearTimeout(autoremove);
      }
    };

    toast.classList.add('toast', `toast--${type}`);
    const time = (duration / 1000).toFixed(2);
    toast.style.animation = `slideInLeft ${time}s linear`;
    const icons = {
      success: 'fa-solid fa-circle-check',
      error: 'fa-solid fa-circle-info',
    };
    const icon = icons[type];
    toast.innerHTML = `
          <div class="toast__icon">
              <i class="${icon}"></i>
          </div>
          <div class="toast__body">
              <div class="toast__title">${title}</div>
              <div class="toast__msg">${message}</div>
          </div>
          <div class="toast__close"><b>close</b></div>
      `;

    main.appendChild(toast);
  }
}
