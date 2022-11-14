

let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let cart = JSON.parse(localStorage.getItem("data")) || [];

let calculate = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculate();

let generateCartItems = () => {
  if (cart.length !== 0) {
    return (ShoppingCart.innerHTML = cart
      .map((x) => {
        let { id, item } = x;
        let search = cardItems.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
        <img width="100" src=${search.img} alt="" />
        <div class="details">
          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>
          <div class="buttons">
              <i onclick="decrease(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increase(${id})" class="bi bi-plus-lg"></i>
          </div>
          <h3>$ ${item * search.price}</h3>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Carrito vacío</h2>
    
    `;
  }
};

generateCartItems();


let increase = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  updating(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(cart));
};
let decrease = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  updating(selectedItem.id);
  cart = cart.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
};

let updating = (id) => {
  let search = cart.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculate();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  cart = cart.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(cart));
};

let clearCart = () => {
  cart = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
};

let TotalAmount = () => {
  if (cart.length !== 0) {
    let amount = cart
      .map((x) => {
        let { item, id } = x;
        let search = cardItems.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
  } else return;
};

TotalAmount();

let modal = document.getElementById("modal")

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("close")) {
    modal.classList.add("close");
  }
});