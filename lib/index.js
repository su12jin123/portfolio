$(function () {
        $(".intro .inner .right .intro_item02 .in div").mouseenter(function () {
          $(".intro .inner .right .intro_item02 .in div").css({
            "background-color": "#D9D9D9",
          });
          $(this).css({
            "background-color": "#406126",
          });
          $(this).addClass("on");
        });
        $(".intro .inner .right .intro_item02 .in_list .in").mouseenter(
          function () {
            $(".intro .inner .right .intro_item02 .text").removeClass("on");
            $(".intro .inner .right .intro_item02 .text")
              .eq($(this).index())
              .addClass("on");
          }
        );

        var myFullpage = new fullpage("#fullpage", {
          slidesNavigation: true,
          responsiveWidth: 1024,
          autoScrolling: true,
          showActiveTooltip: true,
          navigationTooltips: ["SHINSUJIN", "ABOUTME", "PROJECT"],
          navigationPosition: "right",
          navigation: true,
          anchors: ["sec1", "sec2", "sec3"],
        });

        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 40,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.7,
              spaceBetween: 50,
            },
          },
        });

        $(".swiper-slide").mouseenter(function(){
          swiper.autoplay.stop();
        });
        $(".swiper-slide").mouseleave(function(){
          swiper.autoplay.start();
        });

        $(".adver .inner .item").mouseenter(function () {
          $(".adver .inner .item").removeClass("on");
          $(this).addClass("on");
        });

        $(".adver .inner .item").mouseleave(function () {
          $(".adver .inner .item").removeClass("on");
        });

        $(".adver .inner .item").click(function () {
          $(".section .content").addClass("on");
          $(".section .content .inner .poster .item").removeClass("on");
          $(".section .content .inner > .item").removeClass("on");
          $(".section .content .inner > .item")
            .eq($(this).index())
            .addClass("on");
        });

        $(".section .content").click(function () {
          $(".section .content.on").removeClass("on");
        });

        $(".edit .inner .item").click(function () {
          $(".section .content").addClass("on");
          $(".section .content .inner > .item").removeClass("on");
          $(".section .content .inner .poster .item").removeClass("on");
          $(".section .content .inner .poster .item")
            .eq($(this).index())
            .addClass("on");
        });

        $(window).scroll(function () {
          let height = $(window).scrollTop();
          let item1Top = $(
            ".fp-scroll-mac .fp-viewing-sec3 .project .inner .item1"
          ).offset().top;
          let item2Top = $(
            ".fp-scroll-mac .fp-viewing-sec3 .project .inner .item2"
          ).offset().top;
          console.log(height);
          console.log(item1Top);
          console.log(item2Top);
        });
      });

