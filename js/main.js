window.addEventListener("load",() => {
    // const vHtml = $("html");
    // //onload시 position top 0 으로 
    // vHtml.animate({scrollTop : 0},10);
    
    // //mouse wheel event start
    // document.addEventListener("wheel", e => {
    //     e.preventDefault();
    //     //animate 실행 중이면 return
    //     if(vHtml.is(":animated")) return;

    //     // get Y-axis value of each div:
    //     var div1y = $('#section1').offset().top,
    //         div2y = $('#section2').offset().top,
    //         div3y = $('#section3').offset().top,
    //         div4y = $('#section4').offset().top,
    //         div5y = $('#section5').offset().top,
    //         // get window's current scroll position:
    //         lastScrollTop = $(this).scrollTop(),
    //         // for getting user's scroll direction:
    //         scrollDirection,
    //         // for determining the previous and next divs to scroll to, based on lastScrollTop:
    //         targetUp,
    //         targetDown,
    //         // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
    //         targetElement;

    //         // get scroll direction:
    //         if ( e.deltaY > 0 ) {
    //         scrollDirection = 'up';
    //         } else if ( e.deltaY <= 0 ) {
    //         scrollDirection = 'down';
    //         } 

    //     // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
    //     if (lastScrollTop === div1y) {
    //     targetUp = $('#section1');
    //     targetDown = $('#section2');
    //     } else if (lastScrollTop === div2y) {
    //     targetUp = $('#section1');
    //     targetDown = $('#section3');
    //     } else if (lastScrollTop === div3y) {
    //     targetUp = $('#section2');
    //     targetDown = $('#section4');
    //     } else if (lastScrollTop === div4y) {
    //     targetUp = $('#section3');
    //     targetDown = $('#section5');
    //     } else if (lastScrollTop === div5y) {
    //     targetUp = $('#section4');
    //     targetDown = $('#section6');
    //     } else if (lastScrollTop === div6y) {
    //     targetUp = $('#section5');
    //     targetDown = $('#section6');
    //     } else if (lastScrollTop < div2y) {
    //     targetUp = $('#section1');
    //     targetDown = $('#section2');
    //     } else if (lastScrollTop < div3y) {
    //     targetUp = $('#section2');
    //     targetDown = $('#section3');
    //     } else if (lastScrollTop < div4y) {
    //     targetUp = $('#section3');
    //     targetDown = $('#section4');
    //     } else if (lastScrollTop < div5y) {
    //     targetUp = $('#section4');
    //     targetDown = $('#section5');
    //     } else if (lastScrollTop < div6y) {
    //     targetUp = $('#section5');
    //     targetDown = $('#section6');
    //     } else if (lastScrollTop > div6y) {
    //     targetUp = $('#section6');
    //     targetDown = $('#section6');
    //     } // end else if

    //     // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
    //     if (scrollDirection === 'down') {
    //     targetElement = targetDown;
    //     } else if (scrollDirection === 'up') {
    //     targetElement = targetUp;
    //     } // end else if

    //     const posTop =(page-1) * window.innerHeight;
    //     vHtml.animate({scrollTop : posTop});

    // }, {passive:false})


    const slide = (p,e)=>{
        const slider = document.querySelector(`#section${p} .slider`);
        const sliderLis = slider.querySelectorAll("li");
        const liWidth = sliderLis[0].clientWidth; //1개 width
        const lisWidth = liWidth * sliderLis.length
        slider.style.width = `${lisWidth}px`;

        let currentIdx = sliderIdx[`page${p}`];
        let xpos = sliderXpos[`page${p}`];
        if (e.deltaY > 0) {
            if (currentIdx < sliderLis.length - 1) {
                xpos -= liWidth;
                slider.style.transform = `translateX(${xpos}px)`;
                currentIdx++;
            } 
        } else if(e.deltaY < 0) {
            if (currentIdx > 0) {
                xpos += liWidth;
                slider.style.transform = `translateX(${xpos}px)`;
                currentIdx--;
            } 
        }
        sliderIdx[`page${p}`] = currentIdx;
        sliderXpos[`page${p}`] = xpos;

        return;
    }

});
