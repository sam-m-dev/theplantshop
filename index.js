$(window).on('load', function (e) {
    new Glide(".glide").mount();

    // function bannerTimeout() {
    //     var element = document.getElementById('#heroText');

    //     $('#heroText').css("visibility", "visible");

    //     if ($('#heroText').is(":visible")) {
    //         setTimeout(function () {
    //             $('#heroText').css("visibility", "hidden");

    //         }, 10000);
    //     }

    // }
    // // bannerTimeout() ;
    // const images = document.querySelectorAll('.homeImage-text');
    // const config = {

    //     threshold: [0]
    // };

    // observer = new IntersectionObserver((entries) => {
    //     // console.log(images);
    //     entries.forEach(entry => {
    //         if (entry.intersectionRatio > 0) {
    //             entry.target.classList.add('move');

    //             console.log(entry.target);
    //             $('#shop').css("visibility", "visible")
    //             //  $('#shop').append('<a href="/about.html">Our<br> Shop</a>');
    //             $('#team').css("visibility", "visible");
    //             //entry.target.append("<p>Test</p>");
    //             console.log("moved")
    //             observer.unobserve(entry.target);
    //         } else {
    //             console.log('out of view');
    //         }
    //     });
    // }, config);

    // images.forEach(image => {
    //     console.log(image);
    //     observer.observe(image);
    // });

    // // 
    // const serviceImage = document.querySelectorAll('.banner-text-services');

    // observer = new IntersectionObserver((entries) => {
    //     // console.log(images);
    //     entries.forEach(entry => {
    //         if (entry.intersectionRatio > 0) {
    //             entry.target.classList.add('move');
    //             console.log("service reached")
    //         }
    //     });
    // });

    // serviceImage.forEach(image => {
    //     observer.observe(image);
    // });


    // var glide = new Glide('.glide', {
    //     type: 'carousel',
    //     startAt: 0,
    //     perView: 1,
    //     focusAt: 'center',
    //     animationDuration: 1500,
    //     breakpoints: {
    //         480: {
    //             //  gap: 15,
    //             // peek: 75,
    //             perView: 1
    //         },
    //         768: {
    //             perView: 2
    //         },
    //         1360: {
    //             perView: 3
    //         },
    //         1600: {
    //             perView: 4
    //         },
    //         1960: {
    //             perView: 5
    //         }
    //     }
    // });




    function workshopDetails(workshopId) {
        $('.reset').css("display", "block");
        switch (workshopId) {
            case 1:
                //console.log('test')
                $('.workshop-card-text').html('content 1');
                $('.workshop-card-title').html('title1');

                break;
            case 2:

                $('.workshop-card-text').html('content 2');
                $('.workshop-card-title').html('title2');
                break;

            case 3:

                $('.workshop-card-text').html('content 3');
                $('.workshop-card-title').html('title 3');
                break;

            case 4:

                $('.workshop-card-text').html('content 4');
                $('.workshop-card-title').html('title 4');

                break;

            case 5:
                $('.workshop-card').css("display", "none");
                $('.workshop-placeholder').css("display", "flex");
                $('.reset').css("display", "none");
                break;



            default:

                $('.workshop-img').html("<p>Hello World</p>");

        }


    }

    //display reset button and trigger workshopdetails function
    $('.workshop-item').click(function () {
        $('.reset').css("display", "block");
        $('.workshop-placeholder').css("display", "none")
        $('.workshop-card').css("display", "flex")

        var selectedWorkshop = parseInt(this.id);
        workshopDetails(selectedWorkshop);

    });




    $('.reset').click(function () {

        //     alert("success yay");
        //     //   $('.workshopDetails').empty();

        var resetWorkshop = parseInt(this.id);
        workshopDetails(resetWorkshop);


    });

    function mountSlider() {
        glide.mount();
        $('.glide').addClass('activeSlider');
    }
    mountSlider();




    // const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
    // firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
    //     // do something...
    //     console.log('test');
    //     console.log(this.firstScrollSpyEl);
    // })

});





// $(document).ready(function () {



//     $(window).on('activate.bs.scrollspy', function (e) {
//         var activate;
//         var activeSectionId;
//         var activeSection;
//         var dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
//         // console.log('test' + dataSpyList.values());
//         for (const value of dataSpyList.values()) {
//             //   console.log(value);
//             activeSection = bootstrap.ScrollSpy.getInstance(value);
//             activeSectionId = activeSection._activeTarget;

//         }
//         console.log("id" + activeSectionId);
//         activate = document.getElementById(activeSectionId);
     

//         let result = activeSectionId.toString();
//         let stringlength = result.length;
//         let part = result.slice(1, stringlength);
     

//         console.log("result" + document.getElementById(part).className);

//     })


// });

