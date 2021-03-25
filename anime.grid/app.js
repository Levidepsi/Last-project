const toggle = document.querySelector('#btn1');
const form = document.querySelector('.input')

toggle.addEventListener("click", () =>{
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
});