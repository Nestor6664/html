const CART = [
  {
    title: 'Milk',
    price: 32.5,
    qty: 2,
    isBuy: false
  },
  {
    title: 'Bread',
    price: 21.2,
    qty: 1,
    isBuy: false
  }
]

function addToCart( newTitle, newPrice, newQty){
  const ind = CART.findIndex(el => el.title === newTitle)
  let action = 'added'
  console.log(ind);

   
  if (ind === -1){
CART.push({
  title: newTitle,
  price: newPrice,
  qty: newQty,
  isBuy: false
})
} else{
  CART[ind].qty += newQty
  action ='upd'
}
return action

  }

  function checkAndAddToCard()
    const title = document.getElementById('prodTitle').value
    const price = document.getElementById('prodPrice').valueAsNumber
    const qty = document.getElementById('prodQty').valueAsNumber

if (title === ''){
  alert("Enter product title, please")
  return
}

if (isNaN(price)){
  alert("Enter product title, please")
  return
}else{
  if(price <=0){
    alert("invalid price")
    return
  }

  if (isNaN(qty)){
    alert("Enter product qq, please")
    return
  }else{
    if(qty <=0){
      alert("invalid qq")
      return
    }
  
}


    addToCart(title, price, qty)
    alert('product added suc')

    document.getElementById('prodTitle').value = ''
    document.getElementById('prodPrice').value = ''
    document.getElementById('prodQty').valueAsNumber = 1
  }





