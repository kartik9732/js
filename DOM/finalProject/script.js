//grab element
const red=document.querySelector(".red");
const cyan =document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");
//there are five class so we use five here

//center for center class
const center=document.querySelector(".center");
//grab the element we use window
console.log(window.getComputedStyle(red));
//here red is property
//all css style
console.log(window.getComputedStyle(red).background);
//it show all background color padding line etc 
console.log(window.getComputedStyle(red).backgroundColor);
// give the only color



//we use it with using of function like

const getBGColor=(SelectedElement)=>{
     return window.getComputedStyle(SelectedElement).backgroundColor;
}
console.log(getBGColor(red));

//Event Listener ??
//here we store the upper output in a variable
var color=getBGColor(pink);
//add event listner
color.addEventListener("mouseenter",()=>{
center.style.background=color;
});


//use this in a method 
//in method we work more action  for in same type output 

//variabe name =jar uppor action hobe ,ja action hobe
const magicColorChanger=(element,color)=>{
    return element.addEventListener("mouseenter",()=>{
     center.style.background=color;
    })

}

magicColorChanger(red,getBGColor(red));
magicColorChanger(pink,getBGColor(pink));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(orange,getBGColor(orange));



