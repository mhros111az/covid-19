$(document).ready(function () {
  //-------------------------------------------------
  //$$$$$$$$$$$$$$$$$$$ Solution # 1 $$$$$$$$$$$$$$$$
  //-------------------------------------------------
  // window.addEventListener('scroll',function(){
  // let header = document.querySelector('header .navbar');
  // let windowToggle = window.scrollY > 0;
  // header.classList.toggle('scroll' , windowToggle)
  // })
  //--------------------------------------------------------------------
  //$$$$$$$$$$$$$$$$$$$ end Solution # 1 | Solution # 2 $$$$$$$$$$$$$$$$
  //--------------------------------------------------------------------
  window.addEventListener("scroll", function () {
    let header = document.querySelector("header .navbar");
    if (window.scrollY == 0) {
      header.style.backgroundColor = "#f7f9fe";
      header.style.transition = ".7s ease-in-out";
    } else {
      header.style.backgroundColor = "#fff";
    }
  });
  let goScroll = document.querySelector(".go-scroll-top");
  window.onscroll = function () {
    if (window.pageYOffset >= 500) {
      goScroll.style.opacity = "1";
      goScroll.style.transition = ".7s ease-in-out";
    } else {
      goScroll.style.opacity = "0";
    }
  };
  let body = document.querySelector("body");
  goScroll.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
  let menuShow = document.querySelector(".navbar .navbar-top .menu-btn .click");
  let over = document.querySelector(".over");
  let closeBtn = document.querySelector(".over .close-btn");
  menuShow.addEventListener("click", function () {
    over.classList.add("show");
    setTimeout(function () {
      menuShow.style.display = "none";
    }, 200);
  });
  closeBtn.addEventListener("click", function () {
    over.classList.remove("show");
    setTimeout(function () {
      menuShow.style.display = "block";
    }, 500);
  });
  //  show calss active 

  let li = document.querySelectorAll('.faq .box-left ul li');
  let t = li[0];
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', showA)
    function showA() {
      t.classList.remove('active');
      this.classList.add('active');
      t = this
    }
  };

  let heading = document.getElementsByClassName('accordion');
  for (let i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', function () {
      this.classList.toggle('show');
      let desc = this.nextElementSibling;
      if (desc.style.maxHeight) {
        desc.style.maxHeight = null;
      } else {
        desc.style.maxHeight = desc.scrollHeight + 'px';
      }
    })
  };
  $('.faq .box-left ul li').click(function () {
    let index = $('.faq .box-left ul li').index(this);
    if ($('.faq .box-contect .box').eq(index).hasClass('showindex')) {
      // $('.faq .box-contect .box').removeClass('showindex');
      $('.faq .box-contect .box .accordion .desc').fadeIn();
    } else {
      $('.faq .box-contect .box').removeClass('showindex');
      $('.faq .box-contect .box').eq(index).addClass('showindex');
    }
  })
})
// let box = document.querySelectorAll('.faq .box-contect .box');
// let lii = document.querySelectorAll('.faq .box-left ul li');
// for (let i = 0; i < lii.length; i++) {
//   if (lii.length === box.length) {
//     lii[i].addEventListener("click", function () {
//       box[i].style.display = 'block';
//       for (let j = 0; j < box.length; j++) {
//         box[j].style.display = 'none';
//       }
//     })
//   }
// }




