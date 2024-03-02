const ChangBall = document.querySelector('.toggle')
const shop_header = document.querySelector('.shop_header')
const shop_title = document.querySelector('.shop_title')
const shop_product = document.querySelector('.shop_product')
const my_slider = document.querySelector('.my_slider')
const title_product = document.querySelector('.title_product')
let Them_Status = true
function changeBall(){

 ChangBall.classList.toggle('move')
  if ( Them_Status == false){
  	Them_Status = true 
  	shop_header.style.background = '#FFC1CC'
  	shop_title.style.color = 'gold'
  	shop_product.style.background = 'white'
  	my_slider.style.background = '#FFC1CC'
  	title_product.style.color = 'crimson'
	} else {
	Them_Status = false 
  	shop_header.style.background = 'white'
  	shop_title.style.color = 'crimson'
    shop_product.style.background = '#FFC1CC'
    my_slider.style.background = 'white'
    title_product.style.color = 'gold'
	}

}