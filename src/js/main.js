var search = document.querySelector(".main-header__form");
var toggle = document.querySelector(".main-header__toggle");

function openPopup() {
  search.classList.add("main-header__form_opened");
  toggle.classList.add("main-header__toggle_opened");
  setTimeout(function() {
    search.classList.add("main-header__form_obvious"); 
  }, 50
)};

function closePopup() {
  search.classList.remove("main-header__form_obvious");
  toggle.classList.remove("main-header__toggle_opened");
  setTimeout(function() {
    search.classList.remove("main-header__form_opened");
  }, 350
)};

var interPopup = function() {  
  toggle.addEventListener("click", function() {
    if(search.classList.contains("main-header__form_opened") && search.classList.contains("main-header__form_obvious")) {
      closePopup(); 
    } else {
      openPopup();
    }
  });
};

document.addEventListener("DOMContentLoaded", function() {
  if(toggle) {
    interPopup();
  }
});



var fields = document.querySelectorAll(".form__search");
var capts = document.querySelectorAll(".form__capt");

var focusField = function(item, capt) {
  item.addEventListener("focus", function() {
    capt.classList.add("form__capt--full");
  });
}

var blurField = function(item, capt) {
  item.addEventListener("blur", function() {
    if(!(item.value)) {
      capt.classList.remove("form__capt--full");
    }
  });
}

var interSearch = function () {
  for(var i = 0; i < fields.length; i++) {
    if(!(fields[i].value)) {
      focusField(fields[i], capts[i]);
      blurField(fields[i], capts[i]);
    }
  };
}

interSearch();



var changeTabColor = function() {
  var root = document.querySelector(":root");
  var rootStyle = getComputedStyle(root);
  var metaTheme = document.querySelector("meta[name=theme-color]");
  var themeColor = rootStyle.getPropertyValue("--theme-color");
  metaTheme.setAttribute("content", themeColor);
};

changeTabColor();