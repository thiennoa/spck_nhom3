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


// Lấy các phần tử DOM từ HTML

const registerButton = document.getElementById('click-register');
const loginButton = document.getElementById('click-login');

// Đăng ký sự kiện click cho nút "Đăng ký" trên form đăng ký
registerButton.addEventListener('click', () => {
    const username = document.getElementById('user-name').value;
    const password = document.getElementById('pass').value;
    const endPassword = document.getElementById('end-pass').value;
    
    // Kiểm tra xem mật khẩu đã được nhập lại đúng chưa
    if (password !== endPassword) {
        alert('Mật khẩu không khớp');
        return;
    }

  
    // Kiểm tra xem các trường thông tin có được điền đầy đủ hay không
    if (username === '' || password === '' || endPassword === '') {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp nhau hay không
    if (password !== endPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp!');
        return;
  }

    // Kiểm tra xem người dùng đã tồn tại trong mảng người dùng chưa
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      alert('Người dùng đã tồn tại!');
      return;
  }

  // Thêm người dùng mới vào mảng người dùng và lưu vào Local Storage
  const newUser = { username, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Hiển thị thông báo đăng kí thành công và chuyển sang trang đăng nhập
    alert('Đăng kí thành công!');
    signInButton.click();
    
    
//     // Tạo đối tượng user và lưu vào Local Storage
//     const user = { username, password };
//     localStorage.setItem('user', JSON.stringify(user));
});

// Đăng ký sự kiện click cho nút "Đăng nhập" trên form đăng nhập

loginButton.addEventListener('click', () => {
   let isLoginSuccess = false;
   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Kiểm tra xác thực thông tin đăng nhập
    const listUser = JSON.parse(localStorage.getItem('users'));

    for (let i = 0; i < listUser.length; i++) 
      {
          if(listUser[i].username === email && listUser[i].password === password){
            isLoginSuccess=true;
          }
      }
  
    
   if(isLoginSuccess===true){
    window.location.assign("http://127.0.0.1:5500/html/home.html")
    
   } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng.")
   }

   localStorage.setItem("isLoginSuccess", isLoginSuccess)
  })





