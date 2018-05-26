const $formSignIn = $('.form-sign-in');
const $formSignUp = $('.form-sign-up');
const $tabSignIn = $('.sign-in-tab');
const $tabSignUp = $('.sign-up-tab');
const $emailSignUp = $('#email-sign-up');
const $passwordSignUp = $('#password-sign-up');
const $btnSignUp = $('#btn-sign-up');

const REQUIRED_PATTERN_MAIL = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
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

function required() {
    return !REQUIRED_PATTERN_MAIL.test($emailSignUp.val()) ||
    !REQUIRED_PATTERN_PASSWORD.test($passwordSignUp.val()) 
}

function validatebtnSignUp() {
    $btnSignUp.prop('disabled', required());
}

$emailSignUp.add($passwordSignUp).on('keyup', validatebtnSignUp);