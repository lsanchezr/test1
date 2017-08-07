var dataFiltro = [];
var dataSet = [
  [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800',' ',' ',' ',' ',' ',' ',' '],
  [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750',' ',' ',' ',' ',' ',' ',' '],
  [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000',' ',' ',' ',' ',' ',' ',' '],
  [ 'Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060',' ',' ',' ',' ',' ',' ',' '],
  [ 'Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700',' ',' ',' ',' ',' ',' ',' '],
  [ 'Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000',' ',' ',' ',' ',' ',' ',' '],
  [ 'Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500',' ',' ',' ',' ',' ',' ',' '],
  [ 'Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900',' ',' ',' ',' ',' ',' ',' '],
  [ 'Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500',' ',' ',' ',' ',' ',' ',' '],
  [ 'Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600',' ',' ',' ',' ',' ',' ',' '],
  [ 'Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560',' ',' ',' ',' ',' ',' ',' '],
  [ 'Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000',' ',' ',' ',' ',' ',' ',' '],
  [ 'Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600',' ',' ',' ',' ',' ',' ',' '],
  [ 'Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500',' ',' ',' ',' ',' ',' ',' ']
];

google.charts.load('current', {'packages':['corechart']});
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
    for (var x = 0; x < dataSet.length; x++){
      if(dataFiltro[i] == dataSet[x][2]){
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
    for (var x = 0; x < dataSet.length; x++){
      if(dataFiltro[i] == dataSet[x][2]){
        contadorElementos++;
        suma = suma + Number(dataSet[x][3]);
        arrPromedioLocacion[i] = [dataFiltro[i],(suma/contadorElementos)];
      }
    }
    suma = 0;
    contadorElementos = 0;
  }
  return arrPromedioLocacion;
}

filtroLocacion(DB.dataSet);

function drawChart() {

  var data1 = new google.visualization.DataTable();
  data1.addColumn('string', 'Locación');
  data1.addColumn('number', 'Valor');
  data1.addRows(graficaElementosLocacion());

  var data2 = new google.visualization.DataTable();
  data2.addColumn('string', 'Locación');
  data2.addColumn('number', 'Promedio');
  data2.addRows(graficaPromedioLocacion());


  var options = {
    'width' :400,
    'height':300
  };

  var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
  var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));

  chart1.draw(data1, options);
  chart2.draw(data2, options);
}
