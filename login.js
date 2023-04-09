// đổi vị trí đăng kí đăng nhập
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });



// đăng nhập hiện logo user


const $clickLogin = document.getElementById('click-login');
const $clickRegister = document.getElementById('click-register');
const $boxMain = document.getElementById('box-main');
const $boxMainLogin = document.getElementById('box-main-login');
function checkPasswordStrength(password) {
    // Initialize variables
    var strength = 0;
    var tips = "";
  
    // Check password length
    if (password.length < 8) {
      tips += "Make the password longer. ";
    } else {
      strength += 1;
    }
  
    // Check for mixed case
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      strength += 1;
    } else {
      tips += "Use both lowercase and uppercase letters. ";
    }
  
    // Check for numbers
    if (password.match(/\d/)) {
      strength += 1;
    } else {
      tips += "Include at least one number. ";
    }
  
    // Check for special characters
    if (password.match(/[^a-zA-Z\d]/)) {
      strength += 1;
    } else {
      tips += "Include at least one special character. ";
    }
  
    // Return results
    if (strength < 2) {
      return "Easy to guess. " + tips;
    } else if (strength === 2) {
      return "Medium difficulty. " + tips;
    } else if (strength === 3) {
      return "Difficult. " + tips;
    } else {
      return "Extremely difficult. " + tips;
    }
  }



let users = []
if(localStorage.getItem('users')){
    users = JSON.stringify(localStorage.getItem('users'))
} 

const handleRegister = (e) => {
    e.preventDefault();
    const $userName = document.getElementById('user-name').value;
    const $pass = document.getElementById('pass').value;
    const $endPass = document.getElementById('end-pass').value;
    if($pass.lenght < 6){
        alert('Độ dài mật khẩu khồng đủ');
    }


    if($pass != $endPass){
        alert('mật khẩu không trùng khớp');
    } else{
        const user = {
            id: Date.now(),
            username: $userName,
            pass: $pass
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'http://127.0.0.1:5500/index.html';// chỉnh http
    }
}

const handleLogin = (e) => {
    e.preventDefault();
    const $userName = document.getElementById('user-name').value;
    const $pass = document.getElementById('pass').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if($userName == user.username && $pass == user.pass){
        window.location.href = 'http://127.0.0.1:5500/header.html';
        localStorage.setItem('user_login', user.username );
        // const user = localStorage.getItem('user')

    }
    
    
}



$boxMain?.addEventListener('submit', handleRegister);
$boxMainLogin.addEventListener('submit', handleLogin);