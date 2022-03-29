const tableDisplay = document.querySelector('.table__list')
const btnTest = document.querySelector('.btn__test')
const btnClear = document.querySelector('.btn__clear')
const inputField = document.querySelector('.addword__input')


const words = []

function isPalindrome(word) {

    const keyString = 'anna'
    const keyValue  = word.toLowerCase().trim()

   
    if (keyString === keyValue) {
        return true;
    } else {
        return false;
    }

}

console.log (isPalindrome("anna") === true);
console.log (isPalindrome("Anna") === true);
console.log (isPalindrome("anna ") === true);
console.log (isPalindrome("YellowSubmarine") === false);

const displayWords = function (words) {
    tableDisplay.innerHTML = '';

  
    words.forEach(function (item, i) {
        const type = isPalindrome(item) === true ? "true" : "false";
  
        const html = `
                <div class="table__item">
                    <p class="table__item--number">${i + 1}.</p>
                    <p class="table__item--text">${item}</p>
                    <span class="tooltip ${type}">
                        <span class="tooltiptext">Anna/anna === ${item}</span>
                    </span>
                </div>
        `;
  
      tableDisplay.insertAdjacentHTML('beforeend', html);
    });
};

const updateUI = function (words) {
    displayWords(words)
}

btnTest.addEventListener('click', function() {
   
    const inputWord = inputField.value

    if (inputWord == '') {
        alert('Input field is empty.')
    } else {
        
        words.push(inputWord);
    
        updateUI(words)
    
        inputField.value = ''
    }
    
})

btnClear.addEventListener('click', function() {

    words.length = 0;
    updateUI(words)
})




