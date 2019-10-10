(function() {
    var body = document.querySelector('body');

     // product page
     if (body.classList.contains('product') == true) {
        var but = document.querySelector('button');
        if (but !== null) {
            but.addEventListener('click', function(evt) {
                evt.preventDefault;
                var product = document.querySelector('.product');
                var pid = product.getAttribute('data-product-id');
                document.cookie = "cart=" + pid + "; expires=Wed, 11 Oct 2019 23:59:59 GMT; path=/";
                window.location = 'https://guihlacerda.github.io/Store-Sports/checkout.html';
            });
        }
    }

    // CHECKOUT page
    if (body.classList.contains('checkout') == true) {
        var cookies = document.cookie;
        var strCookies = cookies.split(';');
        var valueProduct = 'vazio';

        strCookies.forEach(function(ck) {
            if (ck.trim().slice(0, 5) == 'cart=') {
                valueProduct = ck.split('=')[1]
            };
        });
        var p = document.querySelector('.item[data-p="' + valueProduct + '"]');
        p.classList.add('visible');
    }

   
})();