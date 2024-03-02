let button = document.getElementById('btn1')

let flag = true		

let copr = document.querySelector('.price')
let coba = document.querySelector('.basket_price')
let bank = 0 
function changeColor(){
if (flag == true) {
	button.style.background = 'blue';
    button.textContent = 'In the basket'
    
flag = false
} else { 
 button.style.background = 'crimson' 
 button.textContent = 'Buy'
 
 flag = true	
}
}



console.log(button)
 
 let a = 5
 function name (){
if ( a > 5  ){ // if = если
console.log("Gleb")
} else { // else = иначе
console.log('Yarusov')
}
}
name() // вызов функции

