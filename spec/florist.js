var expect = require('chai').expect;
var florist = require('../methods/greedyFlorist').greedyFlorist;

it('3 flowers and 3 people with prices of 2,5,6 should equal 13 dollars',function(){
  expect(florist('3 3\n2 5 6')).to.equal(13);
});

it('3 flowers and 2 people with prices of 2,5,6 should equal 15 dollars',function(){
  expect(florist('3 3\n2 5 6')).to.equal(15);
});
