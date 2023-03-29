const cardHolderName = document.querySelector('#card-holder')
const cardImgName = document.querySelector('.img-holder-name')

const cardNumber = document.querySelector('#card-number')
const cardImgNumber = document.querySelector('.img-card-number')

const cardCvc = document.querySelector('#cvc')
const cardImgCvc = document.querySelector('.img-cvc')

const cardMonth = document.querySelector('#month')
const cardImgMonth = document.querySelector('.img-card-month')
const cardYear = document.querySelector('#year')
const cardImgYear = document.querySelector('.img-card-year')

const confirmBtn = document.querySelector('.confirm-btn')

const form = document.querySelector('form')
const confirmContainer = document.querySelector('.confirmation-container')

const errorName = document.querySelector('#error-name')
const errorNumber = document.querySelector('#error-number')
const errorDate = document.querySelector('#error-date')
const errorCVC = document.querySelector('#error-cvc')

cardHolderName.addEventListener('keyup', () => {
    cardImgName.innerHTML = cardHolderName.value
})

cardMonth.addEventListener('keyup',() => {
    cardImgMonth.innerHTML = cardMonth.value
})

cardYear.addEventListener('keyup',() => {
    cardImgYear.innerHTML = cardYear.value
})

cardNumber.addEventListener('input', () => {
    let userInput = cardNumber.value
    let result = userInput.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
   
    cardNumber.value = result
    
    if(cardNumber.value == ''){
        cardImgNumber.innerHTML = '0000 0000 0000 0000'
    } else {
        cardImgNumber.innerHTML = cardNumber.value
    }
})


cardCvc.addEventListener('keyup', () => {
    if(cardCvc.value == ''){
        cardImgCvc.innerHTML = '000'
    } else {
        cardImgCvc.innerHTML = cardCvc.value
    }
})


confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(cardHolderName.value != '' && cardNumber.value != '' && cardCvc.value != ''
    && cardMonth.value != '' && cardYear.value != ''){
        form.style.display = 'none'
        confirmContainer.style.display = 'flex'
    } else {
        if(cardHolderName.length != 0){
            errorName.style.visibility = 'visible'
        }else{
            errorName.style.visibility = 'hidden'
        }
        if (cardNumber.length != 19){
            errorNumber.style.visibility = 'visible'
        }else{
            errorNumber.style.visibility = 'hidden'
        }
        if(cardCvc.length != 3){
            errorCVC.style.visibility = 'visible'
        }else{
            errorCVC.style.visibility = 'hidden'
        }
        if (cardMonth.length != 2 || cardYear.length != 2) {
            errorDate.style.visibility = 'visible'
        }else{
            errorDate.style.visibility = 'hidden'
        }
        
    }
})


