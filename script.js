const $formSignIn = $('.form-sign-in');
const $formSignUp = $('.form-sign-up');
const $tabSignIn = $('.sign-in-tab');
const $tabSignUp = $('.sign-up-tab');

$(document).ready(function() {
    $formSignUp.hide();
    $tabSignUp.addClass('disabled');
});

$tabSignIn.on('click', function() {
    event.preventDefault();
    $tabSignIn.removeClass('disabled');
    $tabSignUp.addClass('disabled');
    $formSignIn.show();
    $formSignUp.hide();
});

$tabSignUp.on('click', function() {
    event.preventDefault();    
    $tabSignUp.removeClass('disabled');
    $tabSignIn.addClass('disabled');
    $formSignIn.hide();
    $formSignUp.show();
});