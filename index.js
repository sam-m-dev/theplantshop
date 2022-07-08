$(window).on('load', function (e) {

    // $('.workshop-overlay').empty();
    function bannerTimeout() {
        var element = document.getElementById('#heroText');
        // element.style.display = "block";
        // setTimeout(function () {
        $('#heroText').css("visibility", "visible");
        // element.style.display = "none";
        // }, 10000); 
        // $('#heroText').css("visibility", "visible");
        if ($('#heroText').is(":visible")) {
            setTimeout(function () {
                $('#heroText').css("visibility", "hidden");
                // element.style.display = "none";
            }, 10000); // 1000ms = 1 second
        }

    }
    // bannerTimeout() ;
    const images = document.querySelectorAll('.homeImage-text');
    const config = {

        threshold: [0]
    };

    observer = new IntersectionObserver((entries) => {
        // console.log(images);
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('move');

                console.log(entry.target);
                $('#shop').css("visibility", "visible")
                //  $('#shop').append('<a href="/about.html">Our<br> Shop</a>');
                $('#team').css("visibility", "visible");
                //entry.target.append("<p>Test</p>");
                console.log("moved")
                observer.unobserve(entry.target);
            } else {
                console.log('out of view');
            }
        });
    }, config);

    images.forEach(image => {
        console.log(image);
        observer.observe(image);
    });

    // 
    const serviceImage = document.querySelectorAll('.banner-text-services');

    observer = new IntersectionObserver((entries) => {
        // console.log(images);
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('move');
                console.log("service reached")
            }
        });
    });

    serviceImage.forEach(image => {
        observer.observe(image);
    });

    //new Glide('.glide').mount()
    var glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 'center',
        animationDuration: 3000,
        breakpoints: {
            480: {
                //  gap: 15,
                // peek: 75,
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
    })




    function workshopDetails(workshopId) {
        $('.reset').css("display", "block");
        switch (workshopId) {
            case 1:
                // alert("success"+workshopId);
                console.log('test')
                $('.workshop-card-text').html('content 1');
                $('.workshop-card-title').html('title1');

                break;
            case 2:
                //  alert("success" + workshopId);
                $('.workshop-card-text').html('content 2');
                $('.workshop-card-title').html('title2');
                break;

            case 3:
                //  alert("success" + workshopId);
                $('.workshop-card-text').html('content 3');
                $('.workshop-card-title').html('title 3');
                break;

            case 4:
                // alert("success" + workshopId);
                $('.workshop-card-text').html('content 4');
                $('.workshop-card-title').html('title 4');

                break;

            case 5:
                // alert("success" + workshopId);
                //  $('.workshop-overlay').empty();
                $('.workshop-card-text').empty();
                $('.workshop-card-title').html('Workshops');
                $('.reset').css("display", "none");
                break;



            default:
                // alert(workshopId);
                $('.workshop-img').html("<p>Hello World</p>");
            // code block
        }
        //   showButton();
        //  $('.workshop-img').css("background-color", "red")

    }
    $('.workshop-item').click(function () {
        $('.reset').css("display", "block");
        //  alert("test");
        var selectedWorkshop = parseInt(this.id);
        workshopDetails(selectedWorkshop);

    });

    // showButton();
    // function showButton(){
    //     if ($('.workshop-overlay').is(':empty')) {


    //     }else{
    //         $('.reset').show();
    //     }
    // }


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


});





// $(document).ready(function () {
//     console.log("ready!");
//     $('.glide-wrapper').css("display", "block");
// });

