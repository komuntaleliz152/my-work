  const form = document.getElementById('stockForm');
        const tableBody = document.querySelector('#stockTable tbody');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('itemName').value;
            const quantity = document.getElementById('itemQuantity').value;
            const price = document.getElementById('itemPrice').value;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${parseFloat(quantity).toFixed(2)}</td>
                <td>UGX ${parseFloat(price).toFixed(0)}</td>
                <td>
                    <button onclick="editRow(this)">Edit</button>
                    <button onclick="restockRow(this)">Restock</button>
                    <button onclick="deleteRow(this)">Delete</button>
                </td>
            `;

            tableBody.appendChild(row);
            form.reset();
        });

        function deleteRow(button) {
            const row = button.parentElement.parentElement;
            tableBody.removeChild(row);
        }

        function editRow(button) {
            const row = button.parentElement.parentElement;
            const nameCell = row.children[0];
            const quantityCell = row.children[1];
            const priceCell = row.children[2];

            const newName = prompt("Edit item name:", nameCell.textContent);
            const newQuantity = prompt("Edit quantity (Tonnes):", quantityCell.textContent);
            const newPrice = prompt("Edit price (UGX):", priceCell.textContent.replace('UGX ', ''));

            if (newName !== null && newQuantity !== null && newPrice !== null) {
                nameCell.textContent = newName;
                quantityCell.textContent = parseFloat(newQuantity).toFixed(2);
                priceCell.textContent = `UGX ${parseFloat(newPrice).toFixed(0)}`;
            }
        }

        function restockRow(button) {
            const row = button.parentElement.parentElement;
            const quantityCell = row.children[1];
            const currentQty = parseFloat(quantityCell.textContent);
            const addedQty = prompt("Enter quantity to restock (Tonnes):", "0");

            if (addedQty !== null && !isNaN(addedQty)) {
                quantityCell.textContent = (currentQty + parseFloat(addedQty)).toFixed(2);
            }
        }
    