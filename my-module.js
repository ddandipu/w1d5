function division3(NoA) {
  console.log( NoA / 3);
};

module.exports = {
  multiplier: function(No1, No2) {
    division3(parseInt(No1) * parseInt(No2));
    //division3 is a function; see above
  }
};

