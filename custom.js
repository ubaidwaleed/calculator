let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");
let result = document.getElementById("result");

function plus() {
  if (
    document.getElementById("input1").value.length === 0 ||
    document.getElementById("input2").value.length === 0
  ) {
    alert("Enter valid number.!!");
  } else {
    let sum = parseFloat(num1.value) + parseFloat(num2.value);
    result.innerHTML = sum;
  }
}

function minus() {
  if (
    document.getElementById("input1").value.length === 0 ||
    document.getElementById("input2").value.length === 0
  ) {
    alert("Enter valid number.!!");
  } else {
    let diff = parseFloat(num1.value) - parseFloat(num2.value);
    result.innerHTML = diff;
  }
}

function multiply() {
  if (
    document.getElementById("input1").value.length === 0 ||
    document.getElementById("input2").value.length === 0
  ) {
    alert("Enter valid number.!!");
  } else {
    let prod = parseFloat(num1.value) * parseFloat(num2.value);
    result.innerHTML = prod;
  }
}

function divide() {
  if (
    document.getElementById("input1").value.length === 0 ||
    document.getElementById("input2").value.length === 0
  ) {
    alert("Enter valid number.!!");
  } else {
    let divide = parseFloat(num1.value) / parseFloat(num2.value);
    result.innerHTML = divide;
  }
}

// // ...........................................................
var input = document.getElementById("input1");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

var input = document.getElementById("input2");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
// // ...........................................................

// function function1() {
//   let b1;
//   if (document.getElementById("one").clicked === true) {
//     b1 = document.getElementById("one").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("two").clicked === true) {
//     b1 = document.getElementById("two").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("three").clicked === true) {
//     b1 = document.getElementById("three").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("four").clicked === true) {
//     b1 = document.getElementById("four").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("five").clicked === true) {
//     b1 = document.getElementById("five").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("six").clicked === true) {
//     b1 = document.getElementById("six").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("seven").clicked === true) {
//     b1 = document.getElementById("seven").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("eight").clicked === true) {
//     b1 = document.getElementById("eight").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("nine").clicked === true) {
//     b1 = document.getElementById("nine").value;
//     document.getElementById("input1").value = b1;
//   } else if (document.getElementById("zero").clicked === true) {
//     b1 = document.getElementById("zero").value;
//     document.getElementById("input1").value = b1;
//   }
// }

// function function2() {
//   let b2;
//   if (document.getElementById("one").clicked == true) {
//     b2 = document.getElementById("one").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("two").clicked == true) {
//     b2 = document.getElementById("two").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("three").clicked == true) {
//     b2 = document.getElementById("three").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("four").clicked == true) {
//     b2 = document.getElementById("four").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("five").clicked == true) {
//     b2 = document.getElementById("five").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("six").clicked == true) {
//     b2 = document.getElementById("six").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("seven").clicked == true) {
//     b2 = document.getElementById("seven").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("eight").clicked == true) {
//     b2 = document.getElementById("eight").value;
//     document.getElementById("input2").value = b2;
//   }
//   if (document.getElementById("nine").clicked == true) {
//     b2 = document.getElementById("nine").value;
//     document.getElementById("input1").value = b1;
//   }
//   if (document.getElementById("zero").clicked == true) {
//     b2 = document.getElementById("zero").value;
//     document.getElementById("input2").value = b2;
//   }
// }

function reset() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}

// function dis(val) {
//   document.getElementById("input1").value += val;
// }

// function myFunction(event) {
//   if (
//     event.key == "0" ||
//     event.key == "1" ||
//     event.key == "2" ||
//     event.key == "3" ||
//     event.key == "4" ||
//     event.key == "5" ||
//     event.key == "6" ||
//     event.key == "7" ||
//     event.key == "8" ||
//     event.key == "9" ||
//     event.key == "+" ||
//     event.key == "-" ||
//     event.key == "*" ||
//     event.key == "/"
//   )
//     document.getElementById("result").value += event.key;
// }

// // Function that evaluates the digit and return result
// function solve() {
//   let x = document.getElementById("result").value;
//   let y = math.evaluate(x);
//   result.innerHTML = y;
// }

function myFunction1() {
  let b1 = document.getElementById("one").value;
  if (
    document.getElementById("input1").value.length === 0 ||
    document.getElementById("input1").clicked === true
  ) {
    document.getElementById("input1").value += b1;
  } else if (
    (document.getElementById("input1").value.length = !0) ||
    document.getElementById("input2").clicked === true
  ) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction2() {
  let b1 = document.getElementById("two").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction2() {
  let b1 = document.getElementById("two").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction3() {
  let b1 = document.getElementById("three").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction4() {
  let b1 = document.getElementById("four").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction5() {
  let b1 = document.getElementById("five").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction6() {
  let b1 = document.getElementById("six").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction7() {
  let b1 = document.getElementById("seven").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction8() {
  let b1 = document.getElementById("eight").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction9() {
  let b1 = document.getElementById("nine").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
function myFunction0() {
  let b1 = document.getElementById("zero").value;
  if (document.getElementById("input1").value.length === 0) {
    document.getElementById("input1").value += b1;
  } else if ((document.getElementById("input1").value.length = !0)) {
    document.getElementById("input2").value += b1;
  }
}
