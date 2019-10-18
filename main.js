
function ubaci() {
    var dugmence = document.getElementById("dugme");
    dugmence.onclick = (ev) => {
    var marka = document.getElementById("marka").value;
    var model = document.getElementById("model").value;
    var snaga = document.getElementById("snaga").value;
    var kubikaza = document.getElementById("kubikaza").value;
    output = "<td>" + marka + "</td><td>" + model + "</td><td>" + snaga + "</td><td>" + kubikaza + "</td>";
    var novired = document.createElement("tr");
    novired.innerHTML = output;
    document.querySelector("table").appendChild(novired);
    }
}