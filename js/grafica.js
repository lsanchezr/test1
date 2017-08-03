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

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Locación');
  data.addColumn('number', 'Valor');

  for (var i = 0; i < dataSet.length; i++){
    dataFiltro[i] = [dataSet[i][2],1];
  }

  data.addRows(dataFiltro);

  var options1 = {'title':'Número de elementos por locación',
                 'width':400,
                 'height':300};

  var options2 = {'title':'Promedio salarial por locación',
                  'width':400,
                  'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
  var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
  chart1.draw(data, options1);
  chart2.draw(data, options2);
}
