/* calc_helper.js                               */
/* Helper function for calculator operations    */
import { MAX_DISPLAY_LENGTH } from "../components/Display";

var operation = {
  first_operand: "",
  current_operation: "",
};

var lastKeyPressedOp = false; /** flag for operation key press, TRUE when last key pressed was +, -, /, x */

/**
 * handleNumKeyPress
 * @description Handler of numkey press
 * @param key_text  Text content of key that was pressed
 * @param display   Display in calculator
 * @returns
 */
export const handleNumKeyPress = (key_text, display) => {
  let numPattern = /[0-9]/; // match numeric key
  let result = "";

  if (numPattern.test(key_text) === true) {
    // if last key pressed before was operator, reset display
    display = resetForSecondOperand(display);

    if (display.length !== MAX_DISPLAY_LENGTH) {
      // remove all commas
      display = removeCommasInNumbers(display);

      if (display.length === 1 && display === "0") {
        // if display is 0 and length is 1, replace with calc button pressed
        result = key_text;
      } else {
        result = display.concat(key_text);
      }
    } else {
      // ignore button press and just show current display
      result = display;
    }
  } else if (key_text === "reset") {
    // clear all, back to zero
    result = "0";
    lastKeyPressedOp = false;
  } else if (key_text === "del") {
    // chceck if operator key was pressed and reset if needed
    display = resetForSecondOperand(display);

    // remove commas
    display = removeCommasInNumbers(display);

    // remove last character in display
    result = display.substring(0, display.length - 1);
    if (result.length === 0) {
      result = "0";
    }
  } else if (key_text === ".") {
    display = resetForSecondOperand(display);

    // remove commas
    display = removeCommasInNumbers(display);

    // ignore second "."
    const index = display.indexOf(".");
    if (index < 0) {
      if (display.length !== MAX_DISPLAY_LENGTH) {
        result = display.concat(key_text);
      } else {
        result = display;
      }
    }
  } else if (key_text === "=") {
    // remove commas
    display = removeCommasInNumbers(display);

    // execute operation
    result = executeMathOp(
      operation.current_operation,
      +operation.first_operand,
      +display
    );

    result = result.toString();
    console.log("handleNumKeyPress key_text= result: " + result);

    if (result.length > MAX_DISPLAY_LENGTH) {
      // use scientific notation if exceeds display length
      result = formatScientificNotation(result);
    }
  } else {
    // store display value into object
    operation.first_operand = removeCommasInNumbers(display);
    operation.current_operation = key_text;

    result = display;

    // update flag
    lastKeyPressedOp = true;
  }

  // add commmas to final result
  return formatNumberWithCommas(result);
};

/**
 * formatNumberWithCommas
 * @description Add commas to number string every 1000
 * @param {*} x Number string
 * @returns     Number string formatted with comma
 */
function formatNumberWithCommas(x) {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  let result = "";

  // split if num is decimal
  let numArray = x.split(".");
  numArray[0] = numArray[0].replace(regexp, ",");

  // join
  result = numArray.join(".");
  console.log(result);

  return result;
}

/**
 * removeCommasInNumbers
 * @description Remove commas in number string
 * @param x Number string
 * @returns Number string with removed commas
 */
function removeCommasInNumbers(x) {
  return x.replaceAll(",", "");
}

/**
 * resetForSecondOperand
 * @description Checks if this is the second operand.  When it is second operand, display is reset to display it.
 * @param {*} display           Number of string to be displayed
 * @param {*} operator_key_flag Flag when second operator is pressed
 * @returns     Number string to be displayed
 */
function resetForSecondOperand(display) {
  let result = "";

  if (true === lastKeyPressedOp) {
    // refresh display for 2nd operand
    result = "0";

    // reset the flag
    lastKeyPressedOp = false;
  } else {
    result = display;
  }

  return result;
}

/**
 * executeMathOp()
 * @description Execution of math operations
 * @param {*} operation         Mathematical operation to be performed
 * @param {*} first_operand     first number in operation
 * @param {*} second_operand    second number in operation
 * @returns
 */
function executeMathOp(operation, first_operand, second_operand) {
  let result = 0;

  console.log("executeMathOp operation: " + operation);
  console.log("executeMathOp first_operand: " + first_operand);
  console.log("executeMathOp second_operand: " + second_operand);

  switch (operation) {
    case "+":
      result = first_operand + second_operand;
      break;
    case "-":
      result = first_operand - second_operand;
      break;
    case "x":
      result = first_operand * second_operand;
      break;
    case "/":
      if (second_operand === "0") {
        // handle divide by 0
        result = "E";
      } else {
        result = first_operand / second_operand;
      }
      break;
    default:
      result = second_operand;
  }

  console.log("executeMathOp result: " + result);

  return result;
}

/**
 * formatScientificNotation
 * @description Format number to scientific notation
 * @param {*} number    Source number
 * @returns             Number formatted to scientific notation
 */
function formatScientificNotation(number) {
  let result = 0;
  result = parseFloat(number).toExponential(5);
  console.log("result after exp: " + result);
  result = result.toString();
  return result;
}
