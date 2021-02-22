export default function btcFecth() {
  const url = 'https://blockchain.info/ticker';
  const btcSpan = document.querySelector('[data-btc]');

  console.log(btcSpan);

  fetch(url)
    .then((response) => response.json())
    .then((btc) => {
      const precoBTC = btc.BRL.sell;
      btcSpan.innerText = (1000 / precoBTC).toFixed(3);
    }).catch(((erro) => console.log(Error(erro))));
}
