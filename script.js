const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function touch_animation(){
    var touch=document.querySelector("#one").addEventListener("mouseenter",function(){
        gsap.to("#links #one",{
           opacity:0.5,
           duration:0,
        })
    })
    var touch=document.querySelector("#one").addEventListener("mouseleave",function(){
        gsap.to("#links #one",{
           scale:1,
           opacity:1,
        })
    })
    var touch=document.querySelector("#two").addEventListener("mouseenter",function(){
        gsap.to("#links #two",{
           opacity:0.5,
           duration:0,})
    })
    var touch=document.querySelector("#two").addEventListener("mouseleave",function(){
        gsap.to("#links #two",{
           scale:1,
           opacity:1,
        })
    })
    var touch=document.querySelector("#three").addEventListener("mouseenter",function(){
        gsap.to("#links #three",{
           opacity:0.5,
           duration:0,})
    })
    var touch=document.querySelector("#three").addEventListener("mouseleave",function(){
        gsap.to("#links #three",{
           scale:1,
           opacity:1,
        })
    })
    var touch=document.querySelector("#four").addEventListener("mouseenter",function(){
        gsap.to("#icons #four",{
           opacity:0.5,
           duration:0,})
    })
    var touch=document.querySelector("#four").addEventListener("mouseleave",function(){
        gsap.to("#icons #four",{
           scale:1,
           opacity:1,
        })
    })
    var touch=document.querySelector("#five").addEventListener("mouseenter",function(){
        gsap.to("#icons #five",{
           opacity:0.5,
           duration:0,})
    })
    var touch=document.querySelector("#five").addEventListener("mouseleave",function(){
        gsap.to("#icons #five",{
           scale:1,
           opacity:1,
        })
    })
}
touch_animation();
function videocon_animation(){
    var videocon = document.querySelector("#video_container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            opacity:1,
            scale:1
        })
    })
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            opacity:0,
            scale:0
        })
    })
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left:dets.x-90,
            top:dets.y-90
        })
    })
}
videocon_animation();

function loading_animation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#video_container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
    })
}
loading_animation();


// function child_animation(){

    // document.querySelector("#child1").addEventListener("mousenter",function(){
    //     gsap.to("#cursor",{
    //      transform: 'translate(-50%,-50%) scale(1) ',
    //      duration:0
    //     })
    //  })
    //  document.querySelector("#child1").addEventListener("mouseleave",function(){
    //      gsap.to("#cursor",{
    //       transform: 'translate(-50%,-50%) scale(0) ',
    //      })
    //   })
//       document.querySelector("#child2").addEventListener("mouseenter",function(){
//          gsap.to("#cursor",{
//           transform: 'translate(-50%,-50%) scale(1)  ',
//           duration:0
//          })
//       })
//       document.querySelector("#child2").addEventListener("mouseleave",function(){
//           gsap.to("#cursor",{
//            transform: 'translate(-50%,-50%) scale(0) ',
//           })
//        })
//        document.querySelector("#child3").addEventListener("mouseenter",function(){
//          gsap.to("#cursor",{
//           transform: 'translate(-50%,-50%) scale(1) ',
//           duration:0
//          })
//       })
//       document.querySelector("#child3").addEventListener("mouseleave",function(){
//           gsap.to("#cursor",{
//            transform: 'translate(-50%,-50%) scale(0) ',
//           })
//        })
//        document.querySelector("#child4").addEventListener("mouseenter",function(){
//          gsap.to("#cursor",{
//           transform: 'translate(-50%,-50%) scale(1) ',
//           duration:0
//          })
//       })
//       document.querySelector("#child4").addEventListener("mouseleave",function(){
//           gsap.to("#cursor",{
//            transform: 'translate(-50%,-50%) scale(0) ',
//           })
//        })
// }
// child_animation();

