const products = document.querySelector('.products')
const type = document.location.href.split('type=')[1];

function initCategories() {
    dbCategories.filter(c => c.type === type).forEach(c => {
        const el = document.createElement('div')
        el.setAttribute('class', 'product-card')
        const content = `
            <img src='../assets/categories/${c.img}' alt='1'>
             <p>${c.description}</p>
           <a href='../pages/detail.html?id=${c.id}'>
             <button class='buttonBrawnOutlined' style='width: 100%; justify-content: center'>Подробнее</button>
         </a>`
        el.innerHTML = content;
        products.append(el);
    })
}

function initTitle() {
    const titles = {
        breackfast: 'Завтрак',
        lanch: 'Обед',
        dinner: 'Ужин',
        deserts: 'Десерты',
    }
    document.querySelector('h1').innerText = titles[type]
}

initTitle();
initCategories()
