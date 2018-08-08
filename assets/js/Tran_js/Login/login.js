$(document).ready(function () {
  $('.error').addClass('text-danger');
  $('#signin-form').validate({
    debug: true,
    rules: {
      name: 'required',
      password: 'required'
    },
    messages: {
      name: 'Username is required! ',
      password: 'Password is required'
    }
  });
  $('.form-signin-submit-btn').click(function () {
    $('#signin-form').submit();
  });
});
