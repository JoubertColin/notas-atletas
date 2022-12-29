function obterMedia() {

  let nomesDosAtletas = 0;
  let notasObtidas = 0;
  let total = 0;
  let notasAtletas = 0;
  let soma = 0;
  let media = 0;

  for (let i = 0; i < atletas.length; i++){
    nomesDosAtletas = atletas.map(function(nomes){
      return nomes.nome
      });
  
    notasObtidas = atletas.map(function(notas){
      total = notas.notas
      total.sort(function(a, b) {
        return a - b;
        });

        return total
      });
  };
  
  for (let i = 0; i < atletas.length; i++){
    console.log(`Atleta: ${nomesDosAtletas[i]}`);
    console.log(`Notas Obtidas: ${notasObtidas[i]}`);
    notasAtletas = notasObtidas[i].slice(1, notasObtidas[i].length-1);
    soma = notasAtletas.reduce(function(total,atual){
      return (total + atual)
    });
    
    media = soma/notasAtletas.length;
    console.log(`Média Válida ${media.toFixed(2)}\n`);
  };

};
  
  
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
  ];
  
  obterMedia(atletas);
