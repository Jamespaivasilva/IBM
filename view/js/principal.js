$(document).ready(function(){

$('.atual').html('1');
 $('.ibm').show();
 $('.ibm2').hide();
 $('.ibm3').hide();
 $('.one').hide();
 
 
//Mudar de opção de corousel
 $('.btn1').click(function(){
    $('.ibm').show();
    $('.ibm2').hide();
    $('.ibm3').hide();
 });

 $('.btn2').click(function(){
   $('.ibm2').show();
   $('.ibm3').hide();
   $('.ibm').hide();
 });

 $('.btn3').click(function(){
   $('.ibm3').show();
   $('.ibm').hide();
   $('.ibm2').hide();
 });


 //Paginação entre paginas do carousel
 $('.one').click(function(){
  $('.carousel1').carousel(0);
 });
 $('.three').click(function(){
  $('.carousel1').carousel(2);
 });

 $('.previous').click(function(){
  $('.carousel1').carousel('prev');
 });

 $('.next').click(function(){
  $('.carousel1').carousel('next');
 });

 $("#myCarousel").on('slid.bs.carousel', function () {
  var i = $(".active").attr("id");

  if(i==1 || i==0){
    $('.previous').hide();
    $('.one').hide();
    $('.three').show();
    $('.next').show();
  }else if(i==3){
    $('.next').hide();
    $('.previous').show();
    $('.three').hide();
    $('.one').show();
  }else if(i==2){
     $('.one').hide();
     $('.three').show();
     $('.previous').show();
     $('.next').show();
  }
  //Contador, pagina atual
  $('.atual').html(i);
});

 
//Função para copiar
$('.copy').click(function(){
    var texto = $(this).val();
    var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(texto).select();
    try{
        var resultado = document.execCommand('copy');
        if(resultado){
          $temp.remove();
        }
    }catch(e){
        alert("Não conseguimos copiar");
    }
});

});