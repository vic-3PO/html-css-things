const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

// script.js
function showTable(tableId) {
    // Ocultar todas as tabelas
    const tables = document.querySelectorAll('.table');
    tables.forEach(table => table.style.display = 'none');

    // Mostrar a tabela selecionada
    const tableToShow = document.getElementById(tableId);
    if (tableToShow) {
        tableToShow.style.display = 'table';
    }
}
