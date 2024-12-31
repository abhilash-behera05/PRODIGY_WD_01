
const navMenu = document.getElementById('navMenu');
const menuItems = navMenu.querySelectorAll('a');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navMenu.classList.add('scrolled');
    } else {
        navMenu.classList.remove('scrolled');
    }
});

menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        menuItems.forEach(link => link.style.color = 'white'); // Reset all to white
        this.style.color = '#f7cb92'; // Highlight hovered item
    });

    item.addEventListener('mouseout', function() {
        this.style.color = 'white'; // Reset to white
    });
});
