class Forca {
  //Implementação Thiago Aschebrock Baptista
  letrasChutadas = []; // Todas as letras chutadas
  vidas; // Quantidade de vidas restantes
  palavra = []; // Aarray com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  resposta; //Resposta
  constructor(resposta){
    this.resposta = resposta.toLowerCase();
    this.vidas = 6;
    for (let index = 0; index < resposta.length; index++) {
      this.palavra.push("_");
    }
  }
  chutar(letra) { 
    var flag = false;
    letra = letra.toLowerCase();
    if(!(letra.length > 1) && !(this.letrasChutadas.includes(letra))){
      for(var i = 0; i < this.resposta.length;i++) {
        if (this.resposta[i] === letra){
          this.palavra[i] = letra;
          flag = true;
        }
      }
      if(!flag){
        this.vidas--;
      }
      this.letrasChutadas.push(letra);
    } 
  }

  buscarEstado() { 
    if(this.vidas <= 0){
      return "perdeu";
    }else{
      if(!this.palavra.includes("_")){
        return "ganhou";
      } 
      return "aguardando chute"; 
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas,
          vidas: this.vidas,
          palavra: this.palavra,
      }
  }
}

module.exports = Forca;
