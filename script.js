const tableDisplay = document.querySelector('.table__list')
const btnTest = document.querySelector('.btn__test')
const btnClear = document.querySelector('.btn__clear')
const inputField = document.querySelector('.addword__input')


const words = []

function isPalindrome(word) {
    let stack = []

    for (const c in word) {
        stack.push(c)
    }

    let s = ""
    while (stack) {
        s += stack.pop()
    }

    console.log(word, s);
    
    return word === s;
}

console.log("tere" === isPalindrome("eret"))

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

btnTest.addEventListener('click', function(e) {
    e.preventDefault();
   
    const inputWord = inputField.value

    if (inputWord == '') {
        alert('Input field is empty.')
    } else {
        
        words.push(inputWord);
    
        updateUI(words)
    
        inputField.value = ''
    }
    
})

btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    words.length = 0;
    updateUI(words)
})




