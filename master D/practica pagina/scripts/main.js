window.addEventListener('load', event => {
    console.log("Site functionality ready");

    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#download"
    })
        .on("enter leave", function (e) {

            var icon = document.querySelector('#download-icon');
            var title = document.querySelector('#download-title');
            var text = document.querySelector('#download-text');
            var buttonsDownload = document.querySelector('#download-buttons');

            TweenMax.to(icon, .8, { css: { opacity:1}, delay:.8 });
            TweenMax.to(title, .8, { css: { opacity:1}, delay:1 });
            TweenMax.to(text, .8, { css: { opacity:1}, delay:1.2 });
            TweenMax.to(buttonsDownload, .8, { css: { opacity:1}, delay:1.4 });
                
        })
        //.addIndicators({name: "timeline"}) // add indicators (requires plugin)
        .addTo(controller);

    });
       
