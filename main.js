window.addEventListener("load",() => {
    // home page event
    const canvas = document.querySelector("#main-canvas");
    const mouse = document.querySelector(".mouse");
    const inner_width = window.innerWidth;
    const inner_height = window.innerHeight;

    canvas.width = inner_width * 0.9;
    canvas.height = inner_height * 0.9;
    const ctx = canvas.getContext("2d");
    let raf;
    let stat = 0;
    const ball = {
    x: (canvas.width / 2) * 0.75 ,
    y: 100,
    vx: 3,
    vy: 5,
    radius: 25,
    color: "white",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    },
    };
    
    const ball2 = {
    x: (canvas.width / 2) * 0.9,
    y: 100,
    vx: 1.3,
    vy: 5,
    radius: 25,
    color: "white",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    },
    };

    function draw() {
        ball.draw();
        if(ball.y > 350) {
            stat = 1;
            ball.x -=ball.vx;
            ball.y =350;
        }
        else if(ball.y > 300) {
            if(stat == 0) {
                ball.x -=ball.vx;
                ball.y += ball.vy;    
                ball.vy *= 0.9;
            }else if (stat == 1) {
                ball.x -=ball.vx;
                ball.y -= ball.vy;
                ball.vy *= 1.1;
                
            }
            
        }
        else if(ball.y <= 300) {
            ball.y += ball.vy;    
        } 

        if(ball.y < 300 && stat == 1) {
            window.cancelAnimationFrame(raf);
            stat = 0;
            draw_w();
        } else{
            raf = window.requestAnimationFrame(draw);
        }
    }
    let cnt = 0;
    function draw_w() {
        ball2.draw();
        if(ball2.y > 350) {
            stat = 1;
            ball2.x +=ball2.vx;
            ball2.y =350;
        }
        else if(ball2.y <= 100 && stat == 1) {
            stat = 0;
            ball2.x +=ball2.vx;
            ball2.y = 100;
            cnt++;
        }
        else {
            if (stat == 0) {
                ball2.x += ball2.vx;
                ball2.y += ball2.vy;    
            } else {
                ball2.x += ball2.vx;
                ball2.y -= ball2.vy;
            }
            
        } 

        if(cnt == 2) {
            window.cancelAnimationFrame(raf);
            mouse.style.display = "block";
        } else{
            raf = window.requestAnimationFrame(draw_w);
        }
    }
    raf = window.requestAnimationFrame(draw);
    // home page event end
    

    //mouse wheel event start
    document.addEventListener("wheel", e => {
        e.preventDefault();
    }, {passive:false})

    const vHtml = $("html");
    let page = 1;
    //onload시 position top 0 으로 
    vHtml.animate({scrollTop : 0},10);
    
    let sliderIdx = {"page3":0, "page4":0};//slider 현재 idx
    let sliderXpos = {"page3":0, "page4":0};//slider x aixs

    const sections = document.querySelectorAll(".section");
    sections.forEach((e) => {
       e.addEventListener("wheel", (e)=>{
        //animate 실행 중이면 return
        if(vHtml.is(":animated")) return;
        if(e.deltaY > 0) {
            if(page == 3 || page == 4) {
                const slider = document.querySelector(`#section${page} .slider`);
                const sliderLis = slider.querySelectorAll("li");
                const nowIdx = sliderIdx[`page${page}`];
                if (nowIdx < sliderLis.length - 1) {
                    slide(page,e);
                    return;       
                }
            }
            if(page < 4) {
                page++;
            }
            
        } else if(e.deltaY < 0) {
            if(page == 3 || page == 4) {
                const nowIdx = sliderIdx[`page${page}`];
                if (nowIdx > 0) {
                    slide(page,e);
                    return;
                }
            }
            if(page == 1) return;
            page--;
        }
        const posTop =(page-1) * window.innerHeight;
        vHtml.animate({scrollTop : posTop});
    })
    })

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
