const assert = require('chai').assert;
const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// set a global function name
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);


describe('App', function(){
  // creating a nested group
  describe('sayHello', function(){
    it('sayHello should return hello', function(){
      // it good to define result;
      // let result = app.sayHello();
      assert.equal(sayHelloResult, "say hello");
    });
    // testing return result is a string
    it('sayHello should return type string', function(){
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    })
  });

  describe('addNumbers', function(){
    // testing for numbers
    it('addNumbers should be above 5', function(){
      // let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    })

    it('addNumbers should return type number', function(){
      // let result = app.addNumbers(5,5);
      assert.typeOf(addNumbersResult, 'number');
    })
  });

});