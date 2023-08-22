function setThemeColors(darkColor, lightColor) {
    document.documentElement.style.setProperty('--color-dark', darkColor);
    document.documentElement.style.setProperty('--color-light', lightColor);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);

    if (theme === 'night') {
        setThemeColors('255, 255, 255', '10, 10, 20');
    } else {
        setThemeColors('10, 10, 20', '255, 255, 255');
    }

    document.querySelector('[data-settings-overlay]').open = false;
}

document.querySelector('[data-settings-form]').addEventListener('submit', handleFormSubmit);
