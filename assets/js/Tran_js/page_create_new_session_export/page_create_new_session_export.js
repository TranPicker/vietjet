$(document).ready(function () {
  // prettyDropdown();
  // Initiate Pretty Dropdowns
  $('.pretty').prettyDropdown();
  $('.form--right .prettydropdown.arrow').addClass('col-9');
  $('.form--datepicker').datepicker({
    dateFormat: 'dd.mm.yy'
  });
  // event click
  $('.form--datepicker').click(function (event) {
    $('.form--datepicker:not(this)').removeClass('border-red');
    event.stopPropagation();
    $(this).addClass('border-red');
  });
  $('html').click(function () {
    $('.form--datepicker').removeClass('border-red');
  })
});
