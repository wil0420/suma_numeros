$( "#enviar" ).click(function() {
    var numero = parseInt($('#valor').val());
    var resultado = numero * (numero + 1) / 2;
/*     while(i < numero){
        resultado = resultado + (1+i);
    i++;
    } */
    $('.respuestas').text(resultado)
  });