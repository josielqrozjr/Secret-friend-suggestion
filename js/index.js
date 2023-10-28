const sugestoes = [
    {
      id: 1,
      nome: "Suporte Macbook Air",
      info: "Tamanho do macbook Air M1, material resistente,<br> não precisa ser muito alto.",
      imagem: "suporte1-macbookair.jpeg"
    },
    {
      id: 2,
      nome: "Mouse",
      info: "Sem fio, com aquele plugin para conectar no computador tipo C, meu computador não tem porta USB.",
      imagem: "mouse.jpg"
    },
    {
      id: 3,
      nome: "Adaptador Hub",
      info: "Próprio para o Macbook Air M1, o cabo deve ser tipo C para funcionar, principais entradas são HDMI, cartão de memória e USB.",
      imagem: "adaptador-hub1.webp"
    },
    {
      id: 4,
      nome: "Suéter",
      info: "(P | P slim | PP) Sem muita frescura, pode ser liso ou com poucas listras na horizontal, sem bordado dizendo marca.",
      imagem: "sueter1.jpeg"
    },
    {
      id: 5,
      nome: "Camiseta",
      info: "(P | P slim | PP) Sem muita frescura, pode ser lisa mesmo numa dessas cores ou<br>outras cores escuras.",
      imagem: "camisa.jpeg"
    },
    {
      id: 6,
      nome: "Pix",
      info: "Se achou difícil ou qualquer outro motivo, pode passar o pix.<br><b> E o pix, nada ainda? </b>",
      imagem: "pix.webp"
    }
  ];
  
  for (const presente of sugestoes) {

    const card_sugestao = 
    `
    <div class="card-sugestoes">
        <div class="card-sugestoes-img">
            <img src="assets/${presente.imagem}" alt="">
        </div>
        <div class="card-sugestoes-desc">
            <div class="card-sugestoes-titulo">
                ${presente.nome}
            </div>
            <div class="card-sugestoes-info">
                ${presente.info}
            </div>  
        </div>        
    </div>
    `
  
    document.getElementById("box-sugestoes").innerHTML += card_sugestao;
  }