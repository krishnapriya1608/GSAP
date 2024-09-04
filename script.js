gsap.from(`.top`,{
    opacity:0,
    delay:1,
    duration:3,
    display:1.5,
    x:20
})
const navbar=document.querySelector(`.navbar`)
gsap.from(navbar.children,{
    opacity:0,
    x:20,
    duration:3,
    display:1.5,
    stagger:{
       amount:1
    }
})
gsap.utils.toArray(`.til`).forEach(til=>{
gsap.fromTo(til,{
    letterspacing:`10px`,
    opacity:0,
    x:300,
    shewX:65
},{
    letterspacing:`0`,
    opacity:1,
    x:0,
    shewX:0,
    duration:1,
    delay:.5,
    scrollTrigger:til

}
)
})
gsap.utils.toArray(`.tit`).forEach(tit=>{
    gsap.fromTo(tit,{
        letterspacing:`10px`,
        opacity:0,
        x:300,
        shewX:65
    },{
        letterspacing:`0`,
        opacity:1,
        x:0,
        shewX:0,
        duration:1.5,
        delay:2,
        scrollTrigger:tit
    
    }
    )
    })
    gsap.utils.toArray(`.btn`).forEach(btn=>{
        gsap.fromTo(btn,{
            letterspacing:`10px`,
            opacity:0,
            x:300,
            shewX:65
        },{
            letterspacing:`0`,
            opacity:1,
            x:0,
            shewX:0,
            duration:2,
            delay:.2,
            scrollTrigger:btn
        
        }
        )
        })
        
        gsap.fromTo(`.image2`,{
            scale:2,
            opacity:0,
            skewY:30
        },{
            scale:1,
            opacity:1,
            skewY:0,
            duration:3,
            delay:1,
            scrollTrigger:`.image2`

        })
        gsap.utils.toArray(`.til3`).forEach(til3=>{
            gsap.fromTo(til3,{
                letterspacing:`10px`,
                opacity:0,
                x:300,
                shewX:65
            },{
                letterspacing:`0`,
                opacity:1,
                x:0,
                shewX:0,
                duration:2,
                delay:1,
                ScrollTrigger:til3
                
            }
            )
            })
            document.addEventListener("DOMContentLoaded", function () {
                // GSAP with ScrollTrigger
                gsap.registerPlugin(ScrollTrigger);
            
                // Select all text elements (excluding navbar)
                gsap.utils.toArray("h2, h4, h5, p, button").forEach((element) => {
                    gsap.from(element, {
                        opacity: 0,
                        y: 50,
                        duration: 1,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 80%", // start when element is 80% from the top of the viewport
                            toggleActions: "play none none none"
                        }
                    });
                });
            
                // Select all image elements (excluding navbar)
                gsap.utils.toArray(".img1,.img2,.img3,.img4,.img5").forEach((image) => {
                    gsap.from(image, {
                        opacity: 0,
                        scale: 0.9,
                        duration: 2,
                        scrollTrigger: {
                            trigger: image,
                            start: "top 80%", // start when image is 80% from the top of the viewport
                            toggleActions: "play none none none"
                        }
                    });
                });
            
                gsap.to(".marquee__content", {
                    xPercent: -100, // Moves the content from right to left
                    ease: "none", // Keeps the scrolling speed consistent
                    duration: 45, // Duration for one complete scroll cycle
                    repeat: -1, // Infinite loop
                  });
            });
            