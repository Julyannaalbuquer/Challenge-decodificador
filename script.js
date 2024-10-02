var conteudo;

var x = document.getElementById('mostra-conteudo');
var y = document.getElementById('oculta-conteudo');

// Funcão verifica se tem texto no input
function temTexto() {

    var conteudo = document.getElementById('digita-texto').value;

    if (conteudo == "") {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';

    }
}


//Validação de caracteres especiais e campo vázio
function ValidarConteudo() {

    var conteudo = document.getElementById('digita-texto').value;

    if (conteudo == '') {
        alert('Você não digitou nada!')
    } else {
        const pattern = /[0-9A-ZÀ-ü@´`^~'"]/;
        if (conteudo.match(pattern)) {
            alert("Somente letras minúsculas e sem acento!")
            document.getElementById('digita-texto').value = "";
        }
    }
}

//Função para criptografar o conteúdo
function criptografar() {


    ValidarConteudo(); 

    var conteudo = document.getElementById('digita-texto').value.toLowerCase();

    var txtCriptografado = conteudo.replace(/e/igm, 'enter')
        .replace(/o/igm, 'ober')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/u/igm, 'ufat')

    document.getElementById('saida-texto').innerHTML = txtCriptografado;
    temTexto();
}


//Função para descriptografar o conteúdo
function descriptografar() {

    var conteudo = document.getElementById('digita-texto').value.toLowerCase();

    var txtDescriptografado = conteudo.replace(/enter/igm, 'e')
        .replace(/ober/igm, 'o')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ufat/igm, 'u');

    document.getElementById('saida-texto').innerHTML = txtDescriptografado;
    temTexto();
}

//Função para copiar a mensagem criptografada

function CopiaCriptografia() {

    var conteudoVAzio = document.getElementById('saida-texto').value;
    if (conteudoVAzio == '') {
        alert('Não tem nada para ser copiado!');
    } else {

        var copiar = document.getElementById('saida-texto');

        copiar.select();
        document.execCommand('copy')
        navigator.clipboard.writeText(copiar.value);
        alert("Mensagem copiada com sucesso!😉");
    }
}