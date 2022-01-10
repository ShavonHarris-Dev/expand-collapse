// when user clicks on expand a class of show needs to be added to the div with a class of card-body 
// when user clicks on collapse a class of show needs to be removed from the div with a class of card-body 
// cards should have a default of collapse 
// also have to change textcontent

const cardBody = Array.from(document.querySelectorAll('.card-body'))
const button = Array.from(document.querySelectorAll('.expand-button'))

console.log(button)
console.log(cardBody)

function removeShow (){
    cardBody.forEach(card => {
        card.classList.remove('show')
    })
}

removeShow()

 
button.forEach(btn => {
    btn.textContent = 'Expand'

})




button.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.textContent === 'expand'){
            addShow()
}
    btn.textContent === 'collapse'
       console.log(btn.textContent)
 })
})





function addShow(){
    cardBody.forEach(card => {
        card.classList.add('show')
    })

}
