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

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.form-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const formId = this.getAttribute('data-form');
            const form = document.getElementById(formId);

            if (this.checked) {
                form.classList.remove('hidden');
            } else {
                form.classList.add('hidden');
            }
        });
    });
});