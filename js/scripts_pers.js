$( document ).ready(function() {  

    // Filtro personagens

    $mains = $allys = $enemys = $dead = $human = 0;
  
    $('.filter-btn').on('click', function() {
      let boxes = $('.project-box');

      // Get the checkbox
      if (document.getElementById("pri-btn").checked == true){
          $mains = 1;
      } else {
          $mains = 0;
      }
      if (document.getElementById("ali-btn").checked == true){
          $allys = 1;
      } else {
          $allys = 0;
      }
      if (document.getElementById("ini-btn").checked == true){
          $enemys = 1;
      } else {
          $enemys = 0;
      } 
      if (document.getElementById("hum-btn").checked == true){
          $human = 1;
      } else {
          $human = 0;
      } 
      if (document.getElementById("inf-btn").checked == true){
          $dead = 1;
      } else {
          $dead = 0;
      } 

      $(boxes).each(function() {
          $(this).fadeOut();
      });

      let teste1 = document.getElementsByClassName('pri-foto');
      let teste2 = document.getElementsByClassName('ali-foto');
      let teste3 = document.getElementsByClassName('ini-foto');
      let teste4 = document.getElementsByClassName('hum-foto');
      let teste5 = document.getElementsByClassName('inf-foto');

      if ($mains == 1) {
        $(teste1).fadeIn('slow');
      }
      if ($allys == 1) {
        $(teste2).fadeIn('slow');
      }
      if ($enemys == 1) {
        $(teste3).fadeIn('slow');
      }
      if ($human == 1) {
        $(teste4).fadeIn('slow');
      }
      if ($dead == 1) {
        $(teste5).fadeIn('slow');
      } 
    });

  });