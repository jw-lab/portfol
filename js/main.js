window.addEventListener("load",() => {
    //슬라이드 버튼
    const prevBtns = document.querySelectorAll(".slide-prev-button");
    const nextBtns = document.querySelectorAll(".slide-next-button");
    prevBtns.forEach((e)=>{
        e.addEventListener("click", () => {
            const btnKindId = e.parentNode.id;
            const btnKind = btnKindId.slice(-1);
            slide(btnKind, "prev");
        });
    })
    nextBtns.forEach((e)=>{
        e.addEventListener("click", () => {
            const btnKindId = e.parentNode.id;
            const btnKind = btnKindId.slice(-1);
            slide(btnKind, "next");
        });
    })
    //현재 portfolio slide 
    let currSlide = 1;
    //p : portfolio 종류 , btn : prev, next
    const slide = (p, btn) => {
        const slider = document.querySelector(`#portfolioModal${p} .slider`);
        let slideWidth = slider.clientWidth;

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
        // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
        window.addEventListener("resize", () => {
            slideWidth = slide.clientWidth;
        });
    };
        
    //portfolio 클릭 시 초기화
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach((e)=>{
        e.addEventListener("click", () => {
            //현재 슬라이드 초기화
            currSlide = 1;
            //각 모달 슬라이드 offset 0으로 리셋
            const slideItems = document.querySelectorAll(`.slider li`);
            const offset = 0;
                slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            
        });
    })
});