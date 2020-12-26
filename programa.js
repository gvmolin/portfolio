if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', pronto)
} else {
  pronto()
}

function pronto(){
  //lib typed//////////////////
  new Typed('#typed', {
      strings: ['produzir', 'reformar', 'desenvolver', 'adaptar', "repaginar", "codar"],
      typeSpeed: 50,
      backSpeed: 20,
      loop: false
    });

    //addTema('rgb(250, 210, 12)', 'rgb(26, 26, 26)')
    //addTema('rgb(0, 0, 0)', 'rgb(0, 0, 0)')
    //addTema('rgb(0, 26, 83)', 'rgb(168, 0, 70)')
    //addTema('rgb(255, 0, 119)', 'rgb(255, 255, 255)')
}

/*function addTema(cor1, cor2, corbg1, corbg2){
  var botaoTema = document.createElement('button')
  var botaoTema2 = document.createElement('div')

  botaoTema.style.backgroundColor = cor1
  botaoTema2.style.backgroundColor = cor2

  botaoTema.append(botaoTema2)
  temasArea.append(botaoTema)
  botaoTema.addEventListener('click', ()=>{
    trocarTema(cor1, cor2)
    console.log(cor1, cor2)
  })
}

function trocarTema(cor1, cor2){
  logo.style.color = cor1

  navLi.forEach(element => {
    element.style.color = cor2
  });

  navButton.style.color = cor2
  navButton.style.border = `solid 2px ${cor2}`

  principalH2.forEach(element => {
    element.style.color = cor2
  })

  typedSpan.style.color = cor1
  principalButton.style.backgroundColor = cor1
  principalButton.style.border = `solid 2px ${cor1}`
  temaH2.style.color = cor1

}*/