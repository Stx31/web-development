$(document).ready(function(){
    $("#ocultarCapa").click(function(){
      $("#miCapa").hide();
    });
    
    $("#mostrarCapa").click(function(){
      $("#miCapa").show();
    });
    
    $("#desvanecerCapa").click(function(){
      $("#miCapa").fadeOut();
    });
    
    $("#aparecerCapa").click(function(){
      $("#miCapa").fadeIn();
    });
    
    $("#negritaTexto").click(function(){
      $("#miCapa").css("font-weight", "bold");
    });
    
    $("#disminuirTamaño").click(function(){
      var tamañoActual = parseInt($("#miCapa").css("font-size"));
      $("#miCapa").css("font-size", tamañoActual - 2);
    });
    
    $("#restaurarTamaño").click(function(){
      $("#miCapa").css("font-size", "");
    });
    
    $("#quitarNegrita").click(function(){
      $("#miCapa").css("font-weight", "");
    });
    
    $("#agregarTexto").click(function(){
      var nuevoTexto = $("#nuevoTexto").val();
      $("#miCapa").text(nuevoTexto);
    });
  });
  