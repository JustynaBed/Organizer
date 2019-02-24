const LoginPanel = document.getElementById('login-panel');
const UserPanel = document.getElementById('user-panel');
const btnSignIn = document.getElementById('btn-sign-in');
const btnSignUp = document.getElementById('btn-sign-up');
const btnSignOut = document.getElementById('btn-sign-out');
const txtEmailSignIn = document.getElementById('email-sign-in');
const txtPasswordSignIn = document.getElementById('password-sign-in');
const txtEmailSignUp = document.getElementById('email-sign-up');
const txtPasswordSignUp = document.getElementById('password-sign-up');

btnSignIn.addEventListener('click', e => {
    const emailIn = txtEmailSignIn.value;
    const passIn = txtPasswordSignIn.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(emailIn, passIn);
    promise.catch(e => console.log(e.massage));
    console.log('Kliknieto')
});

btnSignUp.addEventListener('click', e => {
    const emailUp = txtEmailSignUp.value;
    const passUp = txtPasswordSignUp.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(emailUp, passUp);
    promise.catch(e => console.log(e.massage));
    console.log('Kliknieto')
});

btnSignOut.addEventListener('click', e => {
    firebase.auth().signOut();
    window.location.href = 'index.html'
});

firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser) {
    console.log("User: ", firebaseUser);
    btnSignOut.classList.remove('hide');
    UserPanel.style.display = "block";
    LoginPanel.style.display = "none";

    const user = firebase.auth().currentUser;

    if(user != null) {
        document.getElementById('login-panel-text').innerHTML = 'Welcome User : ' + user.email
    }
} else {
    console.log('no one is logged in');
    btnSignOut.classList.add('hide');
    UserPanel.style.display = "none";
    LoginPanel.style.display = "block";
}
});