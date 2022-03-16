// form switch
// $('a.switch').on('click',function (e) {
//     $(this).toggleClass('active');
//     e.preventDefault();

//     if ($('a.switch.developer').hasClass('active')) {
//         $('.form-developer').addClass('switched');
//         $('.form-onboard').removeClass('switched');
//     } else {
//         $('.form-developer').removeClass('switched');
//         $('.form-onboard').addClass('switched');
//     }
// });

// form switch
$('a.switch').on('click', function (e) {
  $(this).toggleClass('active');
  e.preventDefault();

  if ($('.developer-form a.switch').hasClass('active')) {
    console.log('dev', this);
    $(this).parents('.panel').siblings('.form').children('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
  } else if ($('.onboard-form a.switch').hasClass('active')) {
    console.log('onboard', this);
    $(this).parents('.panel').siblings('.form').children('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
  } else {
    $(this).parents('.panel').siblings('.form').children('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
  }
});
