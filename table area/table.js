const openBtn = document.getElementById('open-btn')
const options = document.getElementById('side-btn')
const closeBtn = document.getElementById('close-btn')

openBtn.addEventListener('click', openOptions)
closeBtn.addEventListener('click', closeOptions)

function openOptions() {
    options.classList.add('open')
}

function closeOptions() {
    options.classList.remove('open')
}