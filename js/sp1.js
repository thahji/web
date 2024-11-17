let bigImg = document.querySelector('.big-img img');
function showImg(pic){
    bigImg.src = pic;
}
//-----------------------------------

const sizeElements = document.querySelectorAll('.psize');
const productPriceOldElement = document.querySelector('.product-price-old');
const productPriceNewElement = document.querySelector('.product-price-new');


const prices = {
  '400g': {
    old: 199000,
    new: 127000
  },
  '2kg': {
    old: 250000,
    new: 185000
  },
  '4kg': {
    old: 320000,
    new: 240000
  },
  '10kg': {
    old: 450000,
    new: 320000
  }
};

sizeElements.forEach(sizeElement => {
  sizeElement.addEventListener('click', function() {
    
    document.querySelector('.psize.active').classList.remove('active');

    
    this.classList.add('active');

    const selectedSize = this.textContent.trim(); 

    if (prices[selectedSize]) {
      const oldPrice = prices[selectedSize].old;
      const newPrice = prices[selectedSize].new;
    
      
      productPriceOldElement.textContent = formatNumber(oldPrice);
      productPriceNewElement.textContent = formatNumber(newPrice) ;
    }
    
   
    function formatNumber(number) {
      return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var cartBtn = document.querySelector('.cart-btn');
  var cartNotice = document.querySelector('.cart-notice');

  var cartCount = 3;

  
  cartBtn.addEventListener('click', function() {
      cartCount++;
      cartNotice.innerText = cartCount;
  });
});

//Danh gia sp
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formgroupcomment').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('form-name').value;
      var content = document.getElementById('formcontent').value;

      if (name.trim() === '' || content.trim() === '') {
          alert('Vui lòng nhập cả tên và nội dung bình luận.');
          return;
      }

      var currentDate = new Date();
      var dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

      var newComment = `
          <div class="comment-item">
              <ul class="item-reviewer">
                  <div class="comment-item-user">
                      <img src="image/1.png" alt="" class="comment-item-user-img">
                      <li><b>${name}</b></li>
                  </div>
                  <br>
                  <li>${dateString}</li>
                  <li>
                      <h4>${content}</h4>
                  </li>
              </ul>
          </div>
      `;

      var productUser = document.querySelector('.product-user');
      productUser.insertAdjacentHTML('afterbegin', newComment); 

      document.getElementById('form-name').value = '';
      document.getElementById('formcontent').value = '';
  });
});