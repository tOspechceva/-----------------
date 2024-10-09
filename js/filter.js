document.getElementById('category-select').addEventListener('change', function() {
    const selectedCategory = this.value;
    const products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        const productCategory = product.getAttribute('data-category');
        if (selectedCategory === 'all' || productCategory === selectedCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});