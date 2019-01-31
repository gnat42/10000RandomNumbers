function randomArray() {
    // initialize array of numbers (ES6 only) - don't include 0
    let numbers = Array.from(new Array(10000), function (val, index) {
        return index + 1
    });

    // Use Fisher-Yates sorting algorithm
    for (let i = numbers.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = numbers[randomIndex];

        numbers[randomIndex] = numbers[i];
        numbers[i] = itemAtIndex;
    }

    // return numbers;
    document.getElementById('number_output').innerHTML = JSON.stringify(numbers);
}
