function rank(){
    var name = localStorage.getItem('player');
    var point = localStorage.getItem('point');
    var table = document.getElementById("tabelaRank");

    var row = table.insertRow(1);
    
    var nameRank = row.insertCell(0);
    var pointRank = row.insertCell(1);

    nameRank.innerText = name;
    pointRank.innerText = 1000 - point + " Segundos";
} 

rank()
