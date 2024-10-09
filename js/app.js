
function renderHeader(){
    const header = document.getElementById('header');
    header.innerHTML = `
    
    `;
}

// Динамическая вставка навигации
function renderNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = `
        <nav>
           <a href="index.html">
            Ospishchev A.V.
            </a>
            <a href="index.html">Главная</a>
            <a href="catalog.html">Каталог</a>
            
            <a href="contact.html">Контакты</a>
            <a href="login.html">Войти</a>
        </nav>
    `;
}

// Динамическая вставка футера
function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <footer>
            <p>&copy; 2024 Ospishchev A.V. - Все права защищены.</p>
        </footer>
    `;
}

// Вызов функций рендеринга при загрузке страницы
window.onload = function() {
    renderNav();
    renderFooter();
    renderHeader();
};
