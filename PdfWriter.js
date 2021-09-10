const pdf = require('html-pdf')
const { builtinModules } = require('module')
class PdfWriter{
    static WritePdf(filename,html){
        pdf.create(html,{}).toFile(filename)
    }

}

module.exports = PdfWriter