// Function to calculate and print the area of a cube
function cubeArea(side) {
    var area = 6 * side * side;
    return area;
}

console.log("Area of cube: " + cubeArea(5));

// Function to calculate and print the area of a rectangle
function rectangleArea(length, breadth) {
    var area = length * breadth;
    return area;
}

console.log("Area of rectangle: " + rectangleArea(5, 10));

// Function to calculate and print the perimeter of a circle
function circlePerimeter(radius) {
    var perimeter = 2 * 3.14 * radius;
    return perimeter;
}

console.log("Perimeter of circle: " + circlePerimeter(5));

// Function to check if a number is odd or even
function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("5 is " + checkOddOrEven(5));
console.log("10 is " + checkOddOrEven(10));

// Function to check if a number is positive or negative
function checkPositiveOrNegative(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log("5 is " + checkPositiveOrNegative(5));
console.log("-10 is " + checkPositiveOrNegative(-10));
console.log("0 is " + checkPositiveOrNegative(0));
