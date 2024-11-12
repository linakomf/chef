const openBtn = document.getElementById('openModal')
const authModal = document.getElementById('authModal')
const registerModal = document.getElementById('registerModal')
const backdrop = document.getElementById('backdrop')
const hasAccBtn = document.getElementById('hasAccBtn')
const notHasAcc = document.getElementById('notHasAcc')
const closeBtns = document.querySelectorAll('.closebtn')

function openModal() {
    backdrop.style.display = 'block'
    authModal.style.display = 'flex'
}

function closeModal() {
    backdrop.style.display = 'none'
    authModal.style.display = 'none'
}

function openAuthModal() {
    backdrop.style.display = 'block'
    registerModal.style.display = 'flex'
}

function closeAuthModal() {
    backdrop.style.display = 'none'
    registerModal.style.display = 'none'
}

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
})

hasAccBtn.addEventListener('click', (e) => {
    closeModal();
    openAuthModal();
})

notHasAcc.addEventListener('click', () => {
    closeAuthModal();
    openModal();
})

closeBtns.forEach(el => {
    el.addEventListener('click',() => {
        closeAuthModal();
        closeModal();
    })
})
