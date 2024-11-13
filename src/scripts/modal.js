const openBtn = document.getElementById('openModal');
const authModal = document.getElementById('authModal');
const registerModal = document.getElementById('registerModal');
const backdrop = document.getElementById('backdrop');
const hasAccBtn = document.getElementById('hasAccBtn');
const notHasAcc = document.getElementById('notHasAcc');
const closeBtns = document.querySelectorAll('.closebtn');


const registerBtn = document.querySelector("#authModal .buttonBrawn");
const loginBtn = document.querySelector("#registerModal .buttonBrawn");


function openModal() {
    backdrop.style.display = 'block';
    authModal.style.display = 'flex';
}
function closeModal() {
    backdrop.style.display = 'none';
    authModal.style.display = 'none';
}

function openAuthModal() {
    backdrop.style.display = 'block';
    registerModal.style.display = 'flex';
}

function closeAuthModal() {
    backdrop.style.display = 'none';
    registerModal.style.display = 'none';
}

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

hasAccBtn.addEventListener('click', (e) => {
    closeModal();
    openAuthModal();
});

notHasAcc.addEventListener('click', () => {
    closeAuthModal();
    openModal();
});

closeBtns.forEach(el => {
    el.addEventListener('click', () => {
        closeAuthModal();
        closeModal();
    });
});

registerBtn.addEventListener('click', () => {
    const name = document.querySelector("#authModal input[placeholder='Имя ']").value.trim();
    const surname = document.querySelector("#authModal input[placeholder='Фамилия  ']").value.trim();
    const email = document.querySelector("#authModal input[placeholder='Email ']").value.trim();
    const password = document.querySelector("#authModal input[placeholder='Придумайте пароль ']").value.trim();
    const confirmPassword = document.querySelector("#authModal input[placeholder='Повторите пароль ']").value.trim();

    if (name && surname && email && password && password === confirmPassword) {
    
        localStorage.setItem("user", JSON.stringify({ name, surname, email, password }));
        alert("Регистрация успешна! Пожалуйста, войдите в свой аккаунт.");

        closeModal();
        openAuthModal();
    } else {
        alert("Пожалуйста, заполните все поля и убедитесь, что пароли совпадают.");
    }
});

loginBtn.addEventListener('click', () => {
    const email = document.querySelector("#registerModal input[placeholder='Email ']").value.trim();
    const password = document.querySelector("#registerModal input[placeholder='Введите пароль ']").value.trim();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert(`Добро пожаловать, ${storedUser.name}!`);

        closeAuthModal();
    } else {
        alert("Неверный email или пароль.");
    }
});
