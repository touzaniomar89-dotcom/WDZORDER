function addToCart() {
  localStorage.setItem("cart", "WDZ T-Shirt");
  alert("Added to cart");
}

function submitOrder(e) {
  e.preventDefault();
  localStorage.removeItem("cart");
  window.location.href = "thankyou.html";
}
