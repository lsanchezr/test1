var dataFiltro = [];

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

filtroLocacion(DB.dataSet);

function drawChart() {

  var dataPelisGrafica = new google.visualization.DataTable();
  dataPelisGrafica.addColumn('string', 'Title');
  dataPelisGrafica.addColumn('number', 'Year');

  for(var i=0; i<DB.pelis.data.length;i++){
     dataPelisGrafica.addRow([DB.pelis.data[i].Title,DB.pelis.data[i].Year]);
  }

  var dataPelis = new google.visualization.DataTable();
  dataPelis.addColumn('string', 'Poster');
  dataPelis.addColumn('string', 'Title');
  dataPelis.addColumn('string', 'Type');
  dataPelis.addColumn('string', 'Year');
  dataPelis.addColumn('string', 'imdbID');

  for(var i=0; i<DB.pelis.data.length;i++){
    dataPelis.addRow([DB.pelis.data[i].Poster,DB.pelis.data[i].Title,DB.pelis.data[i].Type,DB.pelis.data[i].Year+"",DB.pelis.data[i].imdbID]);
  }

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

  var table = new google.visualization.Table(document.getElementById('table_div'));
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
  var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));

  var table1 = new google.visualization.Table(document.getElementById('table_div1'));
  var table2 = new google.visualization.Table(document.getElementById('table_div2'));

  table.draw(dataPelis,{showRowNumber: true, width: '100%', height: '100%'});
  chart.draw(dataPelisGrafica, options);

  table1.draw(data1,{showRowNumber: true, width: '100%', height: '100%'});
  chart1.draw(data1, options);
  table2.draw(data1,{showRowNumber: true, width: '100%', height: '100%'});
  chart2.draw(data2, options);
}
