// console.log('connected');

function calculateTriangleArea(){
    // console.log('button clicked');

    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle',area);
}
function calculateRectangleArea(){
    // console.log('rect');

    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);
 
    // get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input
    if(isNaN(width)|| isNaN(length)){
        // console.log('Width is not a number');
        alert('Please insert a number');
        return;
    }

    // calculate rectangular area
    const area = width * length;
    console.log(area);

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle',area);

}

// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    // console.log('parallelogram clicked');
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area',area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram',area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);

    addToCalculationEntry('Ellipse',areaTwoDecimal);
}

// reusable get input value in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

// reusable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
  
}

// add to calculation entry
/* 
1.Get the element where you want to add the dynamic html
2.create an element you want to add
3.if needed add some class
4. set inner HTML. it could be dynamic Template String
5.append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' +area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    // p.innerHTML = areaType + ' ' + area;
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`

    calculationEntry.appendChild(p);


}

// Data Validation
/* 
1. set the proper type of the input field(number,data,email)
2.check type using typeof
3. NaN means: Not a number .isNan is checking whether the input is not a number or not


 */

