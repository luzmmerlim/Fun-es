 // crie uma função que exiba uma mensagem no console

 function messagemConsole(){
    console.log("Treinando Funções")
}
messagemConsole()

//crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(name){
    console.log(name)
}
meuNome("Luzia")

//crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function sobreMim(name, age, favoriteMusic){
    console.log(`Olá, meu nome é ${name}  tenho  ${age}  anos, e amo ouvir ${favoriteMusic}`)
}
sobreMim("Luzia", "19", "MPB")

// crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function favoritos( film, music){
    console.log( `Meu filme favorito é ${film} , e ouço muito  ${music} do Jorge Vercilo`)
}
favoritos("O diário de uma Princesa", "Ela une todas as coisas")