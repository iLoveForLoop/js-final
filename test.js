function showCryptoDetails(crypto) {
  const modalT = document.getElementById("cryptoModalT");
  const modalTContent = document.getElementById("modalTContent");
  modalTContent.innerHTML = `
      <h2>${crypto.name}</h2>
      <img src="${crypto.image}" alt="${
    crypto.name
  }" style="width: 100px; height: 100px; margin-bottom: 1rem;">
      <p>Symbol: ${crypto.symbol.toUpperCase()}</p>
      <p>Current Price: $${crypto.current_price.toFixed(2)}</p>
      <p>Market Cap: $${crypto.market_cap.toLocaleString()}</p>
      <p>24h Change: ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
      <button id="closeButton">Close</button>
    `;
  modalT.style.display = "flex";

  // Dynamically bind the event listener to the close button
  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", closeModalT);
}

function closeModalT() {
  const modalT = document.getElementById("cryptoModalT");
  modalT.style.display = "none";
}
