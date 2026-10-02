let clicks = 0;

document.getElementById("btn").addEventListener("click", () => {
  clicks++;
  document.getElementById("output").textContent =
    `Der Button wurde ${clicks}x geklickt.`;
});
