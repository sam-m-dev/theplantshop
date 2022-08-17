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

