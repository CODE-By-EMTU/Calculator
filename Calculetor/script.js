
    function DeleteMe() {
      document.getElementById("myresult").value = "";
    }
  
    function caluolet(NewV) {
      document.getElementById("myresult").value += NewV;
    }
  
    function ans() {
      var input = document.getElementById("myresult").value;
  
      try {
        var result = evaluateExpression(input);
        document.getElementById("myresult").value = result;
      } catch (error) {
        document.getElementById("myresult").value = "Math Error";
      }
    }
  
    function evaluateExpression(expression) {
      return new Function('return ' + expression)();
    }
  
