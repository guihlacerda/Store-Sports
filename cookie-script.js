(function() {
    let but = document.querySelector('button');

    but.addEventListener('click', function(evt) {
        evt.preventDefault;
        let product = document.querySelector('.product');
        let pid = product.getAttribute('data-product-id');
        document.cookie = "cart=" + pid + "; expires=Wed, 11 Oct 2019 23:59:59 GMT;path=/";
        window.location = '/Store-Sports/checkout.html';
    });   
})();
