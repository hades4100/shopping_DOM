sum = 0;
document.getElementById("thesum").innerHTML = sum;

function addto1() {
  sum += 1;
  document.getElementById("thesum").innerHTML = sum;
}
function addto2() {
  sum += 2;
  document.getElementById("thesum").innerHTML = sum;
}
function remove1() {
  if (sum <= 0) {
    alert("zero out");
  } else {
    sum -= 1;
    document.getElementById("thesum").innerHTML = sum;
  }
}
function remove2() {
  if (sum == 1) {
    sum -= 1;
    alert("zero out");
    document.getElementById("thesum").innerHTML = sum;
  } else if (sum <= 0) {
    alert("zero out");
  } else {
    sum -= 2;
    document.getElementById("thesum").innerHTML = sum;
  }
}

dis = 0;
document.getElementById("discount").innerHTML = dis;
function discount() {
  if (sum >= 5) {
    dis = (sum * (90 / 100)).toFixed(1);
    document.getElementById("discount").innerHTML = dis;
  } else if (sum < 5) {
    dis = 0;
    document.getElementById("discount").innerHTML = dis;
  }
}

function emptey() {
  document.getElementById("thesum").innerHTML = "";
  sum = 0;
  document.getElementById("discount").innerHTML = "";
  dis = 0;
}

let a = document.querySelector(".bn-emptey");
a.addEventListener("click", emptey);
