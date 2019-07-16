$(document).ready(function(){

//Desc: Vamos verificar qual é a localização do usuário
//1.Primeiro vamos fazer uma requisição para um site gratuito que gera o serviço
//2.Vamos pegar o País de origem 
//3.Redirecionar de acordo com o resultado
//Importante: É possível e simples criar uma simples api que substitui o servidor que vamos utilizar

    //descobrir o ip do usuário
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
 
    //Descobrir a localização do usuário
    $.getJSON("http://api.ipstack.com/"+json.ip+"?access_key=ff4bee6cbe5633a8860948f849a580fd&format=1", function( data ) {

        //verificar qual é o idioma e redirecionar
        $.each(data.location.languages, function(index, value){ 
            if(value.name=="Portuguese")
                window.location.href = "/ibm/view/pt-br.html";
            else if(value.name=="English")
                window.location.href = "/ibm/view/en.html";
            else if(value.name=="Spanish")
                window.location.href = "/ibm/view/sp.html";
            else
                window.location.href = "/ibm/view/en.html";
        });
  

    });

});



});