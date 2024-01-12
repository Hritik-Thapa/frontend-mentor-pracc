//<---------------- calculator ---------------->

//theme

function theme_changer(number) {
  const pointer = document.querySelector(".theme_pointer");
  if (number == 1) {
    pointer.classList.remove("pos_2");
    pointer.classList.remove("pos_3");
    pointer.classList.add("pos_1");
  } else if (number == 2) {
    pointer.classList.remove("pos_1");
    pointer.classList.remove("pos_3");
    pointer.classList.add("pos_2");
  } else {
    pointer.classList.remove("pos_2");
    pointer.classList.remove("pos_1");
    pointer.classList.add("pos_3");
  }
}

document.querySelectorAll(".theme").forEach((theme) => {
  const number = theme.innerHTML;
  theme.addEventListener("click", (event) => {
    theme_changer(number);
  });
});

document
  .querySelector(".calculator_screen")
  .addEventListener("click", theme_changer);

//calculator keys

document.querySelectorAll(`.calculator_keys button`).forEach((element) => {
    const value=element.innerHTML;
    const className=element.classList;
    let screen=document.querySelector('.calculator_screen');
    element.addEventListener("click", () => {
        switch (className[0]){
            case "keys_num":
                console.log('number')
                break;
            case "keys_operator":
                console.log('operator')
                break;
            default:
                console.log('action')
                break;
        }
        screen.innerHTML=screen.innerHTML+value
  });
});
