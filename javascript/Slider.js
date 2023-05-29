
$(document).ready(function () {
  $('.customer_logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
    //   autoplaySpeed: 1000,
      autoplaySpeed: 200,
      arrows: false,
      dots: false,
      pauseOnHover: true,

      responsive: [
          {
              breakpoint: 500,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 1420,
              settings: {
                  slidesToShow: 3
              }
          },
      ]
  });
});
// $(document).ready(function () {
//   $('.after_header_big_product_slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1000,
//       arrows: false,
//       dots: false,
//       pauseOnHover: true,

//       responsive: [
//           {
//               breakpoint: 500,
//               settings: {
//                   slidesToShow: 2
//               }
//           },
//           {
//               breakpoint: 991,
//               settings: {
//                   slidesToShow: 2
//               }
//           },
//           {
//               breakpoint: 768,
//               settings: {
//                   slidesToShow: 2
//               }
//           },
//           {
//               breakpoint: 1420,
//               settings: {
//                   slidesToShow: 3
//               }
//           },
//       ]
//   });
// });



// search
// $(document).ready(function () {
          //     $(".search_area ").slideUp({
          //         height: "0px",
          //         background: "rgba(255, 255, 255, 0.814)",
          //         border: "1px solid white"
          //     }, 10000);

          //     $(".search-icon").mouseenter(function () {
          //         $(".search_area ").slideDown({
          //             height: "6.5vw",
          //             background: "rgba(255, 255, 255, 0.814)",
          //             border: "1px solid white"
          //         }, 10000);
          //     })

          // })





