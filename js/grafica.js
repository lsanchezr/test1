var dataFiltro = [];

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

filtroLocacion(dataSet);

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
