document.addEventListener('DOMContentLoaded', function() {
  const showHidePassIcons = document.querySelectorAll('.fa-lock');

  showHidePassIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const inputField = icon.previousElementSibling;
      if (inputField.type === 'password') {
        inputField.type = 'text';
      } else {
        inputField.type = 'password';
      }
    });
  });
});

//----------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const inputUsernameRegister = document.getElementById("account-field-register");
  const inputPasswordRegister = document.querySelector('input[type="password"]');
  const inputPasswordAgain = document.getElementById("input-password-again");
  const btnRegister = document.getElementById("btn-login");

  btnRegister.addEventListener("click", (e) => {
    e.preventDefault();

    const username = inputUsernameRegister.value.trim();
    const password = inputPasswordRegister.value.trim();
    const passwordAgain = inputPasswordAgain.value.trim();

   
    if (username === "" || password === "" || passwordAgain === "") {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (password !== passwordAgain) {
      alert("Mật khẩu nhập lại không khớp.");
      return;
    }

   
    const user = {
      username: username,
      password: password,
    };
    const userData = JSON.stringify(user);
    localStorage.setItem(username, userData);

    alert("Đăng ký thành công!");
    window.location.href = "dangnhap.html"; 
  });
});

//-----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const inputUsername = document.getElementById("account-field-login");
  const inputPassword = document.querySelector('input[type="password"]');
  const btnLogin = document.getElementById("btn-login");

  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const username = inputUsername.value.trim();
    const password = inputPassword.value.trim();


    if (username === "" || password === "") {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    
    const userData = localStorage.getItem(username);

    if (!userData) {
      alert("Tài khoản không tồn tại.");
      return;
    }

 
    const user = JSON.parse(userData);

    if (user.username === username && user.password === password) {
      alert("Đăng nhập thành công!");
      window.location.href = "tc.html"; 
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu.");
    }
  });
});
