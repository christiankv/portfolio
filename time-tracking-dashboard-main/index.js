const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")
const menu= [daily, weekly, monthly]
const dailyli = document.querySelectorAll(".daily") 
const weeklyli = document.querySelectorAll(".weekly") 
const monthlyli = document.querySelectorAll(".monthly") 
const activityselector = [dailyli, weeklyli, monthlyli]

for (let i=0;i<menu.length;i++){
  menu[i].addEventListener("click",function() {
    menuclick(i, this.id)
    // document.querySelector(`.${this.id}`).style.display = "none";
})  
}

function menuclick(i, id){
    for (let r = 0; r<menu.length; r++){
        menu[r].classList.remove("current")
    }
    menu[i].classList.add("current")

    for (a=0;a<menu.length;a++){
        const item = activityselector[a]
        item.forEach(element => {
            element.style.display = "none"
            
        });
    }
    for (a=0;a<menu.length;a++){
        const item = activityselector[i]
        item.forEach(element => {
            element.style.display = "flex"
            
        });
    }
}