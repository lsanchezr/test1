$( "#datepicker" ).datepicker();

var colsManto = [
  {title : 'name',width: '350px'},
  {title : 'visits'},
  {title : 'mail'},
  {title : 'Date'},
  {title : 'last'},
  {title : 'first'}
];

var tableManto = $('#table_manto').DataTable({
  bPaginate : false,
  sPaginationType: 'first_last_numbers',
  columns   : colsManto,
  data      : [],
  dom       : 'Bfrtip',
  select    : 'single',
  altEditor : true,
  order     : [[ 0, 'asc' ]],
  iDisplayLength: 10,
  buttons   : [],
  bDestroy  : true,
  bAutoWidth: false,
  searching : false,
  language : lenguaje
});

function js_buscar(){
  var date = $.datepicker.formatDate("m-dd-yy", $('#datepicker').datepicker('getDate'));
  getLogDate(date);
}

function js_limpiar(){
  $('#datepicker').val("");
  getLogDate('');
}

function getLogDate(date){
  tableManto.clear().draw(false);
  $.each(DB.logs, function (keyDate, objDate) {
      if(date == ''){
        $.each(objDate, function (key, objUser) {
          tableManto.row.add([objUser.name,objUser.visits,objUser.mail,keyDate,objUser.last,objUser.first]).draw(false);
        });
      }else{
        if(keyDate == date){
          $.each(objDate, function (key, objUser) {
            tableManto.row.add([objUser.name,objUser.visits,objUser.mail,keyDate,objUser.last,objUser.first]).draw(false);
          });
        }
      }
  });
}

getLogDate('');
