var assert = require ('chai').assert;

var add = require ('../add.js').add;
var sub = require ('../add.js').subtract;


describe ('Add', function (){
    it('should add 5 and return' , function (){

      var result = add(10);
     assert.equal (result, 15);
    });

    it ('return type should be number', function (){

     var result =add(4);
     assert.typeOf(result, 'number');
    });

    it ('should return xyz5', function (){

     var result =add('xyz');
     assert.equal (result, 'xyz5');
   });

   it ('not equal to 5 ', function (){

    var result =add('xyz');
    assert.notEqual (result, '5');
  });

    it ('return type should be string', function (){

     var result =add('abc');
     assert.typeOf(result, 'string');

    });

 });


 describe ('Subtract', function (){

         it('should subtract 3 and return', function (){
               var result= sub(3);
               assert.equal(result, 7);

         });

         it('should subtract 10 from given num  and return  ', function (){
               var result= sub(18);
               assert.equal(result, 8);

         });
 });
