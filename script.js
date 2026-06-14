const kalimat = [
  "Saya percaya hasil yang baik dimulai dari kebiasaan kecil yang dilakukan dengan konsisten.",
  "Bagi saya, kerja yang rapi dimulai dari mendengarkan instruksi dengan baik.",
  "Belajar hal baru tidak harus langsung besar, yang penting dimulai dan dilanjutkan."
];

const tombol = document.querySelector("#gantiKalimat");
const teks = document.querySelector("#kalimatMotivasi");
let urutan = 0;

if (tombol && teks) {
  tombol.addEventListener("click", function () {
    urutan = (urutan + 1) % kalimat.length;
    teks.textContent = `"${kalimat[urutan]}"`;
  });
}
