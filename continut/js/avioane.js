function incarcaAvioane()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "resurse/avioane.xml", false);
    xhttp.send();
    
    var xmlContent=xhttp.responseText;
    var lines = xmlContent.split('\n');
    lines.splice(0,2);
    var newXmlContent=lines.join('\n');

    table = document.createElement('table');

    if (window.DOMParser){ // Standard browsers
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(newXmlContent, "text/xml");
        //console.log("daaaa");
    }
    else { // Internet Explorer
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(newXmlContent); 
    }

    //console.log(xmlDoc);

    var avioane=xmlDoc.getElementsByTagName('avioane');
    avioane=avioane[0].getElementsByTagName("avion");
    //console.log(avioane);
    //pentru fiecare avion
    
    var tr = table.insertRow();
        var td = tr.insertCell();
        td.innerHTML="Denumire";
        var td = tr.insertCell();
        td.innerHTML="Viteza maxima";
        var td = tr.insertCell();
        td.innerHTML="Masa";
        var td = tr.insertCell();
        td.innerHTML="Tip motor";
        var td = tr.insertCell();
        td.innerHTML="Producator";
        var td = tr.insertCell();
        td.innerHTML="Primul zbor";
        var td = tr.insertCell();
        td.innerHTML="Lungime";
        var td = tr.insertCell();
        td.innerHTML="Anvergura aripi";
        var td = tr.insertCell();
        td.innerHTML="Latime";
        var td = tr.insertCell();
        td.innerHTML="Capacitate rezervor";
        td.colSpan = '10';

        //console.log(avioane);
    for(var i=0, l=avioane.length; i<l; i++){
        var avion = avioane[i];
        //console.log(avion);
        //console.log(avioane.length);

        var denumire=avion.getElementsByTagName("denumire")[0].innerHTML;
        var vitezaMaxima=avion.getElementsByTagName("viteza_maxima")[0].innerHTML;
        var masa=avion.getElementsByTagName("masa")[0].innerHTML;
        var tipMotor=avion.getElementsByTagName("tip_motor")[0].innerHTML;
        var producator=avion.getElementsByTagName("producator")[0].innerHTML;
        var primulZbor=avion.getElementsByTagName("primul_zbor")[0].innerHTML;
        var specificatii=avion.getElementsByTagName("specificatii");
        var lungime=specificatii[0].getElementsByTagName("lungime")[0].innerHTML;
        var anverguraAripi=specificatii[0].getElementsByTagName("anvergura_aripi")[0].innerHTML;
        var inaltime=specificatii[0].getElementsByTagName("inaltime")[0].innerHTML;
        var capacitateRezervor=avion.getElementsByTagName("capacitate_rezervor")[0].innerHTML;

        tr = table.insertRow();
        td = tr.insertCell();
        td.innerHTML = denumire
        td = tr.insertCell();
        td.innerHTML = vitezaMaxima;
        td = tr.insertCell();
        td.innerHTML = masa;
        td = tr.insertCell();
        td.innerHTML = tipMotor;
        td = tr.insertCell();
        td.innerHTML = producator;
        td = tr.insertCell();
        td.innerHTML = primulZbor;
        td = tr.insertCell();
        td.innerHTML = lungime;
        td = tr.insertCell();
        td.innerHTML = anverguraAripi;
        td = tr.insertCell();
        td.innerHTML = inaltime;
        td = tr.insertCell();
        td.innerHTML = capacitateRezervor;
    }
    
    //document.body.appendChild(table);
    var div = document.getElementById('tabela_avioane');
    div.append(table);
    //console.log(avioane.length);
}