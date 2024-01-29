

document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".transparent-header");
    var btn = document.querySelector(".tag");
    var h1 = document.querySelector("h1");
    var l1 = document.querySelectorAll("li");
    var lastScrollTop = 0;
    var scrollThreshold = 20;
  
    window.addEventListener("scroll", function () {
        var scrollTop = window.scrollY;
  
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling down more than 200px
            if (!header.classList.contains("visible")) {
                header.style.transition = "transform 0.3s";
                header.style.transform = "translateY(-100%)"; // Slide up
                setTimeout(function () {
                    header.classList.add("visible");
                    btn.classList.add("tag1");
                    h1.classList.add("h1");
                    l1.forEach(function (l1) {
                        l1.classList.add("l1");
                    });
                    header.style.transform = "translateY(0)"; // Slide down
                }, 200);
            }
        } else if (scrollTop <= scrollThreshold) {
            // Scrolling up and within 200px
            if (header.classList.contains("visible")) {
                header.style.transition = "transform 0.3s";
                header.style.transform = "translateY(-100%)"; // Slide up
                header.classList.remove("visible");
                btn.classList.remove("tag1");
                h1.classList.remove("h1");
                l1.forEach(function (l1) {
                    l1.classList.remove("l1");
                });
                setTimeout(function () {
                    header.style.transform = "translateY(0)"; // Slide down
                }, 200);
            } 
        }
  
        lastScrollTop = scrollTop;
    });
});
