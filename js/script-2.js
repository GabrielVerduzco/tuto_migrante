$(document).ready(function(){
  $(".two").hide();
  $(".three").hide();
   $(".four").hide();
    $(".five").hide();

  $('#one-1').css({'color':'black'});
  $('#one-1').click(function(){
    $(".one").show();
    $(".two").hide();
    $(".three").hide();
    $(".five").hide();
       $(".four").hide();

    $('#one-1').css({'color':'black'});
    $('#one-2').css({'color':'white'});
    $('#one-3').css({'color':'white'});
    $('#one-4').css({'color':'white'});
    $('#one-5').css({'color':'white'});
    $('#man').attr('src','Elementos png/Movimientos personaje/P1.png');
  });
  $('#one-2').click(function(){
    $(".one").hide();
    $(".two").show();
    $(".three").hide();
    $(".five").hide();
       $(".four").hide();
    $('#man').attr('src','Elementos png/Movimientos personaje/P2.png');
    $('#one-2').css({'color':'black'});
    $('#one-1').css({'color':'white'});
    $('#one-3').css({'color':'white'});
  });
  $('#one-3').click(function(){
    $(".one").hide();
    $(".two").hide();
    $(".three").show();
       $(".five").hide();
          $(".four").hide();
    $('#man').attr('src','Elementos png/Movimientos personaje/P3.png');
    $('#one-1').css({'color':'white'});
    $('#one-2').css({'color':'white'});
    $('#one-3').css({'color':'black'});
    $('#one-4').css({'color':'white'});
    $('#one-5').css({'color':'white'});
  });


    $('#one-4').click(function(){
    $(".one").hide();
    $(".two").hide();
    $(".three").hide();
    $(".four").show();
       $(".five").hide();

    $('#man').attr('src','Elementos png/Movimientos personaje/P4.png');
    $('#one-1').css({'color':'white'});
    $('#one-2').css({'color':'white'});
    $('#one-3').css({'color':'white'});
    $('#one-4').css({'color':'black'});
    $('#one-5').css({'color':'white'});


  });

       $('#one-5').click(function(){
    $(".one").hide();
    $(".two").hide();
    $(".three").hide();
    $(".four").hide();
    $(".five").show();


    $('#man').attr('src','Elementos png/Movimientos personaje/P5.png');
    $('#one-1').css({'color':'white'});
    $('#one-2').css({'color':'white'});
    $('#one-3').css({'color':'white'});
    $('#one-4').css({'color':'white'});
     $('#one-5').css({'color':'black'});

  });

});
