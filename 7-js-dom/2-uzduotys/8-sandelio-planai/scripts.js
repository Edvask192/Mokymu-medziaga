let skirtukas1 = document.querySelector('.skirtukai .skirtukas1');
let skirtukas2 = document.querySelector('.skirtukai .skirtukas2');
let skirtukas3 = document.querySelector('.skirtukai .skirtukas3');

let turinys1 = document.querySelector('.turinys .skirtukas1-turinys');
let turinys2 = document.querySelector('.turinys .skirtukas2-turinys');
let turinys3 = document.querySelector('.turinys .skirtukas3-turinys');

skirtukas1.addEventListener('click', (event) => {
    skirtukas1.classList.add('aktyvus');
    turinys1.classList.add('aktyvus');

    skirtukas2.classList.remove('aktyvus');
    turinys2.classList.remove('aktyvus');

    skirtukas3.classList.remove('aktyvus');
    turinys3.classList.remove('aktyvus');
});

skirtukas2.addEventListener('click', (event) => {
    skirtukas1.classList.remove('aktyvus');
    turinys1.classList.remove('aktyvus');

    skirtukas2.classList.add('aktyvus');
    turinys2.classList.add('aktyvus');

    skirtukas3.classList.remove('aktyvus');
    turinys3.classList.remove('aktyvus');
});

skirtukas3.addEventListener('click', (event) => {
    skirtukas1.classList.remove('aktyvus');
    turinys1.classList.remove('aktyvus');

    skirtukas2.classList.remove('aktyvus');
    turinys2.classList.remove('aktyvus');

    skirtukas3.classList.add('aktyvus');
    turinys3.classList.add('aktyvus');
});
