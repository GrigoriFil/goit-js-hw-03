function getElementWidth(content, padding, border) {
    //const numericalContent = Number.parseFloat(content);
    //const numericalPadding = Number.parseFloat(padding);
    //const numericalBorder = Number.parseFloat(border);
    
    //const borderBox = numericalContent + (2 * numericalPadding) + (2 * numericalBorder);

    //return borderBox;
    return Number.parseFloat(content) + (2 * Number.parseFloat(padding)) + (2 * Number.parseFloat(border));
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
