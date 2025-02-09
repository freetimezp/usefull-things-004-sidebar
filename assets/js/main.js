/*=============== SHOW SIDEBAR ===============*/
const showSidebar = (toggleId, sidebarId) => {
    const toggle = document.getElementById(toggleId);
    const sidebar = document.getElementById(sidebarId);

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('show-sidebar');
        });
    }
};

showSidebar('header-toggle', 'sidebar');

/*=============== LINK ACTIVE ===============*/
const sidebarLink = document.querySelectorAll('.sidebar__list a');

function linkColor() {
    sidebarLink.forEach(el => el.classList.remove('active-link'));

    this.classList.add('active-link');
}

if (sidebarLink) {
    sidebarLink.forEach(link => link.addEventListener('click', linkColor));
}


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

const getCurrentIcon = () => {
    return themeButton.classList.contains(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill';
};

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    console.log(selectedTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
