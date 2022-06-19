const nav = document.querySelector('nav');
const sidebar = document.querySelector('.sidebar');
const btn = document.querySelector('.btn-menu');


function handleSidebar() {
    let sidebarIsClose = sidebar.classList.contains('sidebar-close');
    let sidebarIsOpen = sidebar.classList.contains('sidebar-open');

   if (sidebarIsClose) {
    sidebar.classList.remove('sidebar-close')
    sidebar.classList.add('sidebar-open');
    nav.classList.remove('sidebar-close');
    nav.classList.add('sidebar-open');
   } 
   
   if (sidebarIsOpen){
    sidebar.classList.remove('sidebar-open')
    sidebar.classList.add('sidebar-close');
    nav.classList.remove('sidebar-open')
    nav.classList.add('sidebar-close');
   }
   
}

btn.addEventListener('click', handleSidebar)