let but = document.querySelector('.desc a');

but.addEventListener('click', function(evt) {
    evt.preventDefault;
    document.cookie = "Procuct-one=true; expires=Wed, 11 Oct 2019 23:59:59 GMT;path=/";
    window.location = 'https://guihlacerda.github.io/Store-Sports/checkout.html';
});




