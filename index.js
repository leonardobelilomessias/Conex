const Reader = require("./Reader")
const Processor = require("./Processor");
const Table  = require("./Table")
const Writer = require("./Writer")
const HtmlParser = require("./HtmlParser");
const PdfWrite = require('./PdfWriter')



var leitor = new Reader()
var escritor = new Writer()


async function main(){
    let dados = await leitor.read("./carros.csv")
    let dadosProcessados = Processor.process(dados)
    var usuarios = new Table(dadosProcessados)
    console.log(typeof(usuarios.rows))
    let html = await HtmlParser.Parser(usuarios)
    console.log(html)
    
    escritor.writer(`${Date.now()}.html`,html)
    PdfWrite.WritePdf(`${Date.now()}.PDF`,html)
}
main()
