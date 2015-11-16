$().ready(function(){
  $.get('https://api.doughnuts.ga/doughnuts')
    .done(function(doughnuts){
      doughnuts.forEach(function(elem){
        //
        $('#doughnuts').append('<li><b>Flavor:</b>' + elem.flavor +
          '| <b>Style:</b>' + elem.style + '</li>');
      })
    })
  $('#new-doughnut').on('submit', function(e){
    e.preventDefault();
    $.ajax('https://api.doughnuts.ga/doughnuts',
      {
        method:'POST',
        data: {
          flavor: $('#new-doughnut-flavor').val(),
          style: $('#new-doughnut-style').val()
        }
      })
    .done(function(data){
        $('#doughnuts').append('<li><b>Flavor:</b>' + data.flavor +
          '| <b>Style:</b>' + data.style + '</li>');
    });
  })


})