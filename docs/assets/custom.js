AOS.init({
  duration: 1200,
});
var slideIndex = 0;
setTimeout(function () {
  showSlides(slideIndex);
}, 1000);

function plusSlides2(n) {
  showSlides((slideIndex += n));
}
// foo
function showSlides(n) {
  if (document.getElementById("engji")) {
    var label;
    if (n == 3) {
      label = "enoughisenoughtwo";
    } else if (n == 4 || slideIndex == 4) {
      label = "choosewhereyouwanttogotwo";
    } else {
      label = "fromrootlesstorootedtwo";
    }

    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = "1";

    var str = $("." + label + " h2").text();
    $("." + label + " h2").text("");
    var h2 = "<h2>" + str.split("").join("</h2><h2>") + "</h2>";
    $(h2)
      .hide()
      .appendTo("." + label)
      .each(function (i) {
        $(this)
          .delay(70 * i)
          .css({
            display: "inline",
            opacity: 0,
          })
          .animate(
            {
              opacity: 1,
            },
            100
          );
      });
  }
}

function hoverVideo(id) {
  document.getElementById(id).play();
}

function hideVideo(id) {
  document.getElementById(id).pause();
}

function playVideo(id) {
  if ($("#" + id).playing) {
    document.getElementById(id).pause();
  } else {
    document.getElementById(id).play();
  }
}
function goToSection(section) {
  var my_element = document.getElementById(section);

  my_element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  if (section == "main") {
    $("#explain .container").hide();
    $("#video").addClass("fade-in");
    var vid = document.getElementById("video");
    vid.play();
  }
}

$("#explain").on("scroll", function () {
  var mass = Math.min(20, 1 + 0.1 * $(this).scrollTop());
});

var text = [
  '<h2 data-aos="fade-up" data-aos-delay="200" style="color:#88bcba;font-size: 90px;font-weight: bold;">create your own definition of success</h2>',
  `<h2 data-aos="fade-up" data-aos-delay="200" style="color:#784ebc;font-size: 90px;font-weight: bold;">aren't afraid to beat your own drums</h2>`,
  '<h2 data-aos="fade-up" data-aos-delay="200" style="color:#ffc20a;font-size: 90px;font-weight: bold;">live on your own terms</h2>',
];

var counter = 0;
var elem;

setTimeout(function () {
  AOS.init({
    duration: 1200,
  });
  elem = document.getElementById("changeText");
}, 3000);

var inst = document.getElementById("engji") ? setInterval(change, 5000) : "";

function change() {
  if (document.getElementById("engji")) {
    elem.innerHTML = text[counter];
    counter++;
    if (counter === 3) {
      counter = 0;
    }
  }
}

$(window).scroll(function () {
  if (document.getElementById("engji")) {
    onScrollFunction();
  }
});

function onScrollFunction() {
  var desktop = false;
  var mobile = false;
  if (screen.width <= 700) {
    mobile = true;
  } else {
    desktop = true;
  }

  if ($(window).scrollTop() >= 1100 && desktop) {
    $("#explain .container").hide();
    $("#videoDesktop").addClass("fade-in");
    var vid = document.getElementById("videoDesktop");
    vid.play();
  } else if ($(window).scrollTop() <= 200 && desktop) {
    $("#explain .container").show();
    $("#videoDesktop").removeClass("fade-in");
    var vid = document.getElementById("videoDesktop");
    vid.pause();
  }

  if ($(window).scrollTop() >= 600 && mobile) {
    $("#explain .container").hide();
    $("#videoMobile").addClass("fade-in");
    var vid = document.getElementById("videoMobile");
    vid.play();
    vid.setAttribute("playsinline", "");
  } else if ($(window).scrollTop() <= 200 && mobile) {
    $("#explain .container").show();
    $("#videoMobile").removeClass("fade-in");
    var vid = document.getElementById("videoMobile");
    vid.pause();
  }

  var elm = document.getElementById("parahraphsSection");
  var elm2 = document.getElementById("beforeyougo");
  if ($(window).scrollTop() >= 1500 && $(window).scrollTop() <= 1520) {
    if (isOnScreen(elm)) {
      if (slideIndex == 1) {
        label = "enoughisenoughtwo";
      } else if (slideIndex == 4 || slideIndex == 4) {
        label = "choosewhereyouwanttogotwo";
      } else {
        label = "fromrootlesstorootedtwo";
      }
      var str = $("." + label + " h2").text();
      $("." + label + " h2").text("");
      var h2 = "<h2>" + str.split("").join("</h2><h2>") + "</h2>";
      $(h2)
        .hide()
        .appendTo("." + label)
        .each(function (i) {
          $(this)
            .delay(70 * i)
            .css({
              display: "inline",
              opacity: 0,
            })
            .animate(
              {
                opacity: 1,
              },
              100
            );
        });
    }
  } else if ($(window).scrollTop() >= 13000 && $(window).scrollTop() <= 13200) {
    if (isOnScreen(elm2)) {
      $(".yellowflowerleft").addClass("flier");
    }
  }
}
function isOnScreen(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function goToSection(section) {
  var my_element = document.getElementById(section);

  my_element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  if (section == "main") {
    $("#explain .container").hide();
    $("#video").addClass("fade-in");
    var vid = document.getElementById("video");
    vid.play();
  }
}
