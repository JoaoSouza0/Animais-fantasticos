export default function btcFecth(url, target) {
  const btcSpan = document.querySelector(target);

  fetch(url)
    .then((response) => response.json())
    .then((btc) => {
      const precoBTC = btc.BRL.sell;
      btcSpan.innerText = (1000 / precoBTC).toFixed(3);
    }).catch(((erro) => console.log(Error(erro))));
}
