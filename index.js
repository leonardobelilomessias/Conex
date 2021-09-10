const Reader = require("./Reader")

var leitor = new Reader()



async function main(){
    let dados = await leitor.read("./carros.csv")
    console.log(dados)
}
main()
