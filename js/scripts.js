$( document ).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");
  
    let circleA = new ProgressBar.Circle(containerA, {
  
      color: '#FFF',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#aaa'},
      to: { color: '#286818'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 21000000);
        circle.setText(value);
  
      }
  
    });
  
    let containerB = document.getElementById("circleB");
  
    let circleB = new ProgressBar.Circle(containerB, {
  
      color: '#FFF',
      strokeWidth: 8,
      duration: 1500,
      from: { color: '#aaa'},
      to: { color: '#286818'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 240);
        circle.setText(value);
  
      }
  
    });
  
    let containerC = document.getElementById("circleC");
  
    let circleC = new ProgressBar.Circle(containerC, {
  
      color: '#FFF',
      strokeWidth: 8,
      duration: 1300,
      from: { color: '#aaa'},
      to: { color: '#286818'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 95);
        circle.setText(value);
  
      }
  
    });
  
    let containerD = document.getElementById("circleD");
  
    let circleD = new ProgressBar.Circle(containerD, {
  
      color: '#FFF',
      strokeWidth: 8,
      duration: 1000,
      from: { color: '#aaa'},
      to: { color: '#286818'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 6);
        circle.setText(value);
  
      }
  
    });
  
    // iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;
  
    $(window).scroll(function (e) {
  
      let scroll = $(window).scrollTop();
  
      if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);
  
        stop = 1;
      }
  
    });
  

    // Filtro portfólio
  
    $('.filter-btn').on('click', function() {
  
      let type = $(this).attr('id');
      let boxes = $('.project-box');
  
      $('.main-btn').removeClass('active');
      $(this).addClass('active');
  
      if(type == 'bos-btn') {
        eachBoxes('bos', boxes);
      } else if(type == 'aus-btn') {
        eachBoxes('aus', boxes);
      } else if(type == 'col-btn') {
        eachBoxes('col', boxes);
      } else if(type == 'jac-btn') {
        eachBoxes('jac', boxes);
      } else if(type == 'pit-btn') {
        eachBoxes('pit', boxes);
      } else {
        eachBoxes('all', boxes);
      }
  
    });
  
    function eachBoxes(type, boxes) {
  
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }
  
    // scroll para as seções
  
    let navBtn = $('.nav-item');
  
    let bannerSection = $('#mainSlider');  /* Nome nas partes */
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let ambientSection = $('#portfolio-area');
    let contextoSection = $('#contexto-area');
    let infectionSection = $('#infection-area');
    let armasSection = $('#armas-area');
    let equipSection = $('#equip-area');
    let meleeSection = $('#mele-area');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {  
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'about-menu') {  /* Nome no menu */
        scrollTo = aboutSection;
      } else if(btnId == 'infection-menu') {
        scrollTo = infectionSection;
      } else if(btnId == 'ambient-menu') {
        scrollTo = ambientSection;
      } else if(btnId == 'contexto-menu') {
        scrollTo = contextoSection;
      } else if(btnId == 'armas-menu') {
        scrollTo = armasSection;
      } else if(btnId == 'equip-menu') {
        scrollTo = equipSection;
      } else if(btnId == 'mele-menu') {
        scrollTo = meleeSection;
      } else {
        scrollTo = bannerSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 200);
    });
  
  });