const fs = require("fs");

fs.readFile("./documento.txt",{encoding:"utf-8"},(err,dados)=>{
    if(err){
        console.log("ocorreu uma fala  na leitura do arquivo")
    }else{
        console.log(dados)
    }
});