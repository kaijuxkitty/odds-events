// TODO: this file! :)
//add event listener
document.addEventListener('DOMContentLoaded', () => {
    //add selctors
    const numberInput = document.querySelector('input[type="number"]');
    const addNumberButton = document.querySelector('button:first-of-type'); 
    const numberBankOutput = document.querySelector('#numberBank output');
    const sortOneButton = document.querySelector('#sortOne');
    const sortAllButton = document.querySelector('#sortAll');
    const oddNumbersOutput = document.querySelector('#odds output');
    const evenNumbersOutput = document.querySelector('#evens output');
  //create empty list for numbers
    let numbers = [];
    //click event listener for add number button
    addNumberButton.addEventListener('click', (event) => {
        //prevent empty input
         event.preventDefault();
    
      const inputValue = numberInput.value;
      if (!isNaN(inputValue)) {
        numbers.push(Number(inputValue));
        numberInput.value = '';
        updateNumberBank();
 
    function updateNumberBank() {
      numberBankOutput.textContent = numbers.join(',');
    }
}
  });
}); 
  //couldnt figure out why its undefined
// sortOneButton.addEventListener('click',() =>{
    //  if (numbers.lengh % 2===0) {
   //     evenNumbersOutput.textContent += '${number}';
    //  } else oddNumbersOutput.textContent += '${number}';
   // updateNumberBank();
  //  });
