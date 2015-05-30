$(document).ready(function(){
  $(".two").hide();
  $(".three").hide();
  $('#one-1').css({'color':'black'});
  $('#one-1').click(function(){
    $(".one").show();
    $(".two").hide();
    $(".three").hide();
    $('#one-1').css({'color':'black'});
    $('#one-2').css({'color':'white'});
    $('#one-3').css({'color':'white'});
    $('#man').attr('src','Elementos png/Movimientos personaje/P1.png');
  });
  $('#one-2').click(function(){
    $(".one").hide();
    $(".two").show();
    $(".three").hide();
    $('#man').attr('src','Elementos png/Movimientos personaje/P2.png');
    $('#one-2').css({'color':'black'});
    $('#one-1').css({'color':'white'});
    $('#one-3').css({'color':'white'});
  });
  $('#one-3').click(function(){
    $(".one").hide();
    $(".two").hide();
    $(".three").show();
    $('#man').attr('src','Elementos png/Movimientos personaje/P3.png');
    $('#one-1').css({'color':'white'});
    $('#one-2').css({'color':'white'});
    $('#one-3').css({'color':'black'});
  });
});
