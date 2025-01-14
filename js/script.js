// prevent char and space
const inp = document.querySelectorAll('.inp')

inp.forEach(i => {
    i.addEventListener('keydown', e => {
        if (!((e.key >= '0' && e.key <= '9') || e.key === 'Backspace' || e.key === 'Tab')) {
            e.preventDefault()
        }
    })
})
// prevent char and space


// card number
const cardNumberP = document.querySelector('#card-number-p')
const cardNumberInp = document.querySelector('#card-number')

cardNumberInp.addEventListener('input', () => {
    let valueInp = cardNumberInp.value

    let cleanedValue = ''
    for (let i = 0; i < valueInp.length; i++) {
        if (!isNaN(valueInp[i]) && valueInp[i] !== ' ') {
            cleanedValue += valueInp[i]
        }
    }

    if (cleanedValue.length > 16) cleanedValue = cleanedValue.slice(0, 16)

    let formattedValue = ''
    for (let i = 0; i < cleanedValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' - '
        }
        formattedValue += cleanedValue[i]
    }

    if (cleanedValue.length === 0) formattedValue = '**** - **** - **** - ****'

    if (cardNumberInp.value == '') cardNumberInp.value = ''
    else cardNumberInp.value = formattedValue

    cardNumberP.innerText = formattedValue
})
// card number


// card holder
const cardHolderP = document.querySelector('#card-holder-p')
const cardBackP = document.querySelector('#card-back-p')
const cardHolderInp = document.querySelector('#card-holder')

cardHolderInp.addEventListener('input', () => {
    let valueInp = cardHolderInp.value.trim()

    if (valueInp.length >= 30) {
        valueInp = valueInp.slice(0, 30)
        cardHolderInp.value = valueInp
    }

    if (valueInp.length == '') valueInp = '****'

    cardHolderP.innerText = valueInp
    cardBackP.innerText = valueInp
})
// card holder


// card date
const cardDateP = document.querySelector('#card-date-p')
const cardDateInp = document.querySelector('#card-date')

cardDateInp.addEventListener('input', () => {
    let valueInp = cardDateInp.value

    let cleanedValue = ''
    for (let i = 0; i < valueInp.length; i++) {
        if (!isNaN(valueInp[i]) && valueInp[i] !== ' ') {
            cleanedValue += valueInp[i]
        }
    }

    if (cleanedValue.length > 6) cleanedValue = cleanedValue.slice(0, 6)

    let formattedValue = ''
    for (let i = 0; i < cleanedValue.length; i++) {
        if (i === 4) {
            formattedValue += ' / '
        }
        formattedValue += cleanedValue[i]
    }

    cardDateInp.value = formattedValue

    cardDateP.innerText = formattedValue || '**** / **'
})
// card date


// card CVC
const cardCvcP = document.querySelector('#card-cvc-p')
const cartCvcInp = document.querySelector('#card-cvc')
const cardInner = document.querySelector('.card-inner')
const card = document.querySelector('.card')

cartCvcInp.addEventListener('input', () => {
    let valueInp = cartCvcInp.value

    let cleanedValue = ''
    for (let i = 0; i < valueInp.length; i++) {
        if (!isNaN(valueInp[i]) && valueInp[i] !== ' ') {
            cleanedValue += valueInp[i]
        }
    }

    if (cleanedValue.length > 5) cleanedValue = cleanedValue.slice(0, 5)

    cardCvcP.innerText = cleanedValue || '*****'
    cartCvcInp.value = cleanedValue
})

card.addEventListener('mouseenter', () => cardInner.style.transform = 'rotateY(180deg)')

card.addEventListener('mouseleave', () => cardInner.style.transform = 'rotateY(0)')

cartCvcInp.addEventListener('focus', () => cardInner.style.transform = 'rotateY(180deg)')

cartCvcInp.addEventListener('blur', () => cardInner.style.transform = 'rotateY(0)')
// card CVC