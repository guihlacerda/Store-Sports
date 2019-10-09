(function() {
    var but = document.querySelector('button');
    but.addEventListener('click', function(evt) {
        evt.preventDefault;
        var product = document.querySelector('.product');
        var pid = product.getAttribute('data-product-id');
        document.cookie = "cart=" + pid + "; expires=Wed, 11 Oct 2019 23:59:59 GMT; path=/";
        console.log(document.cookie);
        // window.location = 'https://guihlacerda.github.io/Store-Sports/checkout.html';
        return false;
    });   
})();
