function buscaCep(cep){
    if(cep.length == 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resposta) => resposta.json())
        .then((endereco) => {
            logradouro.value = endereco.logradouro;
            bairro.value = endereco.bairro;
            localidade.value = endereco.localidade;
            estado.value = endereco.estado;
        })
        .catch((erros) => {
            console.log("Erros: ", erros);
        })
        .finally(() => {
            console.log("chamada finalizada"); 
        })
    }
}