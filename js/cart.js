document.addEventListener('DOMContentLoaded', function() {
    var taxRate = 0.05;
    var shippingRate = 15.00; 
    var fadeTime = 300;

    var quantityInputs = document.querySelectorAll('.product-quantity input');
    quantityInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            updateQuantity(this);
        });
    });

    var removeButtons = document.querySelectorAll('.product-removal button');
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            removeItem(this);
        });
    });

    function recalculateCart() {
        var subtotal = 0;
        var productRows = document.querySelectorAll('.product');

        productRows.forEach(function(row) {
            var price = parseFloat(row.querySelector('.product-price').textContent);
            var quantity = parseInt(row.querySelector('.product-quantity input').value);
            subtotal += price * quantity;
        });

        var tax = subtotal * taxRate;
        var shipping = (subtotal > 0 ? shippingRate : 0);
        var total = subtotal  + shipping;

        // Cập nhật hiển thị tổng giá trị
        document.getElementById('cart-subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('cart-shipping').textContent = shipping.toFixed(2);
        document.getElementById('cart-total').textContent = total.toFixed(2);

        var checkoutButton = document.querySelector('.checkout');
        if (total == 0) {
            checkoutButton.style.display = 'none';
        } else {
            checkoutButton.style.display = 'block';
        }
    }

    function updateQuantity(input) {
        var productRow = input.closest('.product');
        var price = parseFloat(productRow.querySelector('.product-price').textContent);
        var quantity = parseInt(input.value);
        var linePrice = price * quantity;

        // Cập nhật giá sản phẩm trên mỗi dòng và tính toán lại tổng giá trị
        productRow.querySelector('.product-line-price').textContent = linePrice.toFixed(2);
        recalculateCart();
    }

    function removeItem(button) {
        var productRow = button.closest('.product');

        productRow.remove();
        recalculateCart();
    }
});
