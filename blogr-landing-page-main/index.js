// dropdowns
const buttons = document.querySelectorAll('.dropdown-btn') // quaryselectorall will return and nodelist of button with classnaem .unLockUser-button
const dropdown1 = document.querySelector('#dropdown-1')
const dropdown2 = document.querySelector('#dropdown-2')
const dropdown3 = document.querySelector('#dropdown-3')
const dropdown4 = document.querySelector('#dropdown-4')
const dropdown5 = document.querySelector('#dropdown-5')
const dropdown6 = document.querySelector('#dropdown-6')

buttons.forEach((btn, index) => {// index will be current button index
  btn.addEventListener("click", function(e) {
    console.log(e.target, index);
    if(index == 0){
      dropdown1.classList.toggle("show")
    } else if(index == 1){
      dropdown2.classList.toggle("show")
    } else if(index == 2){
      dropdown3.classList.toggle("show")
    }else if(index == 3){
      dropdown4.classList.toggle("show")
    }else if(index == 4){
      dropdown5.classList.toggle("show")
    }else if(index == 5){
      dropdown6.classList.toggle("show")
    }
  });
})

//close dropdwon
// window.onclick = function (event) {
//   if (!event.target.matches('.dropdown-btn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// menu (open/close)
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}