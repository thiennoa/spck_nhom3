const navbar =  document.getElementById('navbar-abc');

// console.log("navbar: ", navbar)
const isLoginSuccess = localStorage.getItem('isLoginSuccess');

if(isLoginSuccess){
    navbar.innerHTML= `<h2 id="abc" class="logg-try" style= "color:#ddd"><i class="fa-regular fa-user"></i>
                <div id="logoUser" class="logg" >
                    <div id="hoSo" class="logg-item">Hồ sơ</div>
                    <div id="dangXuat" class="logg-item">Đăng xuất</div>
                </div>
    
    <h2>`

    // Remove the menuu div
  const menuuDiv = document.querySelector('.btn-all');
  menuuDiv.remove();
    
}
  


    const userLogo = document.getElementById("abc");

    userLogo.addEventListener("click", () => {
    logoUser.style.display = logoUser.style.display === "none" ? "block" : "none";
});

function logout() {
    // Remove the login information from localStorage
    localStorage.removeItem('isLoginSuccess');
    
    // Redirect the user to the homepage
    window.location.href = 'http://127.0.0.1:5500/html/home.html';
}

const logoutButton = document.getElementById('dangXuat');
logoutButton.addEventListener('click', logout);


