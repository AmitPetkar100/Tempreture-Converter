
let degree = document.getElementById("degrees");
let type = document.getElementById("type");
let result = document.getElementById("degrees-result");
let celsius = 0;
let fahrenheit = 0;

function calculate() {

   if (isNaN(degree.value)) {
    alert("Enter valid number!!");

  }else if(degree.value == "" ){
    alert("Degree should not be Empty");

  }
   else {
    
    if(type.value == "Fahrenheit"){

        // (32°F − 32) × 5/9 = 0°C
        celsius = (degree.value - 32) * 5/9;
        result.value = celsius + " °C";

    }else if(type.value == "Celsius"){
        
        // (0°C × 9/5) + 32 = 32°F
        fahrenheit = (degree.value * 9/5) + 32;
        result.value = fahrenheit + " °F";

    }else{
        alert("Select valid type");
    }

  } //else end

} // end of function