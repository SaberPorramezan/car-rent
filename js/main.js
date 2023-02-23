const rotatingArrow = document.querySelector(".rotating-arrow");
const inputDataList = document.querySelector(".input--datalist");
const dataListOptions = document.querySelector(".datalist__options");

// Slider Show
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-active";
}
// Custom Select
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
// 
inputDataList.onfocus = function () {
  dataListOptions.style.display = "block";
  rotatingArrow.classList.toggle("rotating-arrow__active");
};
rotatingArrow.onclick = function () {
  dataListOptions.style.display = "block";
  rotatingArrow.classList.toggle("rotating-arrow__active");
};
for (let option of dataListOptions.options) {
  option.onclick = function () {
    inputDataList.value = option.value;
    dataListOptions.style.display = "none";
    rotatingArrow.classList.remove("rotating-arrow__active");
  };
}
inputDataList.oninput = function () {
  currentFocus = -1;
  var text = inputDataList.value.toUpperCase();
  for (let option of dataListOptions.options) {
    if (option.value.toUpperCase().indexOf(text) > -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  }
};
var currentFocus = -1;
inputDataList.onkeydown = function (e) {
  if (e.keyCode == 40) {
    currentFocus++;
    addActive(dataListOptions.options);
  } else if (e.keyCode == 38) {
    currentFocus--;
    addActive(dataListOptions.options);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    if (currentFocus > -1) {
      if (dataListOptions.options)
        dataListOptions.options[currentFocus].click();
    }
  }
};
function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  x[currentFocus].classList.add("active");
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
}

// Payment Method
const inputPaymentMethodWrapper = document.querySelectorAll(
  ".input--payment-method-wrapper"
);
const redioBtnPaymentMethod = document.querySelectorAll(
  ".redio-btn--payment-method"
);
redioBtnPaymentMethod.forEach((redio) => {
  redio.addEventListener("change", () => {
    document.querySelector("div#" + redio.id).classList.toggle("input-active");
    // inputActive.classList.remove("input-not-active");
    for (const notChecked of inputPaymentMethodWrapper) {
      if (notChecked.id != redio.id) {
        document
          .querySelector("div#" + notChecked.id)
          .classList.remove("input-active");
        // inputNotActive.classList.toggle("input-not-active");
        // inputNotActive.classList.remove("input-active");
        // break;
      }
    }
  });
});
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});



