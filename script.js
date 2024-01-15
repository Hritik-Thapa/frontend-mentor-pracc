//<---------------- calculator ---------------->

//theme

function theme_changer(number) {
  const pointer = document.querySelector(".theme_pointer");
  const calculator=document.querySelector('.calculator');
  if (number == 1) {
    pointer.classList.remove("pos_2");
    pointer.classList.remove("pos_3");
    pointer.classList.add("pos_1");

    calculator.classList.remove('bg_2');
    calculator.classList.remove('bg_3');
    calculator.classList.add('bg_1');

  } else if (number == 2) {
    pointer.classList.remove("pos_1");
    pointer.classList.remove("pos_3");
    pointer.classList.add("pos_2");

    calculator.classList.remove('bg_1');
    calculator.classList.remove('bg_3');
    calculator.classList.add('bg_2');

  } else {
    pointer.classList.remove("pos_2");
    pointer.classList.remove("pos_1");
    pointer.classList.add("pos_3");

    calculator.classList.remove('bg_2');
    calculator.classList.remove('bg_1');
    calculator.classList.add('bg_3');

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

let result = 0;
let display = false;
document.querySelectorAll(`.calculator_keys button`).forEach((element) => {
  const value = element.innerHTML;
  const className = element.classList;
  const operators = ["+", "-", "/", "x"];

  let input = document.querySelector(".calculator_screen span");
  // let input=screen.innerHTML;
  let lastCharacter;

  element.addEventListener("click", () => {
    lastCharacter = input.innerHTML[input.innerHTML.length - 1];
    switch (className[0]) {
      case "keys_num":
        if (display === false) {
          input.innerHTML = input.innerHTML + value;
        } else {
          input.innerHTML = "";
          display = false;
          input.innerHTML = input.innerHTML + value;
        }
        break;

      case "keys_operator":
        if (value === "=") {
          calc();
        } else if (display == true) {
          operatorClick(value);
          display = false;
        } else {
          operatorClick(value);
        }
        break;

      default:
        if (value === "RESET" || display === true) {
          input.innerHTML = "";
        } else {
          input.innerHTML = input.innerHTML.slice(0, -1);
        }
        break;
    }
  });

  function operatorClick(operator) {
    console.log(lastCharacter);
    if (operators.includes(lastCharacter)) {
      console.log("yo");
      console.log(lastCharacter, operator);
      input.innerHTML = input.innerHTML.slice(0, -1) + operator;
    } else {
      input.innerHTML += operator;
    }
  }

  function calc() {
    if (operators.includes(lastCharacter)) {
      alert("end with a number");
    } else {
      let termsString = input.innerHTML.split(/\+|\-|\/|[x]/g);
      let eqnOperator = input.innerHTML.replace(/[0-9]|\./g, "").split("");

      terms = termsString.map((e) => Number(e));
      console.log(terms, eqnOperator);
      while (eqnOperator.includes("/")) {
        const index = eqnOperator.indexOf("/");
        terms.splice(index, 2, terms[index] / terms[index + 1]);
        eqnOperator.splice(index, 1);
      }
      while (eqnOperator.includes("x")) {
        const index = eqnOperator.indexOf("*");
        terms.splice(index, 2, terms[index] * terms[index + 1]);
        eqnOperator.splice(index, 1);
      }
      while (eqnOperator.includes("+")) {
        const index = eqnOperator.indexOf("+");
        terms.splice(index, 2, terms[index] + terms[index + 1]);
        eqnOperator.splice(index, 1);
      }
      while (eqnOperator.includes("-")) {
        const index = eqnOperator.indexOf("-");
        terms.splice(index, 2, terms[index] - terms[index + 1]);
        eqnOperator.splice(index, 1);
      }

      input.innerHTML = terms[0];
      display = true;
      console.log(terms, eqnOperator);
    }
  }

  // function operatorClick(screen,operator){
  //   console.log(result,screen)
  //   switch(operator){
  //     case null:
  //       result+=screen;
  //       break;
  //     case '+':
  //       result+=screen;
  //       break;
  //     case '-':
  //       result+=screen;
  //       break;
  //     case 'x':
  //       result+=screen;
  //       break;
  //     case '/':
  //       result+=screen;
  //       break;
  //     default:
  //       equation=input.replace('x','*');
  //       console.log(equation);
  //       break;
  //   }
  //   // input=result;
  //   console.log(operator,screen)
  // }

  // function actionClick(action){
  //   action==='RESET'?result=0
  // }
});

function numberClick(value) {}
