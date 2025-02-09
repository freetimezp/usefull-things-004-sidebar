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


/*=============== DARK LIGHT THEME ===============*/

