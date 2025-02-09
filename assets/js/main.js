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

