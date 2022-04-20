function worker()
{
    const element =document.getElementById('Add_product');

    element.addEventListener("click",function(){
        buttonClicked();
        var list_avioane=JSON.parse(localStorage.getItem('avion'));
        if (list_avioane==null){
            list_avioane=[];
        }
        let id=list_avioane.length;
        addRow('Product_table',id,list_avioane[list_avioane.length-1]);
    })
}