
let cardContainer = document.getElementById('cards-container')

let cardItems = [{
    id:"Barbie",
    name:"Barbie figura con articulaciones",
    price:18000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/muñeca-barbie.jpg"
},
{
    id:"MaxSteel",
    name:"Max Steel comando acuático",
    price:15000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/muñeco-max-steel.jpg"
},
{
    id:"PeluchedePikachu",
    name:"Peluche de Pikachu 40cm",
    price:22000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/peluche-pikachu_40cm.jpg"
},
{
    id:"BRATZChloe",
    name:"BRATZ Chloe con accesorios",
    price:24000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/muñeca-bratz-chloe.jpg"
},
{
    id:"LEGOcity",
    name:"LEGO city set plaza principal",
    price:30000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/set-lego-city.jpg"
},
{
    id:"Monopoly",
    name:"Monopoly juego de mesa en familia",
    price:8.800,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/juego_de_mesa-monopoly.jpg"
},
{
    id:"EspadaMinecraft",
    name:"Espada Minecraft 30 cm de goma eva",
    price:7500,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/espada_minecraft-30cm.jpg"
},
{
    id:"NarutoShippuden",
    name:"Figura Naruto Shippuden edición limitada 15cm",
    price:9000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/figura-naruto_shippuden-rasengan.jpg"
},
{
    id:"AmongUs",
    name:"Peluche de Among Us de 15cm",
    price:3000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero explica.",
    img:"img/Productos/peluche-amongus.jpg"
},
]

let basket =  JSON.parse(localStorage.getItem("data")) || [];

let generateCards = () => {

    return (cardContainer.innerHTML= cardItems.map((x)=>{
        let {id, name, price, desc, img} =x
        let search = basket.find((x) => x.id === id) || [];
        return ` <div id=card-id-${id} class="card">
    
        <article class="card__article">
            <div class="card__image-container">
                <img src=${img} class="card__image">
            </div>
            <div class="card__content">
                <h2 class="card__heading">${name}</h2>
                <div class="card__description">
                    <h4>$ ${price}</h4>
                    
                    <p>${desc}</p>
                    <div class="card__buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item } </div>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>
                </div>
            
            </div>
 
        </article>
 
    </div>`
    }).join(""));
    
    
}

generateCards()

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
    
update(selectedItem.id)
localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
 

update(selectedItem.id);
basket = basket.filter((x) => x.item !== 0);

localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item;

calculation()
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };

calculation();


