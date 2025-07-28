// Função para ativar o link da página atual automaticamente
const menuItems = document.querySelectorAll('.item-do-menu');

menuItems.forEach(item => {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');

    // Ativa se a URL atual contiver o href (ex: produtos.html)
    if (window.location.href.includes(href)) {
        item.classList.add('ativo');
    } else {
        item.classList.remove('ativo');
    }

    // Se quiser manter o efeito também ao clicar
    link.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('ativo'));
        item.classList.add('ativo');
    });
});

// Expande o menu lateral
const expandir = document.querySelector('#expandir');
const menu = document.querySelector('.menu');

expandir.addEventListener('click', function () {
    menu.classList.toggle('expansao');
});
