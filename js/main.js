window.addEventListener("load",() => {
    //p : portfolio 종류 
    let currSlide = 1;
    const slide = (p, btn) => {
        const slider = document.querySelector(`#portfolioModal${p} .slider`);
        let slideWidth = slider.clientWidth;

        // const prevBtn = document.querySelector(`#portfolioModal${p} .slide_prev_button`);
        // const nextBtn = document.querySelector(`#portfolioModal${p} .slide_next_button`);

        const slideItems = document.querySelectorAll(`#portfolioModal${p} .slider li`);
        const maxSlide = slideItems.length;
        
        if (btn == "next") {
            currSlide++;
            // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
            if (currSlide <= maxSlide) {
                const offset = slideWidth * (currSlide - 1);
                slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
                });
            } else {
                currSlide--;
            }  
        } else if(btn == "prev"){
            currSlide--;
            // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
            if (currSlide > 0) {
                const offset = slideWidth * (currSlide - 1);
                slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
                });
            } else {
                currSlide++;
            }
        }
        // nextBtn.addEventListener("click", () => {
        // currSlide++;
        // // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
        // if (currSlide <= maxSlide) {
        //     const offset = slideWidth * (currSlide - 1);
        //     slideItems.forEach((i) => {
        //     i.setAttribute("style", `left: ${-offset}px`);
        //     });
        // } else {
        //     currSlide--;
        // }
        // });

        // prevBtn.addEventListener("click", () => {
        // currSlide--;
        // // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
        // if (currSlide > 0) {
        //     const offset = slideWidth * (currSlide - 1);
        //     slideItems.forEach((i) => {
        //     i.setAttribute("style", `left: ${-offset}px`);
        //     });
        // } else {
        //     currSlide++;
        // }
        // });
        // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
        window.addEventListener("resize", () => {
            slideWidth = slide.clientWidth;
        });
    };

    const prevBtn = document.querySelector(".slide_prev_button");
    const nextBtn = document.querySelector(".slide_next_button");

    nextBtn.addEventListener("click", () => {
        slide(1, "next");
    });

    prevBtn.addEventListener("click", () => {
        slide(1, "prev");
    });
    
  

    // const slide = (p,e)=>{
    //     const slider = document.querySelector(`#section${p} .slider`);
    //     const sliderLis = slider.querySelectorAll("li");
    //     const liWidth = sliderLis[0].clientWidth; //1개 width
    //     const lisWidth = liWidth * sliderLis.length
    //     slider.style.width = `${lisWidth}px`;

    //     let currentIdx = sliderIdx[`page${p}`];
    //     let xpos = sliderXpos[`page${p}`];
    //     if (e.deltaY > 0) {
    //         if (currentIdx < sliderLis.length - 1) {
    //             xpos -= liWidth;
    //             slider.style.transform = `translateX(${xpos}px)`;
    //             currentIdx++;
    //         } 
    //     } else if(e.deltaY < 0) {
    //         if (currentIdx > 0) {
    //             xpos += liWidth;
    //             slider.style.transform = `translateX(${xpos}px)`;
    //             currentIdx--;
    //         } 
    //     }
    //     sliderIdx[`page${p}`] = currentIdx;
    //     sliderXpos[`page${p}`] = xpos;

    //     return;
    // }

});