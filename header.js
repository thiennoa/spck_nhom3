const navbar =  document.getElementById('navbar-abc');
// console.log("navbar: ", navbar)
const isLoginSuccess = localStorage.getItem('isLoginSuccess');

if(isLoginSuccess){
    navbar.innerHTML= `<h2 id="abc" style= "color:#ddd"><i class="fa-regular fa-user"></i><h2>`
}
// if(isLoginSuccess){
//     navbar.innerHTML= <h2 id="abc" style= "color:#ddd"><i class="fa-regular fa-user" onclick="showProfile()"></i></h2>;
//     }
    
//     function showProfile() {
//     // Để hiển thị hồ sơ người dùng
    
//     // sau đó chạy hàm logout để thực hiện đăng xuất
//     }
    
    function logout() {
    // Xóa thông tin đăng nhập và chuyển người dùng đến trang đăng nhập
    localStorage.removeItem('isLoginSuccess');
    window.location.href = 'http://127.0.0.1:5500/header.html';
    }