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

function addToCart(newTitle, newPrice, newQty) {
  const ind = CART.findIndex(el => el.title === newTitle)
  let action = 'added'
  console.log(ind);


  if (ind === -1) {
    CART.push({
      title: newTitle,
      price: newPrice,
      qty: newQty,
      isBuy: false
    })
  } else {
    CART[ind].qty += newQty
    action = 'upd'
  }
  return action

}

function checkAndAddToCart(){
  const title = document.getElementById('prodTitle').value
  const price = document.getElementById('prodPrice').valueAsNumber
  const qty = document.getElementById('prodQty').valueAsNumber



if (title === '') {
  alert("Enter product title, please")
  return
}

if (isNaN(price)) {
  alert("Enter product title, please")
  return
} else {
  if (price <= 0) {
    alert("invalid price")
    return
  }

  if (isNaN(qty)) {
    alert("Enter product qq, please")
    return
  } else {
    if (qty <= 0) {
      alert("invalid qq")
      return
    }

  }


  alert (addToCart(title, price, qty) === 'added'
  ? 'Product added succel'
  : 'product upd successful')

  document.getElementById('prodTitle').value = ''
  document.getElementById('prodPrice').value = ''
  document.getElementById('prodQty').valueAsNumber = 1
  showProductList()
}
}

function showProductList() {
  const cartTotal = CART.reduce((acc, el)=> acc +el.price * el.qty, 0)
  let list = '';
  CART.forEach((prod, index) => {
    list += `<tr> 
    <td>${index + 1}</td> 
    <td>${prod.title}</td> 
    <td>${prod.price.toFixed(2)}</td> 
    <td>${prod.qty}</td> 
    <td>${(prod.price * prod.qty).toFixed(2)}</td> 
    </tr>`
  })

  document.getElementById('product_list').innerHTML = list
  document.getElementById('cartTotal').innerText = total.toFixed(2)
}

showProductList()

