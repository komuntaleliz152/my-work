 function addItem() {
      const table = document.getElementById("tableBody");

      const row = document.createElement("tr");

      row.innerHTML = `
        <td><input type="text" placeholder="e.g. Rice 25kg"></td>
        <td><input type="number" min="1" value="1" onchange="updateTotal()"></td>
        <td><input type="number" min="0" step="1" value="0" onchange="updateTotal()"></td>
        <td class="totalPrice">UGX 0</td>
        <td><button onclick="removeItem(this)">Remove</button></td>
      `;

      table.appendChild(row);
      updateTotal();
    }

    function updateTotal() {
      const rows = document.querySelectorAll("#tableBody tr");
      let grandTotal = 0;

      rows.forEach(row => {
        const quantity = row.cells[1].querySelector("input").value;
        const unitPrice = row.cells[2].querySelector("input").value;

        const total = parseFloat(quantity) * parseFloat(unitPrice);
        row.cells[3].innerText = `UGX ${total.toLocaleString()}`;

        grandTotal += total;
      });

      document.getElementById("total").innerText = `Total: UGX ${grandTotal.toLocaleString()}`;
    }

    function removeItem(button) {
      const row = button.parentElement.parentElement;
      row.remove();
      updateTotal();
    }

    window.onload = () => updateTotal();
  