import app from './app.js';

enum ValidationFunctionNames {
    isNumber = "isNumber",
    isString = "isString",
    isBoolean = "isBoolean",
    isNull = "isNull",
    isUndefined = "isUndefined",
    isSymbol = "isSymbol",
    isJSONObject = "isJSONObject"
}

function test(input: any, checkType: ValidationFunctionNames, expected: Boolean){
    try {
        const validation: boolean = app(input)[checkType]();

        return {
            "input": input,
            "valid": validation,
            "expected": expected,
            "passed": validation === expected
        }

    } catch(err: any){
        return false;
    }
}

// Test isNumber() function
console.log(test(42, ValidationFunctionNames.isNumber, true)); // Pass
console.log(test("42", ValidationFunctionNames.isNumber, false)); // Fail

// Test isString() function
console.log(test("Hello, world!", ValidationFunctionNames.isString, true)); // Pass
console.log(test(42, ValidationFunctionNames.isString, false)); // Fail

// Test isBoolean() function
console.log(test(true, ValidationFunctionNames.isBoolean, true)); // Pass
console.log(test("true", ValidationFunctionNames.isBoolean, false)); // Fail

// Test isNull() function
console.log(test(null, ValidationFunctionNames.isNull, true)); // Pass
console.log(test("null", ValidationFunctionNames.isNull, false)); // Fail

// Test isUndefined() function
console.log(test(undefined, ValidationFunctionNames.isUndefined, true)); // Pass
console.log(test("undefined", ValidationFunctionNames.isUndefined, false)); // Fail

// Test isSymbol() function
console.log(test(Symbol(), ValidationFunctionNames.isSymbol, true)); // Pass
console.log(test("Symbol", ValidationFunctionNames.isSymbol, false)); // Fail

// Test isJSONObject() function
console.log(test('{"name":"John", "age":30, "city":"New York"}', ValidationFunctionNames.isJSONObject, true)); // Pass
console.log(test('{"name":"John", "age:30, "city":"New York"}', ValidationFunctionNames.isJSONObject, false)); // Fail
