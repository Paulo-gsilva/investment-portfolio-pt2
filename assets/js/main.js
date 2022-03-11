const h1Balance = document.getElementById('balance-value');
const depositBalance = document.getElementById('deposit');
const withdrawBalance = document.getElementById('withdraw');

class Balance{
  constructor(balance){
    this.balance = balance;
  }

  get deposit(){
    return h1Balance.innerHTML = `R$ ${this.balance}`
  }

  set deposit(value){
    this.balance += value;
    createPDeposit(value);
    loadNewBalance(this.balance);
    saveBalance(this.balance);
  }

  get withdraw(){
    return h1Balance.innerHTML = `R$ ${this.balance}`
  }

  set withdraw(value){
    if(value > this.balance || value === 0){
      alert('Invalid Withdraw. Withdrawal amount is higher than available');
      return;
    }

    this.balance -= value;
    createPWithdraw(value);
    loadNewBalance(this.balance);
    saveBalance(this.balance);
  }

}

function saveBalance(balance){
  let saveData = {
    balance: balance
  }

  localStorage.setItem('balance', JSON.stringify(saveData));
}

function loadNewBalance(text){
  const h1Balance = document.getElementById('balance-value');
  h1Balance.innerHTML = `R$ ${text}`
}

function createPDeposit(text){
  const p = document.createElement('p');
  const div = document.querySelector('.data');

  p.setAttribute('class', 'deposit-balance');

  p.innerHTML = `R$ ${text}`;
  div.appendChild(p);
}

function createPWithdraw(text){
  const p = document.createElement('p');
  const div = document.querySelector('.data');

  p.setAttribute('class', 'withdraw-balance');

  p.innerHTML = `R$ ${text}`;
  div.appendChild(p);
}


let dataPrice = JSON.parse(localStorage.getItem('balance'));
function attBalance(){
    if(JSON.parse(localStorage.getItem('balance')) === null){
        const test = new Balance(0);
        test.deposit;
            depositBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            
            if(Number(input.value) > 100000){
            alert('Invalid Deposit. Max: R$ 100000');
            return;
            }
        
            test.deposit = Number(input.value);
        });
        
        withdrawBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            test.withdraw = Number(input.value);
        });
    }
        
    else{
        const test = new Balance(dataPrice.balance);
        test.deposit;
        depositBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            
            if(Number(input.value) > 100000){
            alert('Invalid Deposit. Max: R$ 100000');
            return;
            }
        
            test.deposit = Number(input.value);
        });
        
        withdrawBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            test.withdraw = Number(input.value);
        });
    }
}

attBalance();
function get(url){
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
}

function createLineBtc(price){
    const p = document.createElement('p');
    const h1 = document.querySelector('.btc');

    p.innerText = `R$ ${price}`;
    h1.appendChild(p);
}

function createLineEth(price){
    const p = document.createElement('p');
    const h1 = document.querySelector('.eth');

    p.innerText = `R$ ${price}`;
    h1.appendChild(p);
}

function createLineSol(price){
    const p = document.createElement('p');
    const h1 = document.querySelector('.sol');

    p.innerText = `R$ ${price}`;
    h1.appendChild(p);
}

function createLineSlp(price){
  const p = document.createElement('p');
  const h1 = document.querySelector('.slp');

  p.innerText = `R$ ${price}`;
  h1.appendChild(p);
}

function createLineCake(price){
  const p = document.createElement('p');
  const h1 = document.querySelector('.cake');

  p.innerText = `R$ ${price}`;
  h1.appendChild(p);
}

function createLineBnb(price){
  const p = document.createElement('p');
  const h1 = document.querySelector('.bnb');

  p.innerText = `R$ ${price}`;
  h1.appendChild(p);
}

function btc(){
    let usuarios;
    data = get("https://api.bitpreco.com/btc-brl/ticker");
    usuarios = JSON.parse(data);
    createLineBtc(usuarios.last.toFixed(2));
}

function sol(){
    let usuarios;
    data = get("https://api.bitpreco.com/sol-brl/ticker");
    usuarios = JSON.parse(data);
    createLineSol(usuarios.last.toFixed(2))
}

function eth(){
    let usuarios;
    data = get("https://api.bitpreco.com/eth-brl/ticker");
    usuarios = JSON.parse(data);
    createLineEth(usuarios.last.toFixed(2))
}

function slp(){
    let usuarios;
    data = get("https://api.bitpreco.com/slp-brl/ticker");
    usuarios = JSON.parse(data);
    createLineSlp(usuarios.last.toFixed(2))
}

function cake(){
    let usuarios;
    data = get("https://api.bitpreco.com/cake-brl/ticker");
    usuarios = JSON.parse(data);
    createLineCake(usuarios.last.toFixed(2))
}

function bnb(){
    let usuarios;
    data = get("https://api.bitpreco.com/bnb-brl/ticker");
    usuarios = JSON.parse(data);
    createLineBnb(usuarios.last.toFixed(2))
}


btc();
eth();
sol();
slp();
cake();
bnb();

//CONVERSOR DE MOEDAS
var resultado;

$.ajax({
  type: "GET",
  dataType: "JSON",
  url: "https://economia.awesomeapi.com.br/json/all",
  success: function (data) {
    resultado = data
  },
  error: function (data) {
    alert('Erro! o site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
  }
});

function converter() {
  var euro = resultado["EUR"]["bid"]
  var dolar = resultado["USD"]["bid"]
  var dolarTurismo = resultado["USDT"]["bid"]
  var dolarCanadense = resultado["CAD"]["bid"]
  var dolarAustraliano = resultado["AUD"]["bid"]
  var libra = resultado["GBP"]["bid"]
  var peso = resultado["ARS"]["bid"]
  var iene = resultado["JPY"]["bid"]
  var yuan = resultado["CNY"]["bid"]
  var franco = resultado["CHF"]["bid"]
  var shekel = resultado["ILS"]["bid"]
  var btcoin = resultado["BTC"]["bid"]
  var ethereum = resultado["ETH"]["bid"]
  var ltcoin = resultado["LTC"]["bid"]
  var dogecoin = resultado["DOGE"]["bid"]
  var xrp = resultado["XRP"]["bid"]

  function getHorarioAtualizacao(codigoMoeda) {
    var data = (resultado[codigoMoeda]["create_date"])
    //Mudando a formatação da data para DD/MM/AA 
    var dia = data.substring(8, 10)
    var mes = data.substring(5, 7)
    var ano = data.substring(0, 4)
    var hora = data.substring(11, 16)
    var dataFormatada = `${dia}/${mes}/${ano} às ${hora}`
    var atualizacao = document.querySelector("#atualizacao");
    atualizacao.innerHTML = 'Cotação atualizada em ' + dataFormatada;
  }

  var numeroDigitado = document.querySelector("#entrada").value;
  numeroDigitado = parseFloat(numeroDigitado);

  var calculo;

  var saida = document.querySelector("#saida");
  var selecionado = document.querySelector("#moedas").value;

  function calcular(valorMoeda, codigoMoeda){
    calculo = numeroDigitado * valorMoeda
    numeroDigitado = numeroDigitado.toLocaleString('en-us', { style: 'currency', currency: codigoMoeda });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${numeroDigitado} = ${calculo}`
    getHorarioAtualizacao(codigoMoeda)
  }

  if (isNaN(numeroDigitado) == true && selecionado == "NULL") {
    alert("Digite um valor e escolha uma moeda!")
  } else {
    if (isNaN(numeroDigitado) == true) {
      alert("Digite um valor!")
    }
    if (selecionado == "NULL") {
      alert("Escolha uma moeda!")
    }
  }

  if (numeroDigitado <= 0) {
    alert("Valor inválido! Digite somente valores positivos e diferentes de zero")
  }

  if (selecionado == "EUR" && !isNaN(numeroDigitado) && !isNaN(euro)) {
      calcular(euro, "EUR")
  }

  if (selecionado == "USD" && !isNaN(numeroDigitado) && !isNaN(dolar)) {
      calcular(dolar, "USD")
  }

  if (selecionado == "USDT" && !isNaN(numeroDigitado) && !isNaN(dolarTurismo)) {
    calcular(euro, "USDT")
  }

  if (selecionado == "CAD" && !isNaN(numeroDigitado) && !isNaN(dolarCanadense)) {
      calcular(dolarCanadense, "CAD")        
  }

  if (selecionado == "AUD" && !isNaN(numeroDigitado) && !isNaN(dolarAustraliano)) {
      calcular(dolarAustraliano, "AUD")
  }

  if (selecionado == "GBP" && !isNaN(numeroDigitado) && !isNaN(libra)) {
      calcular(libra, "GBP")
  }

  if (selecionado == "ARS" && !isNaN(numeroDigitado) && !isNaN(peso)) {
      calcular(peso, "ARS")
  }

  if (selecionado == "JPY" && !isNaN(numeroDigitado) && !isNaN(iene)) {
      calcular(iene, "JPY")
  }

  if (selecionado == "CNY" && !isNaN(numeroDigitado) && !isNaN(yuan)) {
      calcular(yuan, "CNY")
  }

  if (selecionado == "CHF" && !isNaN(numeroDigitado) && !isNaN(franco)) {
      calcular(franco, "CHF")
  }

  if (selecionado == "ILS" && !isNaN(numeroDigitado) && !isNaN(shekel)) {
      calcular(shekel, "ILS")
  }

  if (selecionado == "BTC" && !isNaN(numeroDigitado) && !isNaN(btcoin)) {
      btcoin = btcoin * 1000
      calcular(btcoin, "BTC")
  }

  if (selecionado == "ETH" && !isNaN(numeroDigitado) && !isNaN(ethereum)) {
      calcular(ethereum, "ETH")
  }

  if (selecionado == "LTC" && !isNaN(numeroDigitado) && !isNaN(ltcoin)) {
      calcular(ltcoin, "LTC")
  }

  if (selecionado == "DOGE" && !isNaN(numeroDigitado) && !isNaN(dogecoin)) {
      calcular(dogecoin, "XDG")
  }

  if (selecionado == "XRP" && !isNaN(numeroDigitado) && !isNaN(xrp)) {
      calcular(xrp, "XRP")
  }

}
