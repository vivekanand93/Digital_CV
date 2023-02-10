$(document).ready(function () {
  $("#profile-rpl").ripples({
    resolution: 512,
    dropRadius: 10,
  });

  const bars = document.querySelectorAll(".progressBar");
  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
    // console.log(percentage);
  });
  // counter

  const counters = document.querySelectorAll(".counter");
  // console.log(counters);
  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let target = +counter.dataset.count;
      let step = target / 100;
      let counted = function () {
        let displayedCount = +counter.innerText;
        if (displayedCount < target) {
          counter.innerText = Math.ceil(displayedCount + step);
          // console.log(displayedCount);
          setTimeout(counted, 1);
        } else {
          counter.innerText = target;
        }
      };
      counted();
    });
  }

  let counterSection = document.querySelector(".counterWrap");
  let options = {
    rootMargin: "0px 0px -200px 0px",
  };
  let done = 0;

  const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && done !== 1) {
      done = 1;
      runCounter();
    }
  }, options);
  sectionObserver.observe(counterSection);

  // image filter
  var $wrapper = $(".portfolioWrapper");

  // initialize isotope

  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });
  let links = document.querySelectorAll(".tabs a");
  // console.log(links);
  links.forEach((link) => {
    let selector = link.dataset.filter;
    console.log(selector);
    link.addEventListener("click", function (e) {
      e.preventDefault();
      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOptions: {
          duration: 750,
          easing: "linear",
        },
      });
      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  // magnific popup

  $(".magnific").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
    },
  });

  // slider creating

  $('.slider').slick({
    arrows: false,
    autoplay : true
  });
});
