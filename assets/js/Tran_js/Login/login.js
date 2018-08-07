$(document).ready(function () {
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
    console.log('jquery is running');
    $('#signin-form').submit();
  });
});
