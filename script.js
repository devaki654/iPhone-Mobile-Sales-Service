document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const product = document.getElementById('product').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;

    // Display order summary
    document.getElementById('summaryProduct').textContent = `Product: ${product}`;
    document.getElementById('summaryName').textContent = `Name: ${name}`;
    document.getElementById('summaryEmail').textContent = `Email: ${email}`;
    document.getElementById('summaryAddress').textContent = `Address: ${address}`;
    document.getElementById('summaryQuantity').textContent = `Quantity: ${quantity}`;

    // Show the order summary
    document.getElementById('orderSummary').style.display = 'block';

    // Clear the form
    document.getElementById('orderForm').reset();
});
