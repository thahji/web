var ellipsisDiv = document.querySelector('.ellipsis');
ellipsisDiv.addEventListener('click', function() {
  ellipsisDiv.classList.remove('ellipsis');
});



function submitComment() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var commentInput = document.getElementById("comment");
  var successMessage = document.getElementById("success-message");

  // Kiểm tra xem tất cả các trường đã được điền đầy đủ hay chưa
  if (nameInput.value && emailInput.value && commentInput.value) {
    // Hiển thị thông báo thành công
    successMessage.innerText = "Bạn đã đăng bình luận thành công. Chúng tôi sẽ đăng bình luận của bạn sau khi được kiểm duyệt.";

    // Xóa nội dung trong các trường input và textarea
    nameInput.value = "";
    emailInput.value = "";
    commentInput.value = "";
  }else {
    // Hiển thị thông báo lỗi nếu các trường chưa được điền đầy đủ
    alert("Vui lòng điền đầy đủ thông tin trước khi gửi bình luận.");
  }
}