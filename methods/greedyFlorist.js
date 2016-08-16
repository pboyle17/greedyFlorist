var GreedyFlorist = function GreedyFlorist(input){
  var self = this;
  this.input = input;

  this.getTotal = function(){
    var sum = 0;
    var lines = self.input.split('\n');
    var flowers = lines[0].split(' ')[0];
    var people = lines[0].split(' ')[1];
    var prices = lines[1].split(' ').map(Number).sort().reverse();
    var multiplier = 1;
    var count = 0;

    if(people>=flowers){
      prices.forEach(function(price){
        sum+=price;
      });
    } else {
      for(var x = 0; x < prices.length ; x++){
        count++;
        if(count>people){
          count=0;
          multiplier++;
        }
        sum+=prices[x]*multiplier;
      }
    }
    return sum;
  };
};

module.exports.GreedyFlorist = GreedyFlorist;
var florist = new GreedyFlorist('3 3\n 2 5 6');
florist.getTotal();
var florist = new GreedyFlorist('3 2\n 2 5 6');
florist.getTotal();
