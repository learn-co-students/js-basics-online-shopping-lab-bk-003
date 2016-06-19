var cart = [];

function getCart(){
	return cart;
}

function setCart(array){
	if(typeof array === 'object'){
	cart = array;
    }
}

function addToCart(item){
	var list = {};
	list[item] = Math.floor(Math.random() * 100);
	cart.push(list);
	console.log(item + " has been added to your cart.");
	return cart;
}

function viewCart(){
	var string = "In your cart, you have";
	if (cart === []){
        console.log("Your shopping cart is empty.")
	}else{
	    for(let i = 0; i < cart.length; ++i){
	       for(item in cart[i]){
		       	if(cart[i] !== cart[cart.length - 1]){
		          string += " " + item + " at $" + cart[i][item] + "," ;
		       	}else{
		       	string += " " + item + " at $" + cart[i][item] + ".";	
		       	}
	        }
	    }    
	    console.log(string);
	}
}

function removeFromCart(key){
	for(let i = 0; i < cart.length; ++i){
       if(cart[i].hasOwnProperty(key)){
          if(cart.length === 1){
          cart.pop();
          }else{
          cart.splice(i,i);
          }
          return cart;
       }
	}
	console.log("That item is not in your cart.");
}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(credit){
   if(credit){
	  console.log("Your total cost is $"+ total() +", which will be charged to the card " +credit+".");
   setCart([]);
   }else{
   	  console.log("We don't have a credit card on file for you to place your order.");
   }
       
}
