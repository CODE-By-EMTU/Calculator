function DeleteMe() {
    document.getElementById("myresult").value = "";
  }

  function caluolet(NewV) {
    document.getElementById("myresult").value += NewV;
  }

  function ans() {
    var a = document.getElementById("myresult").value;
    var b = eval(a);
    document.getElementById("myresult").value = b;
  }