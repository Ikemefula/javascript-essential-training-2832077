/**
 * TAKEAWAY NOTES: 
 * 1. Methods - props containing functions. Property-changing functions inside of my objects. They act on the current object ONLY. 
 * 2. A good way to answer questions during an interview. Javascript is an object-oriented programming language. The objects are based on prototypes.
 * 3. Object - have properties that define its capabilities
 * 4. Properties - examples include colors, straps, and
 * 5. object properties - define the specs of that one particular object so we can have several different unique 
 * 6. Each object is a unique instance of an object prototype. they share common props that refer back to the prototype of the object
 * 7. Changing the prop values can create a new object. 
 * 8. objects have features that allow us to change their prop values called methods 
 * 9. objects can contain other nested objects
 * 10. Curly brackets define data as an object 
 * 11. This keyword - refers to the current object. "this object right here"
 


*/

/** 
 * TO DO:
 * 1. create an object title Backpack
 * 2. issue your object the value of {}
 * 3. Populate data using the properties
 */


const ikesObject = {
    name: "Ikemefula's Backpack",
    volume: 30,
    color: 'grey',
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = leftLength;
        this.strapLength.right = lengthRight;
    },
};
// this is a method or value pairs. the value in a method is a function or a call to a function. Calling the method from outside the object will trigger the function contained within that method



