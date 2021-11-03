//Campos de letras u numeros
const letters = document.getElementById("letter");
const numbers = document.getElementById("number");

//Botones

const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//Funciones
const fnA1 = () => {
  if (letters.innerHTML == "") {
    letters.innerHTML = "A";
    console.log(letters.innerHTML);
  } else {
    if (numbers.innerHTML == "0" && letters.innerHTML == "ABCDEFGHIJ") {
      letters.innerHTML = "ABCDEFGHIJ";
      numbers.innerHTML += "1";
      console.log(numbers.innerHTML);
    } else {
      alert("FALTAN NUMEROS");
    }
  }
};
const fnB2 = () => {
  if (numbers.innerHTML == "01" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "2";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "A") {
      letters.innerHTML += "B";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "01") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }
};
const fnC3 = () => {
  if (numbers.innerHTML == "012" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "3";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "AB") {
      letters.innerHTML += "C";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "012") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }
};
const fnD4 = () => {
  if (numbers.innerHTML == "0123" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "4";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "ABC") {
      console.log(letters.innerHTML);
      letters.innerHTML += "D";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "0123") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }
};
const fnE5 = () => {
  if (numbers.innerHTML == "01234" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "5";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "ABCD") {
      letters.innerHTML += "E";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "01234") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }

};
const fnF6 = () => {
  if (numbers.innerHTML == "012345" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "6";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "ABCDE") {
      letters.innerHTML += "F";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "012345") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }
};
const fnG7 = () => {
  if (numbers.innerHTML == "0123456" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "7";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "ABCDEF") {
      letters.innerHTML += "G";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "0123456") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }

};
const fnH8 = () => {
  if (numbers.innerHTML == "01234567" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "8";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "ABCDEFG") {
      letters.innerHTML += "H";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "01234567") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }
};
const fnI9 = () => {
  if (numbers.innerHTML == "012345678" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "9";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "ABCDEFGH") {
      letters.innerHTML += "I";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "012345678") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }
};
const fnJ0 = () => {
  if (numbers.innerHTML == "" && letters.innerHTML == "ABCDEFGHIJ") {
    letters.innerHTML = "ABCDEFGHIJ";
    numbers.innerHTML += "0";
    console.log(numbers.innerHTML);
  } else {
    if (letters.innerHTML == "ABCDEFGHI") {
      letters.innerHTML += "J";
      console.log(letters.innerHTML);
    } else {
      if (letters.innerHTML != "ABCDEFGHIJ") {
        alert("FALTAN LETRAS");
      } else {
        if (numbers.innerHTML != "") {
          alert("FALTAN NUMEROS");
        }
      }
    }
  }
};
const fnCL = () => {
  letters.innerHTML = "";
};
const fnCN = () => {
  numbers.innerHTML = "";
};

const endGame = () => {
  if (numbers.innerHTML == "0123456789" && letters.innerHTML == "ABCDEFGHIJ") {
    alert("FELICIDADES, GANASTE, BORRA TODOS LOS CAMPOS PARA EMPEZAR OTRAVEZ");
  }
};

//Eventos
a1.onclick = () => {
  fnA1();
  endGame();
};
b2.onclick = () => {
  fnB2();
  endGame();
};
c3.onclick = () => {
  fnC3();
  endGame();
};
d4.onclick = () => {
  fnD4();
  endGame();
};
e5.onclick = () => {
  fnE5();
  endGame();
};
f6.onclick = () => {
  fnF6();
  endGame();
};
g7.onclick = () => {
  fnG7();
  endGame();
};
h8.onclick = () => {
  fnH8();
  endGame();
};
i9.onclick = () => {
  fnI9();
  endGame();
};
j0.onclick = () => {
  fnJ0();
  endGame();
};
cl.onclick = () => {
  fnCL();
  endGame();
};
cn.onclick = () => {
  fnCN();
  endGame();
};
