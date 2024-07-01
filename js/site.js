function getValues() {
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    let stopValue = document.getElementById('stopValue').value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    stopValue = parseInt(stopValue);

    // Check if any of the values are invalid
    if (isNaN(fizzValue) || isNaN(buzzValue) || isNaN(stopValue)) {
        Swal.fire({
            icon: 'error',
            title: 'Uh oh!',
            text: 'Please enter valid numbers for all values.',
            backdrop: false
        });
    } else if (stopValue > 5000) {
        Swal.fire({
            icon: 'error',
            title: 'Uh oh!',
            text: 'Please enter a stop value less than or equal to 5000.',
            backdrop: false
        });
    } else {
        let fizzBuzzArray = generateFizzBuzz(fizzValue, buzzValue, stopValue);
        displayFizzBuzz(fizzBuzzArray);
    }
}

function generateFizzBuzz(fizzValue, buzzValue, stopValue) {
    let generatedValues = [];

    for (let number = 1; number <= stopValue; number++) {
        if (number % fizzValue === 0 && number % buzzValue === 0) {
            generatedValues.push('FizzBuzz');
        } else if (number % fizzValue === 0) {
            generatedValues.push('Fizz');
        } else if (number % buzzValue === 0) {
            generatedValues.push('Buzz');
        } else {
            generatedValues.push(number);
        }
    }

    return generatedValues;
}

function displayFizzBuzz(generatedValues) {
    let resultsTable = document.getElementById('result');
    let resultHtml = '';

    for (let i = 0; i < generatedValues.length; i++) {
        let value = generatedValues[i];

        if (i % 5 === 0) {
            resultHtml += '<tr>';
        }

        let htmlForValue = `<td class="${value}">${value}</td>`;
        resultHtml += htmlForValue;

        if ((i + 1) % 5 === 0) {
            resultHtml += '</tr>';
        }
    }

    resultsTable.innerHTML = resultHtml;
}
