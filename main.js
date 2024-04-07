function update(val) {
  document.getElementById("input").value = document.getElementById("input").value + val;

}

function clearInput() {
  document.getElementById("input").value = " ";
}

function calculate() {
  try {
    var inputval = document.getElementById("input").value;
    var result = eval(inputval);

    document.getElementById("input").value = result;
  }
  catch (error) {
    document.getElementById("input").value = "Error";
  }

}