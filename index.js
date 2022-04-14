$(window).on('load', function (e) {

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
})