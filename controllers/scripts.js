/*JSLint warning settings*/
/*jslint  plusplus: true, devel: true*/
/*global $ */

//These variables are shown to every function

console.log(location.pathname);
if (location.pathname == "/horse.html" ) {
    var urlCurrent = "http://localhost:3000/horses";
} else if (location.pathname == "/person.html" ) {
    var urlCurrent = "http://localhost:3000/persons";
} else if (location.pathname == "/todo.html" ) {
    var urlCurrent = "http://localhost:3000/todos";
} else if (location.pathname == "/hourcalendar.html" ) {
    var urlCurrent = "http://localhost:3000/tasks";
} else if (location.pathname == "/testi.html" ) {
    var urlCurrent = "http://localhost:3000/testit";
} else if (location.pathname == "/stablecalendar.html" ) {
    var urlCurrent = "http://localhost:3000/hours";
} else if (location.pathname == "/paddoc.html" ) {
    var urlCurrent = "http://localhost:3000/paddocs";
} else if (location.pathname == "/health.html" ) {
    var urlCurrent = "http://localhost:3000/healths";
} else if (location.pathname == "/horsecalendar.html" ) {
    var urlCurrent = "http://localhost:3000/horsehours";
} else {
    console.log("HTML FILE MISSING!");
}
console.log(urlCurrent);


//Wait document ready event
$(document).ready(function () {
    
    "use strict";
    console.log("jquery onload triggered");
         
    var setting =  {
        
        method: "GET",  //default method is GET
        url : urlCurrent,
        dataType: "json"
        
    };
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        var i = 0, k = 0, headers = 0, row = 0, row2 = 0;
  
        //get all keys (attribute names)from json object
        console.log(Object.keys(data[0]));
        
        //Create headers also dynamically, check that rows length is > 0
        if (data.length > 0) {
            headers = Object.keys(data[0]);
            //Create row for headers
            row = $("<tr></tr>");
            //(headers.length-1) because of version numbering (_v) with mongodb
            for (i = 1; i < (headers.length -1) ; i++) {
                //Create header and add it to row
                $("<th style='width: 20px' class = 'oma_th'>" + headers[i] + "</th>").appendTo(row);
            }
            $("<th style='width: 20px' class = 'oma_th'>" + " " + "</th>").appendTo(row);
            
            //Add row to thead element
            $(row).appendTo(".thead_oma");
        }

        for (i = 0; i < data.length; i++) {

            //All tbody tables, use selectors to use only one if several tbodys in use.
            
            //Create data rows also dynamically, check that rows length is > 0
            if (data.length > 0) {

                //Create row for data
                row2 = $("<tr></tr>");
                
                //(headers.length-1) because of version numbering (_v) with mongodb
                if (urlCurrent == "http://localhost:3000/horses"  ) {
                    for (k = 1; k < (headers.length-2) ; k++) {
                        //Create data and add it to row
                        $("<td align='center'>" + data[i][headers[k]] + "</td>").appendTo(row2);
                    }
                    $("<td align='center'><input type='button' class='btn btn-primary' id=" +  data[i][headers[k]] + " value='Suku'/></td>").appendTo(row2);
                    
                } else {
                    for (k = 1; k < (headers.length-1) ; k++) {
                    //Create data and add it to row
                    $("<td align='center'>" + data[i][headers[k]] + "</td>").appendTo(row2);
                    }
                    
                }
                //Add "muokkaa" button
                $("<td align='center'><input type='button' class='btn btn-primary' id=" + data[i]._id + " value='Muokkaa'/></td>").appendTo(row2);

                $(row2).appendTo(".tbody_oma");
            }
        }     
        
        //Open sukuposti.net from horses page
        $("[value=Suku]").click(function (click_data) {

            console.log("Open sukuposti");
            console.log(click_data);
            //Check if id from button matches on of person id
                if (click_data.currentTarget.id == "?") {
                    
                    console.log("Sukuposti hae ikkuna");
                    window.open("http://www.sukuposti.net/hevonen/hae");
                    
                } else {
                    
                    window.open(click_data.currentTarget.id);
                }                 
        });
        
        //Get all elements from DOM where element has attribute 'type' with value 'button'
        //Then add event handler for click event for each of them.
        $("[type=button]").click(function (click_data) {

            console.log("click_data: " + click_data);
            for (i = 0; i < data.length; i++) {
                
                //Check if id from button matches on of person id
                if (click_data.currentTarget.id == data[i]._id) {
                    
                    buildModifyUI(data[i], i);
                    console.log("break");
                    break;
                }
            }
        });
    });
});

function buildModifyUI(item_data, i) {
    
    var setting =  {
        
        method: "GET",  //default method is GET
        url: urlCurrent,
        dataType: "json"
        
    };
        
    $.ajax(setting).done(function (data) {
        console.log(data);
        console.log("headers.length: ");
        console.log(i);
        console.log("data.length: ");
        console.log(data.length);
        
        //get all keys (attribute names)from json object
        console.log(Object.keys(data[0]));
     
        headers = Object.keys(data[0]);
        
//Test persons fetch from persons table START, Name ID still missing???
                row_test1 = $("<select></select>");
                for (k = 0; k < (data.length) ; k++) {

                $("<option id='Nimi' value='" + data[k][headers[1]] + "' >" + data[k][headers[1]] + "</option>").appendTo(row_test1);

                }
                $("<option selected='selected'>" + data[i][headers[1]] + "</option>").appendTo(row_test1);
                var html_test = 
                    row_test = $("<div></div>");
                    $("<h1 class='oma_h1'>Muokkaa/poista tietoja</h1>").appendTo(row_test);
                    $("<h4 class ='oma_h4'>" + [headers[1]] + "</h4>").appendTo(row_test);
                    $(row_test1).appendTo(row_test);

                    for (k = 2; k < (headers.length-1) ; k++) {
                        //Create data and add it to row          
                        $("<h4 class ='oma_h4'>" + [headers[k]] + "</h4>").appendTo(row_test);
                        $("<input type='text' style='text-align: center' value='" + data[i][headers[k]] + "' id ='" + [headers[k]] + "'/><br>").appendTo(row_test);
                    }

                    $("<br><br><input type='button' class='btn btn-primary' value='Update'" + "id = 'update'/><input type='button' class='btn btn-primary' value='Delete' id = 'delete'/><input type='button' class='btn btn-primary' value='Cancel' id = 'cancel'/>").appendTo(row_test);  

//Test persons fetch from persons table END
        
        
        //Create html view also dynamically, (check that rows length is > 0??)
        var html = 
            row_html = $("<div></div>");
            $("<h1 class='oma_h1'>Muokkaa/poista tietoja</h1>").appendTo(row_html);
             
             for (k = 1; k < (headers.length-1) ; k++) {
                        //Create data and add it to row          
                        $("<h4 class ='oma_h4'>" + [headers[k]] + "</h4>").appendTo(row_html);
                        $("<input type='text' style='text-align: center' value='" + data[i][headers[k]] + "' id ='" + [headers[k]] + "'/><br>").appendTo(row_html);
                    }
            if (location.pathname == "/horse.html" ) {    
                $("<form target='_blank' action='http://www.sukuposti.net/hevonen/hae'><input type='submit' value='Hae Linkki'></form>").appendTo(row_html);
            };
            $("<br><br><input type='button' class='btn btn-primary' value='Update'" + "id = 'update'/><input type='button' class='btn btn-primary' value='Delete' id = 'delete'/><input type='button' class='btn btn-primary' value='Cancel' id = 'cancel'/>").appendTo(row_html);    
        
                       
    $("section").html(html);
        
    //#delete hakee id elementtiä 'delete'. Jos .delete hakisi class elementtiä 'delete'
    $("#delete").click(function () {
        
        if (confirm("Olethan varma tiedon poistamisesta ?") == true) {
            $.ajax({

                method: 'DELETE',
                url: urlCurrent + "/id=" + item_data._id

            }).done(function (data) {location.reload(true)});  //reload page after delete done

            } else {
            location.reload(true);
        };
    });
    
    //#update hakee id elementtiä 'update'.
    $("#update").click(function () {
        console.log(location.pathname);

        if (location.pathname == "/horse.html" ) {
            var temp = {
                id: item_data._id,
                Nimi: $("#Nimi").val(),
                Kutsumanimi: $("#Kutsumanimi").val(),
                Syntymäaika: $("#Syntymäaika").val(),
                Sukuposti: $("#Sukuposti").val(),

            };     
         } else if (location.pathname == "/person.html" ) {
            var temp = {
                id: item_data._id,
                Nimi: $("#Nimi").val(),
                Osoite: $("#Osoite").val(),
                Kategoria: $("#Kategoria").val(),
                Puhelin: $("#Puhelin").val(),
                Sähköposti: $("#Sähköposti").val(),
                Internet: $("#Internet").val(),
            };
         } else if (location.pathname == "/todo.html" ) {
            var temp = {
                id: item_data._id,
                Ilmoitus: $("#Ilmoitus").val(),
                Kuvaus: $("#Kuvaus").val(),
                Toimenpide: $("#Toimenpide").val(),
            };
         } else if (location.pathname == "/hourcalendar.html" ) {
            var temp = {
                id: item_data._id,
                Aika: $("#Aika").val(),
                Henkilö: $("#Henkilö").val(),
                Tehtävä: $("#Tehtävä").val(),
                Tunnit: $("#Tunnit").val(),
            };
         } else if (location.pathname == "/testi.html" ) {
            var temp = {
                id: item_data._id,
                Testi_1: $("#Testi_1").val(),
                Testaaja: $("#Testaaja").val(),
                Tulos: $("#Tulos").val(),
            };
         } else if (location.pathname == "/stablecalendar.html" ) {
            var temp = {
                id: item_data._id,
                Kello: $("#Kello").val(),
                Maanantai: $("#Maanantai").val(),
                Tiistai: $("#Tiistai").val(),
                Keskiviikko: $("#Keskiviikko").val(),
                Torstai: $("#Torstai").val(),
                Perjantai: $("#Perjantai").val(),
                Lauantai: $("#Lauantai").val(),
                Sunnuntai: $("#Sunnuntai").val(),
            };
         } else if (location.pathname == "/paddoc.html" ) {
            var temp = {
                id: item_data._id,
                Hevonen: $("#Hevonen").val(),
                Aamutarha: $("#Aamutarha").val(),
                Päivätarha: $("#Päivätarha").val(),
                Iltatarha: $("#Iltatarha").val(),
                Huomio: $("#Huomio").val(),
            };
         } else if (location.pathname == "/health.html" ) {
            var temp = {
                id: item_data._id,
                Hevonen: $("#Hevonen").val(),
                Rokotukset: $("#Rokotukset").val(),
                Madotukset: $("#Madotukset").val(),
                Hieronnat: $("#Hieronnat").val(),
                Yleistä: $("#Yleistä").val(),
            };
         } else if (location.pathname == "/horsecalendar.html" ) {
            var temp = {
                id: item_data._id,
                Aika: $("#Aika").val(),
                Hevonen: $("#Hevonen").val(),
                Laji: $("#Laji").val(),
                Tunnit: $("#Tunnit").val(),
            };
         } else {
             console.log("HTML FILE MISSING!"); 
         }
             
        $.ajax({
            
            method: 'PUT',
            url: urlCurrent,
            //dataType: 'json',
            data: temp
            
        }).done(function (data) {location.reload(true)});  //reload page after update done
    });
        
    //If cancel, just reload original page    
    $("#cancel").click(function () {
        location.reload(true);
    });
    });    
}
