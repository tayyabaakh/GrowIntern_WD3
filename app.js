let  movies=[
    {
    name:"loki",
    des:
    " The God of Mischief is captured by the Time Variance Authority after disrupting the timeline. Join Loki on a thrilling journey through the multiverse as he faces chaos, danger, and his true self. Stream now on Disney+ Hotstar!",
    image:"assets/images/slider 1.PNG"
},
{
    name:"falcon and the winter solider",
    des:
    " Sam Wilson and Bucky Barnes team up to tackle global threats while grappling with the legacy of Captain America. Stream now on Disney+ Hotstar!",
    image:"assets/images/slider 2.PNG"
},
{
    name:"wanda vision",
    des:
    "Wanda Maximoff and Vision live a seemingly perfect suburban life, but strange events reveal a deeper mystery. Blending classic sitcom styles with Marvel's supernatural elements, the series explores grief, reality, and identity. Stream now on Disney+ Hotstar!",
    image:"assets/images/slider 3.PNG"
},
{
    name:"raya and the last dragon ",
    des:
    "In a mystical land, young warrior Raya embarks on a quest to find the last dragon and save her kingdom from an ancient evil. Filled with adventure, heart, and stunning animation, this film is a tale of trust, courage, and unity. Stream now on Disney+ Hotstar!",
    image:"assets/images/slider 4.PNG"
},
{
    name:"luca",
    des:
    " Set in a beautiful Italian seaside town, this heartwarming film follows a young sea monster named Luca as he explores the human world, forming an unforgettable friendship. A story of self-discovery, acceptance, and the magic of friendship. Stream now on Disney+ Hotstar!",
    image:"assets/images/slider 5.PNG"
}];

const crousel=document.querySelector('.slides');
let slider=[];
let slideIndex=0; // index of each slide

 const createslide = ()=>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }
    // DOM elements
    let slide=document.createElement('div');
    var imgelements=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    // attaching all elements
    imgelements.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgelements);
    crousel.appendChild(slide);
    slide.appendChild(content);

    // setting up images
    imgelements.src=movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className="slider";
    content.className="slide_content"
    h1.className="movie_title";
    p.className="movie_des";

    slider.push(slide)

    if(slider.length){
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${
            30*(slider.length -2)
        }px)`;
    }
 }
 for (let i=0;i<3;i++){
    createslide();
 } 
 setInterval(()=>{
    createslide();
 },3000);

//  video animation
const videocards=[...document.querySelectorAll(".video_card")];

videocards.forEach((items)=>{
    items.addEventListener("mouseover",()=>{
        let video=items.children[1];
        video.play();
    });
    items.addEventListener("mouseleave",()=>{
        let video =items.children[1];
        video.pause();
    });
});


// card sliders
let cardcontainer=[...document.querySelectorAll('.card-container')];
let prebtn=[...document.querySelectorAll('.pre-btn')];
let nxtbtn=[...document.querySelectorAll('.nxt-btn')];
cardcontainer.forEach((items,i)=>{
let containerdimension=items.getBoundingClientRect();
let containerwidth=containerdimension.width;

nxtbtn[i].addEventListener('click',()=>{
    items.scrollLeft+=containerwidth - 200;
})
prebtn[i].addEventListener('click',()=>{
    items.scrollLeft-= containerwidth + 200;
})
});
