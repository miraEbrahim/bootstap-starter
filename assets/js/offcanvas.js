(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })

  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.fixed-top').addClass('bg-light');
       $('#btnMain').addClass('btn-secondary');
    }else{
      $('.fixed-top').removeClass('bg-light');
      $('#btnMain').removeClass('btn-secondary');
    }
});
})()
