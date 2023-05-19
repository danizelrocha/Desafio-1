// DESAFIO 1
let favoriteFood = 'Temaki'
document.getElementById('text').innerHTML = favoriteFood


// DESAFIO 2 //
let productValue = Number(prompt('Enter the product value: '))

if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'Approved'
}
else {
    document.getElementById('result').innerHTML = 'Denied'
}
/* console.log(typeof(productValue)) */

