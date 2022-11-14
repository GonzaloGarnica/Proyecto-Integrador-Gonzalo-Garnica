import productController from '/js/controller/product.js';

console.log('🆗: Módulo PageAlta cargado.');


const form = document.getElementById('form')

const button = document.getElementById('submitButton')

const nameToy = document.getElementById('name')
const price = document.getElementById('price')
const stock =document.getElementById('stock')
const brand = document.getElementById('brand')
const cathegory = document.getElementById('cathegory')
const delivery = document.getElementById('delivery')
const ageFrom = document.getElementById('ageFrom')
const ageTo = document.getElementById('ageTo')
const terms =document.getElementById('terms')


const formIsValid = {
    name:false,
    price:false,
    stock:false,
    brand:false,
    cathegory:false,
    delivery:false,
    ageFrom:false,
    ageTo:false,
    terms:false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

nameToy.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) formIsValid.nameToy = true
})

price.addEventListener('change', (e) =>{
    if(e.target.checked == true) formIsValid.price = true
})

stock.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) formIsValid.stock = true
})

brand.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) formIsValid.brand = true
})

cathegory.addEventListener('change', (e) =>{
    if(e.target.checked == true) formIsValid.cathegory = true
})

delivery.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) formIsValid.delivery = true
})

ageFrom.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) formIsValid.ageFrom = true
})

ageTo.addEventListener('change', (e) =>{
    if(e.target.value.trim().length > 0) formIsValid.ageTo = true
})

terms.addEventListener('change', (e) =>{
    formIsValid.terms = e.target.checked
    e.target.checked ? button.removeAttribute('disabled'):
    button.setAttribute('disabled', true)
})

const validateForm = () => {
    const formValues = Object.value(formIsValid)
    const valid = formValues.findIndex(value => value == false)
        if (valid == -1) form.submit()
        else alert('Completar formulario')
}
export default PageAlta;
