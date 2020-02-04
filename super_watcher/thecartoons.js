console.log("Cartoon extension is running");

var bin = ["/WatchCartoonOnline/$16201"];
var x = "closebtn";
var y = "reklam_kapat";

var a = document.getElementsByClassName(x);

for(var i of a){
  i.click();
};

var b = document.getElementsByClassName(y);

for(var i of b){
  i.click();
};

// for(var i of bin){
//   var s =  document.getElementById(i);
//   s.parentNode.removeChild(i);
// }