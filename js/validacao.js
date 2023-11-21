
function validaNome(nome){
    var n = nome.value;

    var filter_nome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
        if (!filter_nome.test(n)){
            document.querySelector('.aviso-form').style.visibility = 'visible';

            nome.value = n.substring(0, n.length-1);
            return;
        } else {
            document.querySelector('.aviso-form').style.visibility = 'hidden';
        }      
}

function envioCompleto(){
    document.querySelector('.form-enviado').style.visibility = 'visible';
}
