let sidebar = document.getElementById('sidebar');
let showSidebar = false;

function toggleSidebar() {
    if (showSidebar) {
        sidebar.style.right = 0;
        showSidebar = false;
    } else {
        sidebar.style.right = '-100vw';
        showSidebar = true;
    }
}