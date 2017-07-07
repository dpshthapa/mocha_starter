module.exports = {

  add : function (value){

    return value + 5;
  },

  subtract : function (value){

    if (value > 10){
      return value - 10;
    }
    else {
      return 10 - value;
        }

  }
}
