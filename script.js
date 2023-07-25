//                           variables
let Sections= document.querySelectorAll('section')
let Menu=document.querySelector('div.menu')
let Header_Nav=document.querySelector('nav')
let Navlinks=document.querySelectorAll('nav a')
let Header_Nav_ul_li=document.querySelectorAll('nav ul li')
let Right_angle=document.querySelectorAll('.right-angle')
let Row_skill_ul=document.querySelectorAll('div.row-skill ul')



//                            functions

// menu_cross
function Menu_cross(){
    Menu.classList.toggle('cross');
    Header_Nav.classList.toggle('display-block');
    setTimeout(()=>{        
        Header_Nav.classList.toggle('active');
    },0)

}

// show_section
function Show_section(){
    Sections.forEach((sec)=>{
      if(sec.id===`section-${this.innerText}`){
        sec.classList.add('active');
        setTimeout(()=>{
            sec.classList.remove('active');
            
        },1000)
        
      }  
    })
}

// windowScroll
function windowScroll(){
     Sections.forEach((sec,index)=>{
            let top= window.scrollY;
            let offset= sec.offsetTop-100;
            let height= sec.offsetHeight;
            if(top>offset && top< offset + height){
            Navlinks.forEach((link)=>{
            link.parentElement.classList.remove('active');
            Navlinks[index].parentElement.classList.add('active')
            })   
            }
        })
}

//                                  Events

// Menu
Menu.addEventListener('click',Menu_cross)
// Header_Nav_ul_li
Header_Nav_ul_li.forEach((li)=>{
    li.addEventListener('click',Menu_cross)
    li.addEventListener('click',Show_section)
})
// Right_angle
Right_angle.forEach((r_angle,index)=>{
    r_angle.addEventListener('click',function Right_angle_90deg(){
        this.classList.toggle('rotate-90deg')
     
            Row_skill_ul[index].classList.toggle('display-block');       
        setTimeout(()=>{        
            Row_skill_ul[index].classList.toggle('active');
        },0)
    })
})

// window_scrolling
window.addEventListener('scroll',windowScroll)