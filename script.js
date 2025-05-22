let oneLiterGasoline = 2.76;
let oneLiterLPG = 1.52;
let oneLiterDiesel = 2.06;

function calculate() {
  let yakitTuru = document.getElementById("fuelType").value;
  let litre = parseFloat(document.getElementById("litre").value);
  let toplamTutar = 0;

  if (isNaN(litre) || litre <= 0) {
    document.getElementById("sonuc").innerText = "Lütfen geçerli bir litre miktarı girin.";
    return;
  }

  if (yakitTuru === "1") {
    toplamTutar = oneLiterGasoline * litre;
  } else if (yakitTuru === "2") {
    toplamTutar = oneLiterLPG * litre;
  } else if (yakitTuru === "3") {
    toplamTutar = oneLiterDiesel * litre;
  } else {
    document.getElementById("result").innerText = "Please select a valid fuel type.";
    return;
  }

  document.getElementById("result").innerText = "Total amount: " + toplamTutar.toFixed(2) + " CHF";
}