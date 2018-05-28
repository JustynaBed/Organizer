const $formSignIn = $('.form-sign-in');
const $formSignUp = $('.form-sign-up');
const $tabSignIn = $('.sign-in-tab');
const $tabSignUp = $('.sign-up-tab');
const $emailSignUp = $('#email-sign-up');
const $passwordSignUp = $('#password-sign-up');
const $RePasswordSignUp = $('#re-password-sign-up');
const $btnSignUp = $('#btn-sign-up');

const REQUIRED_PATTERN_MAIL = /^.*(?=.{8,})([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const REQUIRED_PATTERN_PASSWORD = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

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

$emailSignUp.on('blur', function(){
    if(REQUIRED_PATTERN_MAIL.test($emailSignUp.val()))  {
        $emailSignUp.removeClass('invalid').addClass('valid');
        $('.information').text('E-mail ma poprawny format.').removeClass('inf-bad').addClass('inf-good');
    } else {
        $emailSignUp.removeClass('valid').addClass('invalid');
        $('.information').text('E-mail ma niepoprawny format. Poprawny format to np. jan.kowalski@wp.pl').removeClass('inf-good').addClass('inf-bad');        
    }
});

$passwordSignUp.on('blur', function(){
    if(REQUIRED_PATTERN_PASSWORD.test($passwordSignUp.val()))  {
        $passwordSignUp.removeClass('invalid').addClass('valid');
        $('.information').text('Hasło ma poprawny format.').removeClass('inf-bad').addClass('inf-good');
    } else {
        $passwordSignUp.removeClass('valid').addClass('invalid');
        $('.information').text('Hasło ma niepoprawny format. Użyj min. 8 znaków,  w tym przynajmniej 1 małą, 1 dużą literę, cyfrę i 2 znaki specjalne np. @#$%&').removeClass('inf-good').addClass('inf-bad');        
    }
});

$RePasswordSignUp.on('blur', function(){
    if($passwordSignUp.val() === $RePasswordSignUp.val() & $RePasswordSignUp.val().length > 1)  {
        $RePasswordSignUp.removeClass('invalid').addClass('valid');
        $('.information').text('Hasła są takie same.').removeClass('inf-bad').addClass('inf-good');
    } else {
        $RePasswordSignUp.removeClass('valid').addClass('invalid');
        $('.information').text('Hasła nie są takie same').removeClass('inf-good').addClass('inf-bad');        
    }
});


function required() {
    return !REQUIRED_PATTERN_MAIL.test($emailSignUp.val()) ||
    !REQUIRED_PATTERN_PASSWORD.test($passwordSignUp.val()) ||
    $passwordSignUp.val() !== $RePasswordSignUp.val()
}

function validatebtnSignUp() {
    $btnSignUp.prop('disabled', required());
}

$emailSignUp.add($passwordSignUp).add($RePasswordSignUp).on('keyup', validatebtnSignUp);