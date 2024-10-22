document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const tableBody = document.getElementById('registrationTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);

    nameCell.textContent = name;
    emailCell.textContent = email;

    // Limpa o formulário
    document.getElementById('registrationForm').reset();
});
