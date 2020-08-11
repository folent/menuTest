const hamburger__wrapper = document.querySelector('.hamburger__wrapper');
const navigation = document.querySelector('.navigation');
const menu = document.querySelector('.menu');

hamburger__wrapper.addEventListener('click', function () {
    document.querySelector('.hamburger').classList.toggle('hamburger-active');
    navigation.classList.toggle('navigation-active');
});

const toggleActiveFields = (event) => {
    event.classList.toggle('arrow-icon-active');
    event.closest('li').classList.toggle('field-active');
}

const removeActiveClassesFromSubMenu = () => {
    document.querySelectorAll('.submenu').forEach(el => {
        el.classList.remove('submenu-active');
    })
    document.querySelectorAll('.dropdown-menu > li > span.arrow-icon').forEach(el => {
        el.classList.remove('arrow-icon-active');
    })
    document.querySelectorAll('.dropdown-menu.dropdown-menu-active > li').forEach(el => {
        el.classList.remove('field-active');
    })
}

const removeActiveClassesFromDropdownMenu = () => {
    document.querySelectorAll('.dropdown-menu').forEach(el => {
        el.classList.remove('dropdown-menu-active');
    })
    document.querySelectorAll('.arrow-icon').forEach(el => {
        el.classList.remove('arrow-icon-active');
    })
    document.querySelectorAll('li').forEach(el => {
        el.classList.remove('field-active');
    })
}
const toggleSubMenuActive = (event) => {
    event.nextElementSibling.classList.toggle('submenu-active');
}
const toggleDropdownMenuActive = (event) => {
    event.nextElementSibling.classList.toggle('dropdown-menu-active');
}

menu.addEventListener('click', function (e) {
    if(e.target.classList.contains('arrow-icon')) {
        const currentArrow = e.target;

        if(currentArrow.nextElementSibling.classList.contains('submenu')) {
            if(!currentArrow.nextElementSibling.classList.contains('submenu-active')) {
                removeActiveClassesFromSubMenu();
            }
            toggleActiveFields(currentArrow);
            toggleSubMenuActive(currentArrow);
            currentArrow.scrollIntoView();
        }

        if(currentArrow.nextElementSibling.classList.contains('dropdown-menu')){
            if(!currentArrow.nextElementSibling.classList.contains('dropdown-menu-active')) {
                removeActiveClassesFromDropdownMenu();
                removeActiveClassesFromSubMenu();
            }
            toggleActiveFields(currentArrow);
            toggleDropdownMenuActive(currentArrow);
            currentArrow.scrollIntoView();
        }

    }
})
