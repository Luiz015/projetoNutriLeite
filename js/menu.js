// Função para ativar o link da página atual automaticamente
const menuItems = document.querySelectorAll('.item-do-menu');

menuItems.forEach(item => {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');


    if (window.location.href.includes(href)) {
        item.classList.add('ativo');
    } else {
        item.classList.remove('ativo');
    }


    link.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('ativo'));
        item.classList.add('ativo');
    });
});


const expandir = document.querySelector('#expandir');
const menu = document.querySelector('.menu');

expandir.addEventListener('click', function () {
    menu.classList.toggle('expansao');
});
