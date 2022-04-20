class Avion{
    constructor(nume_avion, cantitate)
    {
        this.nume_avion=nume_avion;
        this.cantitate=cantitate;
    }
}

function buttonClicked()
{
    var nume=document.getElementById("nume_avion").value;
    var cnt=document.getElementById("cantitate").value;

    const avion=new Avion(nume,cnt);
    var list_avioane=JSON.parse(localStorage.getItem('avion'));
    if (list_avioane==null){
        list_avioane=[];
    }

    list_avioane.push(avion);
    localStorage.setItem('avion',JSON.stringify(list_avioane));

    //console.log(list_avioane);
}

function addRow(tableID,id,element) {
    // Get a reference to the table
    let tableRef = document.getElementById(tableID);
    //console.log(tableRef);
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
  
    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
  
    // Append a text node to the cell
    let newText = document.createTextNode(id);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(1);
    newText = document.createTextNode(element.nume_avion);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(2);
    newText = document.createTextNode(element.cantitate);
    newCell.appendChild(newText);
}

function viewTable(){
    var list_avioane=JSON.parse(localStorage.getItem('avion'));
    if (list_avioane==null){
        list_avioane=[];
    }

    for(var i=0;i<list_avioane.length;i++){
        addRow('Product_table',i+1,list_avioane[i]);
    }
}
