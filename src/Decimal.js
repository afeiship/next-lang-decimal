(function (nx, global) {

  function getPower(inArgs) {
    var pos;
    var max = 0;
    nx.each(inArgs, function (arg) {
      pos = arg.toString().split('.')[1] || '';
      max = Math.max(max, pos.length);
    });
    max++;
    return Math.pow(10, max);
  }

  var Decimal = nx.declare('nx.lang.Decimal', {
    statics: {
      add: function () {
        var sum = 0;
        var args = arguments;
        var power = getPower(args);
        nx.each(args, function (arg) {
          sum += arg * power;
        });
        return sum / power;
      },
      sub: function (inNum1, inNum2) {
        var power = getPower(arguments);
        var result = inNum1 * power - inNum2 * power;
        return result / power;
      },
      mul: function () {
        var sum = 1;
        var args = arguments;
        var power = getPower(args);
        console.log('power:->', power);
        nx.each(args, function (arg) {
          sum *= arg * power;
        });
        return sum / (power * power);
      },
      div: function (inNum1, inNum2) {
        //todo:no test case,be careful
        var power = getPower(arguments);
        var result = inNum1 * power / inNum2 * power;
        return result / power;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Decimal;
  }


}(nx, nx.GLOBAL));
