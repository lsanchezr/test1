var dataFiltro = [];

var lenguaje = {
  'sProcessing'    :  'Procesando...',
  'sLengthMenu'    :  'Mostrar _MENU_ registros',
  'sZeroRecords'   :  'No se encontraron resultados',
  'sEmptyTable'    :  'Ningún dato disponible en esta tabla',
  'sInfo'          :  'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
  'sInfoEmpty'     :  'Mostrando registros del 0 al 0 de un total de 0 registros',
  'sInfoFiltered'  :  '(filtrado de un total de _MAX_ registros)',
  'sInfoPostFix'   :  '',
  'sSearch'        :  'Buscar:',
  'sUrl'           :  '',
  'sInfoThousands' :  ',',
  'sLoadingRecords':  'Cargando...',
  'oPaginate'      :  {
                        'sFirst'     :  'Primero',
                        'sLast'      :  'Último',
                        'sNext'      :  'Siguiente',
                        'sPrevious'  :  'Anterior'
                      }
  };

var cols = [
  {title : 'Title',width: '350px'},
  {title : 'Type'},
  {title : 'Year'},
  {title : 'imdbID'},
  {title : 'Poster'}
];

var table = $('#table_div').DataTable({
  bPaginate : false,
  sPaginationType: 'first_last_numbers',
  columns   : cols,
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

var cols1 = [
  {title : 'Locación',width: '350px'},
  {title : 'Valor'}
];

var table1 = $('#table_div1').DataTable({
  bPaginate : false,
  sPaginationType: 'first_last_numbers',
  columns   : cols1,
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

var cols2 = [
  {title : 'Locación',width: '350px'},
  {title : 'Promedio'}
];

var table2 = $('#table_div2').DataTable({
  bPaginate : false,
  sPaginationType: 'first_last_numbers',
  columns   : cols2,
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

google.charts.load('current', {'packages':['corechart','table']});
google.charts.setOnLoadCallback(drawChart);

Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

function filtroLocacion(data){
  for (var i = 0; i < data.length; i++){
    dataFiltro[i] = data[i][2];
  }
  dataFiltro = dataFiltro.unique();
}

function graficaElementosLocacion(){
  var arrElementosLocacion = [];
  var contadorElementos = 0;
  for (var i = 0; i < dataFiltro.length; i++){
    for (var x = 0; x < DB.dataSet.length; x++){
      if(dataFiltro[i] == DB.dataSet[x][2]){
        contadorElementos++;
        arrElementosLocacion[i] = [dataFiltro[i],contadorElementos];
      }
    }
    contadorElementos = 0;
  }
  return arrElementosLocacion;
}

function graficaPromedioLocacion(){
  var arrPromedioLocacion = [];
  var suma = 0;
  var contadorElementos = 0;
  for (var i = 0; i < dataFiltro.length; i++){
    for (var x = 0; x < DB.dataSet.length; x++){
      if(dataFiltro[i] == DB.dataSet[x][2]){
        contadorElementos++;
        suma = suma + Number(DB.dataSet[x][3]);
        arrPromedioLocacion[i] = [dataFiltro[i],(suma/contadorElementos)];
      }
    }
    suma = 0;
    contadorElementos = 0;
  }
  return arrPromedioLocacion;
}

function graficaPelis(){
  var arrPelis = [];
  for(var i=0; i<DB.pelis.data.length;i++){
    arrPelis[i] = [DB.pelis.data[i].Title,DB.pelis.data[i].Year];
  }
  return arrPelis;
}

filtroLocacion(DB.dataSet);

function drawChart() {

  var dataPelisGrafica = new google.visualization.DataTable();
  dataPelisGrafica.addColumn('string', 'Title');
  dataPelisGrafica.addColumn('number', 'Year');
  dataPelisGrafica.addRows(graficaPelis());

  for(var i=0; i<DB.pelis.data.length;i++){
     table.row.add([DB.pelis.data[i].Title,DB.pelis.data[i].Type,DB.pelis.data[i].Year+"",DB.pelis.data[i].imdbID,'<div style="width:530px;overflow:hidden;" title="'+DB.pelis.data[i].Poster+'">'+DB.pelis.data[i].Poster+'</div>']).draw( false );
  }

  var data1 = new google.visualization.DataTable();
  data1.addColumn('string', 'Locación');
  data1.addColumn('number', 'Valor');
  data1.addRows(graficaElementosLocacion());
  table1.rows.add(graficaElementosLocacion()).draw(false);

  var data2 = new google.visualization.DataTable();
  data2.addColumn('string', 'Locación');
  data2.addColumn('number', 'Promedio');
  data2.addRows(graficaPromedioLocacion());
  table2.rows.add(graficaPromedioLocacion()).draw(false);

  var options = {
    'width' :400,
    'height':300
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
  var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));

  chart.draw(dataPelisGrafica, options);
  chart1.draw(data1, options);
  chart2.draw(data2, options);

}
