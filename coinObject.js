const coin = {
    state: 0,
  
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      this.state = Math.round(Math.random())
    },
  
    toString: function () {
        if (this.state === 0) {
            return "Heads"
        }
        if (this.state === 1) {
            return "Tails"
        }
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      if (this.state === 0) {
          image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasil_coin_1_real-2.jpg/300px-Brasil_coin_1_real-2.jpg"
          image.alt = "Heads"
      }
      if (this.state === 1) {
        image.src = "https://sorteador.com.br/imgs/flip-a-coin/side-a.jpeg"
        image.alt = "Tails"
      }
      // Colocar uma imagem correspondente a essa valor.
      // image.src = "./CAMINHO/IMAGEM.JPEG"
      // image.alt = "Heads/Tails"
      return image;
    },
  };

  function display20Flips() {
    const results = [];
    const body = document.querySelector("body")
    const texto = document.createElement("p")
    body.appendChild(texto)
    for(let i = 0; i < 20; i++) {
        coin.flip()
        results[i] = coin.state
        texto.innerText += coin.toString() + "-"
    }
    console.log(results)
    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  function display20Images() {
    const results = [];
    const body = document.querySelector("body")
    const imagens = document.createElement("div")
    body.appendChild(imagens)
    for(let i = 0; i < 20; i++) {
        coin.flip()
        results[i] = coin.state
        imagens.appendChild(coin.toHTML())
    }
    console.log(results)
    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  display20Flips()
  display20Images()