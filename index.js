$(window).on('load', function (e) {
  


    var glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 'center',
        animationDuration: 1500,
        breakpoints: {
            480: {
                perView: 1
            },
            768: {
                perView: 2
            },
            1360: {
                perView: 3
            },
            1600: {
                perView: 4
            },
            1960: {
                perView: 5
            }
        }
    });

    function mountSlider() {
        glide.mount();
        $('.glide').addClass('activeSlider');
    }
    mountSlider();



    function workshopDetails(workshopId) {
        $('.reset').css("display", "block");
        switch (workshopId) {
            case 1:
      
                $('.workshop-card-text').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');;
                $('.workshop-card-title').html('Repot');

                break;
            case 2:

                $('.workshop-card-text').html('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
                $('.workshop-card-title').html('Propagate');
                break;

            case 3:

                $('.workshop-card-text').html('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ');
                $('.workshop-card-title').html('Learn');
                break;

            case 4:

                $('.workshop-card-text').html('Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
                $('.workshop-card-title').html('Other');

                break;

            case 5:
                $('.workshop-card').css("display", "none");
                $('.workshop-placeholder').css("display", "flex");
                $('.reset').css("display", "none");
                break;



            default:

              //  $('.workshop-img').html("<p>Hello World</p>");

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

