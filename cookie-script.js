(function() {
    let but = document.querySelector('.desc a');

    but.addEventListener('click', function(evt) {
        evt.preventDefault;
        let product = document.querySelector('.product');
        let pid = product.getAttribute('data-product-id');
        document.cookie = "cart=" + pid + "; expires=Wed, 11 Oct 2019 23:59:59 GMT;path=/";
        // window.location = 'https://guihlacerda.github.io/Store-Sports/checkout.html';
    });
})();
