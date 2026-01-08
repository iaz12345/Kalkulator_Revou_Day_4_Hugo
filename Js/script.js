const display = document.getElementById('display');

function appendToDisplay(input) {
  // Reset layar jika sebelumnya ada pesan error
  if (display.value === "Tidak terdefinisi" || display.value === "Error") {
    display.value = "";
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Fungsi Hitung Utama (Sudah termasuk cek pembagian nol)
function calculate() {
  try {
    // 1. Cek secara teks apakah ada pembagian /0
    if (display.value.includes('/0')) {
      display.value = "Tidak terdefinisi";
      return; // Berhenti di sini
    }

    let result = eval(display.value);

    // 2. Cek apakah hasil perhitungannya tak hingga
    if (result === Infinity || result === -Infinity) {
      display.value = "Tidak terdefinisi";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSquare() {
  try {
    let currentValue = eval(display.value);
    display.value = Math.pow(currentValue, 2);
  } catch (error) {
    display.value = "Error";
  }
}

function calculateRoot() {
  try {
    let currentValue = eval(display.value);
    if (currentValue < 0) {
      display.value = "Error";
    } else {
      display.value = Math.sqrt(currentValue);
    }
  } catch (error) {
    display.value = "Error";
  }
}