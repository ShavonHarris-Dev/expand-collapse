// .toggle
//.closest
// e.target and listening to events on the document
// ternary operator  if equal to expanded we want to change to collapsed otherwise keep it as expanded


document.addEventListener('click', e => {
    if (!e.target.matches('.expand-button')) return 

    const card = e.target.closest('.card')
    const cardBody = card.querySelector('.card-body')

    cardBody.classList.toggle('show')
    e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' : 'Expand'
})