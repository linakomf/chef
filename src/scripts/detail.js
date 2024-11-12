const img = document.getElementById('img');
const title = document.getElementById('title');
// const description = document.getElementById('description');

const id = document.location.href.split('id=')[1]

function initDetail() {
    console.log(img)
    const c = dbCategories.find(c => c.id === Number(id))
    console.log(c)
    img.innerText = c.img;
    title.innerText = c.description;
}

initDetail();
