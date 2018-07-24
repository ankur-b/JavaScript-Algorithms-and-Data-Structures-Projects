var output = document.getElementById("output");
var submit = document.getElementById("submit");
var input = document.getElementById("input");
function Cipher(str){
	var x = [];
	for (var i = 0 ; i < str.length; i++) {
		if (str[i].charCodeAt() < 65 || str[i].charCodeAt() > 90) {
          x.push(str[i].charCodeAt());
      }
   
      else if (str[i].charCodeAt() < 78) {
        x.push(str[i].charCodeAt() + 13);
      }
   	else if(str[i].charCodeAt() >=78){
      x.push(str[i].charCodeAt() - 13);
    }
   	}
   	var s = String.fromCharCode.apply(String, x);
  return s;
}
document.getElementById("btn").onclick=function(){
	var result = Cipher(input.value);
output.innerHTML=result;
};
