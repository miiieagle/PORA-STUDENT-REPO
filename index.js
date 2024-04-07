function celsiusToFahrenheit(Celsius1, Celsius2){
   let result = Celsius1 + Celsius2;
   
   const Fahrenheit = (result * 9/5) + 32;
   return Fahrenheit
   console.log(result); 
}

console.log(celsiusToFahrenheit(30, 40))