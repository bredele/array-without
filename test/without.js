var without = require('without');
var assert = require('assert');




describe('without', function(){
  it('should return a copy without the values', function(){
    var arr = ['olivier', 'bruno', 'amy'];
    var result = without(arr, 'bruno', 'amy');
    assert(result.length === 1);
    assert(result[0] === 'olivier');
  });

});
