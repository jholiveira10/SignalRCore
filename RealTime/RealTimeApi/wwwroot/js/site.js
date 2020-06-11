//var connection = new signalR.HubConnectionBuilder().withUrl("/RealTimeHub").build();

var connection = new signalR.HubConnectionBuilder().withUrl("/RealTimeHub").build();

connection.start().then(function () {
    console.info("Connected!");
}).catch(function () {
    console.error(err.toString());
});


connection.on("CadastradoSucesso", function () {
    var mensagem = document.getElementById("Mensagem");
    mensagem.innerHTML = "Cadastro de Promoção Realizado com Sucesso!!"
});

connection.on("ReceberPromocao", function (promocao) {
    console.info(promocao);
});


var btnCadastrar = document.getElementById("BtnCadastrar");
if (btnCadastrar != null) {
    btnCadastrar.addEventListener("click", function () {

        var empresa = document.getElementById("Empresa").value;
        var chamada = document.getElementById("Chamada").value;
        var regras = document.getElementById("Regras").value;
        var enderecoUrl = document.getElementById("EnderecoURL").value;

        var promocao = {
            Empresa: empresa,
            Chamada: chamada,
            Regras: regras,
            EnderecoURL: enderecoUrl
        };

        //Chamar o Cadastre de Promoção
        connection.invoke("CadastrarPromocao", promocao).then(function () {
            console.info("Cadastrado com sucesso!");
        }).catch(function () {
            console.error(err.toString());
        });
        

    });

}

