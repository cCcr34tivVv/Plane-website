function tabel()
{
    const element = document.getElementById('Alege_buton');
    
    element.addEventListener("click",function(){
        let nr_collinie=document.getElementById('numar_linie/coloana').value;
        let selectat=document.querySelector('input[name="linie/coloana"]:checked').value;
        let culoare_celula = document.getElementById('culoare_celula').value;
        //console.log(culoare_celula);

        let table=document.getElementById('tabela_invat');

        if(selectat=='linie'){
            //console.log("linie");
            let nrRows=table.rows.length;
            if(nr_collinie>=nrRows){
                nr_collinie=-1;
            }
            let newRow = table.insertRow(nr_collinie);
            
            let nrCells=table.rows[0].cells.length;
            for(let i=0;i<nrCells;i++){
                let newCell = newRow.insertCell(i);
                newCell.style.backgroundColor = culoare_celula;
            }
        }
        else{
            //console.log("coloana");
            let nrCols=table.rows[0].cells.length;
            if(nr_collinie>=nrCols){
                nr_collinie=-1;
            }
            //let newCol = table.insertColumn(nr_collinie);
            
            let nrCells=table.rows[0].cells.length;
            for(let i=0;i<nrCells;i++){
                let newCell = table.rows[i].insertCell(nr_collinie);
                newCell.style.backgroundColor = culoare_celula;
            }
        }
    })
}