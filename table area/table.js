const openBtn = document.getElementById('open-btn');
const options = document.getElementById('side-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', openOptions);
closeBtn.addEventListener('click', closeOptions);

function openOptions() {
    options.classList.add('open');
}

function closeOptions() {
    options.classList.remove('open');
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


/* ======================== */

const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

// 2. Sorting | Ordering data of HTML table

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}

/* ================================== */
document.addEventListener('DOMContentLoaded', function () {
    const btnShowTables = document.querySelectorAll('.btnShowTable');
    const tables = document.querySelectorAll('.container');

    btnShowTables.forEach(btn => {
        btn.addEventListener('click', function () {
            const tableId = this.getAttribute('data-table');

            // Oculta todas as tabelas
            tables.forEach(table => {
                table.classList.add('hidden');
            });

            // Exibe a tabela correspondente ao botão clicado
            const tableToShow = document.getElementById(tableId);
            tableToShow.classList.remove('hidden');
        });
    });
});
