"use strict";

var CART = [{
  title: 'Milk',
  price: 32.5,
  qty: 2,
  isBuy: false
}, {
  title: 'Bread',
  price: 21.2,
  qty: 1,
  isBuy: false
}];

function addToCart(newTitle, newPrice, newQty) {
  var ind = CART.findIndex(function (el) {
    return el.title === newTitle;
  });
  var action = 'added';
  console.log(ind);

  if (ind === -1) {
    CART.push({
      title: newTitle,
      price: newPrice,
      qty: newQty,
      isBuy: false
    });
  } else {
    CART[ind].qty += newQty;
    action = 'upd';
  }

  return action;
}

function checkAndAddToCart() {
  var title = document.getElementById('prodTitle').value;
  var price = document.getElementById('prodPrice').valueAsNumber;
  var qty = document.getElementById('prodQty').valueAsNumber;

  if (title === '') {
    alert("Enter product title, please");
    return;
  }

  if (isNaN(price)) {
    alert("Enter product title, please");
    return;
  } else {
    if (price <= 0) {
      alert("invalid price");
      return;
    }

    if (isNaN(qty)) {
      alert("Enter product qq, please");
      return;
    } else {
      if (qty <= 0) {
        alert("invalid qq");
        return;
      }
    }

    alert(addToCart(title, price, qty) === 'added' ? 'Product added succel' : 'product upd successful');
    document.getElementById('prodTitle').value = '';
    document.getElementById('prodPrice').value = '';
    document.getElementById('prodQty').valueAsNumber = 1;
    showProductList();
  }
}

function showProductList() {
  var cartTotal = CART.reduce(function (acc, el) {
    return acc + el.price * el.qty;
  }, 0);
  var list = '';
  CART.forEach(function (prod, index) {
    list += "<tr> \n    <td>".concat(index + 1, "</td> \n    <td>").concat(prod.title, "</td> \n    <td>").concat(prod.price.toFixed(2), "</td> \n    <td>").concat(prod.qty, "</td> \n    <td>").concat((prod.price * prod.qty).toFixed(2), "</td> \n    </tr>");
  });
  document.getElementById('product_list').innerHTML = list;
  document.getElementById('cartTotal').innerText = total.toFixed(2);
}

showProductList();