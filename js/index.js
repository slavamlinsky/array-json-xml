//Array of objects with data from user input (name/value pairs)
var myData = [];

//function to check wether we recieve a valid values from user in input field

function isValid(value) {
    return /^[a-zA-Z0-9]+$/.test(value)
 }

function addRecord(){
    //checking the inpur value format
    //if valid - add, if not - error message
    
    const text = document.querySelector('input').value.split("=");    
    if(text.length == 2 && isValid(text[0].trim()) && isValid(text[1].trim())){
                        
        let record = text[0].trim() + "=" + text[1].trim();        
        document.querySelector('textarea').value += record + "\n";

        // adding a pair name/value to myData array

        const object = {name: text[0].trim(), value: text[1].trim()}
        myData.push(object);
    }
    else{
        alert('Wrong format of Name/Value pair (only letters and digits are allowed)');
    }

    //console.log(myData);

    //alert(text);

    //alert(document.querySelector('input').value);
    //document.querySelector('textarea').innerHTML +=document.querySelector('input').value + "\n";
}

function deleteAll(){
     if(confirm("Do you want to clear all data?")){
         document.querySelector('textarea').value = ""; 
         myData=[];  
     }    
}

function showJSON(){    
    //document.querySelector('.result').innerHTML = document.querySelector('textarea').value;   
    var myJson = JSON.stringify(myData);
    console.log(myJson);          
        
    

    document.querySelector('.result').innerHTML = myJson; 
}

function showXML(){
    //document.querySelector('.result').innerHTML = document.querySelector('textarea').value;   
    var myJson = JSON.stringify(myData);
      
        
    const toXml = (data) => {
        return data.reduce((result, el) => {
            return result + `\t<item name="${el.name}"><value>${el.value}</value></item>\n`
        }, '')
    }
    const myXML=`<?xml version="1.0" encoding="UTF-8"?>\n<data>\n`+toXml(myData) + `</data>`;
    console.log(myXML)
    document.querySelector('textarea').value = "" + myXML + ""; 
}

function fillArea(){
    console.log(myData);
    
    document.querySelector('textarea').value = "";
    myData.forEach(obj => {
        console.log(obj.name + "=" + obj.value);
        document.querySelector('textarea').value += obj.name + "=" + obj.value + "\n";
    })
}

function sortByValue(){    
    myData.sort((a, b) => {
        const valueA = a.value.toUpperCase(); // ignore upper and lowercase
        const valueB = b.value.toUpperCase(); // ignore upper and lowercase
        if (valueA< valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
      
        // names must be equal
        return 0;
    });    
    
    fillArea();
}

function sortByName(){    
    
    myData.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
    });    
    
    fillArea();
}


