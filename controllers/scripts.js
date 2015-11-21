/*JSLint warning settings*/
/*jslint  plusplus: true, devel: true*/
/*global $ */

//These variables are shown to every function
var i, html, k;


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
} else if (location.pathname == "/feed.html" ) {
    var urlCurrent = "http://localhost:3000/feeds";
} else if (location.pathname == "/health.html" ) {
    var urlCurrent = "http://localhost:3000/healths";
} else if (location.pathname == "/horsecalendar.html" ) {
    var urlCurrent = "http://localhost:3000/horsehours";
} else if (location.pathname == "/addHealth.html" ) {
    var urlCurrent = "http://localhost:3000/horses";
} else if (location.pathname == "/addFeed.html" ) {
    var urlCurrent = "http://localhost:3000/horses";
} else if (location.pathname == "/addPaddoc.html" ) {
    var urlCurrent = "http://localhost:3000/horses";
}  else if (location.pathname == "/addHorsecalendar.html" ) {
    var urlCurrent = "http://localhost:3000/horses";
}  else if (location.pathname == "/addTodo.html" ) {
    var urlCurrent = "http://localhost:3000/persons";
}  else if (location.pathname == "/addHourcalendar.html" ) {
    var urlCurrent = "http://localhost:3000/persons";
} else {
    console.log("HTML FILE MISSING!");
}
console.log(urlCurrent);


//Wait document ready event
$(document).ready(function () {
    "use strict";
    /* HTML5 solution to search
    $("#search").click(function () {
        console.log("Search triggered");
        var text = $("#search_text").val();
        console.log("search_text: " + text);
        $.ajax({
            
            method: 'GET',
            url: 'http://localhost:3000/persons/name=' + text + '/username=' + localStorage.username
        }).done(buildTable);
    });
    */
    
    var setting =  {
        
        method: "GET",  //default method is GET
        url: urlCurrent,
        // HTML% solution url: "http://localhost:3000/friends/username=" + localStorage.username,
        dataType: "json"
        
    };
    
    $.ajax(setting).done(buildTable);
    
});
    
/**
  *Creates a modify view for our application
  */
// HTML5 solution function buildModifyUI(person_data, data) {
function buildModifyUI(item_data, data) {
    "use strict";
    console.log("buildModifyUI data.length: " + data.length);
    var headers = Object.keys(data[0]);
    var row_html;
    console.log("headers.length: " + headers.length);

    var html = $("<div></div>");
    $("<h1 class='oma_h1'>Muokkaa/poista tietoja</h1>").appendTo(html);
    for (var k = 1; k < (headers.length-1) ; k++) {
        
            //Create data and add it to row          
            $("<h4 class ='oma_h4'>" + [headers[k]] + "</h4>").appendTo(html);
            $("<input type='text' class='form-control text-center center-block' style = 'width:300px' style='text-align: center' value='" + data[i][headers[k]] + "' id ='" + [headers[k]] + "'/><br>").appendTo(html);
        }
        if (location.pathname == "/horse.html" ) {    
            $("<form target='_blank' action='http://www.sukuposti.net/hevonen/hae'><input class='btn btn-primary btn-sm' style = 'width:100px' type='submit' value='Hae Linkki'></form>").appendTo(html);
        };
        $("<br><br><input type='button' class='btn btn-primary btn-sm' value='Update'" + "id = 'update'/> <input type='button' class='btn btn-primary btn-sm' value='Delete' id = 'delete'/> <input type='button' class='btn btn-primary btn-sm' value='Cancel' id = 'cancel'/>").appendTo(html);   
    
    
    $("section").html(html); //HTML5 was "body"
    
    $("#delete").click(function () {
        
        if (confirm("Olethan varma tiedon poistamisesta ?") == true) {
            $.ajax({

                method: 'DELETE',
                url: urlCurrent + "/id=" + item_data._id

            }).done(function (data) {location.reload(true)});  //reload page after delete done

            } else {
            location.reload(true);
        };
        
//  HTML5 solution      
//        $.ajax({
//            method: 'DELETE',
//            url: 'http://localhost:3000/persons/id=' + person_data._id + '/username=' + localStorage.username
//        }).done(function (data) {
//            location.reload(true);
//        });
//        
    });
    
    $("#update").click(function () {
        console.log("Update pressed");
        
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
                Ilmoittaja: $("#Ilmoittaja").val(),
                Ilmoitus: $("#Ilmoitus").val(),
            };
         } else if (location.pathname == "/hourcalendar.html" ) {
            var temp = {
                id: item_data._id,
                Päivä: $("#Päivä").val(),
                Ilmoittaja: $("#Ilmoittaja").val(),
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
                Kellonaika: $("#Kellonaika").val(),
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
         } else if (location.pathname == "/feed.html" ) {
            var temp = {
                id: item_data._id,
                Hevonen: $("#Hevonen").val(),
                Aamuruoka: $("#Aamuruoka").val(),
                Päiväruoka: $("#Päiväruoka").val(),
                Iltaruoka: $("#Iltaruoka").val(),
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
        
 /*HTML5 solution
        $.ajax({
            method: "PUT",
            url: 'http://localhost:3000/persons',
            dataType: 'json',
            data: temp
        }).done(function (data) {
            console.log("update response received");
            location.reload(true);
        });*/
        
    });
    
    //If cancel, just reload original page    
    $("#cancel").click(function () {
        location.reload(true);
    });
}

function buildTable(data) {
    "use strict";
            
    console.log("buildTable: " + data);
    console.log("buildTable data.length: " + data.length);
    //Get all keys (attribute names) from json object
    //console.log(Object.keys(data[0]));
    $("tbody_oma").children().remove(); //HTML5 was tbody
    $("thead_oma").children().remove(); //HTML5 was thead
    //Check that there are elements in array
    if (data.length > 0) {
        //Create table headers dynamically
        var headers = Object.keys(data[0]);
        console.log("headers.length: " + headers.length);
        //Create row for headers
       html = $("<tr></tr>");
        for (i = 1; i < headers.length - 1; i++) {
            //Create header and add it to orw
            $("<th class='th_oma'>" + headers[i] + "</th>").appendTo(html);
        }
        //Add blank block to last (_v not shown)
        $("<th class='th_oma'></th>").appendTo(html);
        //Add row to thead element
        $(html).appendTo(".thead_oma");
    }
    
    //Create table content dynamically
    for (i = 0; i < data.length; i++) {

        //All tbody tables, use selectors to use only one if several tbodys in use.

        //Create data rows also dynamically, check that rows length is > 0
        if (data.length > 0) {

            //Create row for data
            html = $("<tr></tr>");

            //(headers.length-2) because of version numbering (_v) with mongodb not needed to show end users
            if (urlCurrent == "http://localhost:3000/horses"  ) {
                for (k = 1; k < (headers.length-2) ; k++) {
                    //Create data and add it to row
                    $("<td align='center'>" + data[i][headers[k]] + "</td>").appendTo(html);
                }
                $("<td align='center'><input type='button' class='btn btn-primary btn-sm' id=" +  data[i][headers[k]] + " value='Suku'/></td>").appendTo(html);
                

            } else {
                for (k = 1; k < (headers.length-1) ; k++) {
                //Create data and add it to row
                $("<td align='center'>" + data[i][headers[k]] + "</td>").appendTo(html);
                }
            }
            //Add "muokkaa" button
            $("<td align='center'><input type='button' class='btn btn-primary btn-sm' id=" + data[i]._id + " value='Muokkaa'/></td>").appendTo(html);

            $(html).appendTo(".tbody_oma");

        }
    }

    //Add Horse names from horse table to class "horses_add"
            console.log("add Horses data.length: " + data.length);
               var html2 = "<div></div>";
                    html2 += "<select name='Hevonen' class='form-control center-block center-value' style = 'width:300px;padding-left: 115px' >";
                    //Fetch horse names from horse table dynamically
                    for (i = 0; i < data.length; i++) {
                                    html2 += "<option>" + data[i][headers[1]] + "</option>";
                    }
                    html2 += "</select>";
            $(html2).appendTo(".horses_add");
    //Add Horse names from horse table END
    
    //Add Person names from persons table to class "persons_add"
            console.log("add Persons data.length: " + data.length);
               var html2 = "<div></div>";
                    html2 += "<select name='Ilmoittaja' class='form-control center-block center-value' style = 'width:300px;padding-left: 85px' >";
                    //Fetch horse names from horse table dynamically
                    for (i = 0; i < data.length; i++) {
                                    html2 += "<option>" + data[i][headers[1]] + "</option>";
                    }
                    html2 += "</select>";
            $(html2).appendTo(".person_add");
    //Add Person names from persons table END
    

    //Get all elements from DOM where element has
    //attribute 'type' with value 'button'. Then add
    //event handler for click event for each of them
    $("[type=button]").click(function (click_data) {

        //Loop trough all the values
        for (i = 0; i < data.length; i++) {

            //Check if id from button matches one of 
            //person id
            if (click_data.currentTarget.id === data[i]._id) {
                buildModifyUI(data[i], data);
                break;
            }
        }
    });
    
    //Open sukuposti.net from horses main page
        $("[value=Suku]").click(function (click_data) {

            console.log("Open sukuposti");
            console.log(click_data);
            //Check if id from button matches on of horse id
                if (click_data.currentTarget.id == "?") {
                    
                    console.log("Sukuposti hae ikkuna");
                    window.open("http://www.sukuposti.net/hevonen/hae");
                    
                } else {
                    
                    window.open(click_data.currentTarget.id);
                }                 
        });
}

//End Wait document ready event