var nQueens = function(n) {
  var solutions = 0;
  var magicScreen = (1 << n) - 1;
  var recurQueens = function(columns, leftDiagonals, rightDiagonals) {
    var threatened = columns | leftDiagonals | rightDiagonals;
    var open = ~(threatened) & magicScreen;
    while(open > 0) {
      var theOne = -open & open;
      open = open ^ theOne;
      var openColumns = columns | theOne;
      var openLeftDiagonals = (leftDiagonals | theOne) << 1;
      var openRightDiagonals = (rightDiagonals | theOne) >> 1;
      recurQueens(openColumns, openLeftDiagonals, openRightDiagonals);
    }
    if(columns === magicScreen) {
      solutions++;
    }
  }
  recurQueens(0,0,0);
  return solutions;
}