const hamburger__wrapper = document.querySelector('.hamburger__wrapper');
const navigation = document.querySelector('.navigation');

hamburger__wrapper.addEventListener('click', function () {
    document.querySelector('.hamburger').classList.toggle('hamburger-active');
    navigation.classList.toggle('navigation-active');
});

const toggleActiveFields = (event) => {
    event.classList.toggle('arrow-icon-active');
    event.closest('li').classList.toggle('field-active');
}

const removeActiveClassesFromSubmenu = () => {
    document.querySelectorAll('.submenu').forEach(el => {
        el.classList.remove('submenu-active');
    })
    document.querySelectorAll('.dropdown-menu > li > span').forEach(el => {
        el.classList.remove('arrow-icon-active');
    })
    document.querySelectorAll('.dropdown-menu.dropdown-menu-active > li').forEach(el => {
        el.classList.remove('field-active');
    })
}

const removeActiveClassesFromDropdownmenu = () => {
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

document.querySelector('.menu').addEventListener('click', function (e) {
    if(e.target.classList.contains('arrow-icon')) {
        if(e.target.nextElementSibling.classList.contains('submenu-active')) {
            toggleActiveFields(e.target);
            e.target.nextElementSibling.classList.toggle('submenu-active');
            return;
        }
        if(e.target.nextElementSibling.classList.contains('submenu')) {
            removeActiveClassesFromSubmenu();
            toggleActiveFields(e.target);
            e.target.nextElementSibling.classList.toggle('submenu-active');
            e.target.scrollIntoView();
            return;
        }

        if(e.target.nextElementSibling.classList.contains('dropdown-menu-active')) {
            toggleActiveFields(e.target);
            e.target.nextElementSibling.classList.toggle('dropdown-menu-active');
        } else {
            removeActiveClassesFromDropdownmenu();
            removeActiveClassesFromSubmenu();
            toggleActiveFields(e.target);
            e.target.nextElementSibling.classList.toggle('dropdown-menu-active');
            e.target.scrollIntoView();
        }

    }
})
