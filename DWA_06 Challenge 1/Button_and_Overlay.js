function setOverlayState(selector, isOpen) {
    const overlay = document.querySelector(selector);
    if (overlay) {
        overlay.open = isOpen;
    }
}

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
    setOverlayState('[data-search-overlay]', false);
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
    setOverlayState('[data-settings-overlay]', false);
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
    setOverlayState('[data-search-overlay]', true);
    document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
    setOverlayState('[data-settings-overlay]', true);
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
    setOverlayState('[data-list-active]', false);
});
