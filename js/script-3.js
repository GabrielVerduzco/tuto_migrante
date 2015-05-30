$(document).ready(function(){
  $(".two").hide();
  $(".three").hide();
  $('#three-1').css({'color':'black'});
  $('#three-1').click(function(){
    $(".one").show();
    $(".two").hide();
    $(".three").hide();
    $('#man').attr('src','Elementos png/Movimientos personaje/P1.png');
    $('#three-1').css({'color':'black'});
    $('#three-2').css({'color':'white'});
    $('#three-3').css({'color':'white'});
  });
  $('#three-2').click(function(){
    $(".one").hide();
    $(".two").show();
    $(".three").hide();
    $('#man').attr('src','Elementos png/Movimientos personaje/P2.png');
    $('#three-2').css({'color':'black'});
    $('#three-1').css({'color':'white'});
    $('#three-3').css({'color':'white'});
  });
  $('#three-3').click(function(){
    $(".one").hide();
    $(".two").hide();
    $(".three").show();
    $('#man').attr('src','Elementos png/Movimientos personaje/P3.png');
    $('#three-3').css({'color':'black'});
    $('#three-2').css({'color':'white'});
    $('#three-1').css({'color':'white'});
  });
});
