function getnumber(num){
  var result= document.getElementById("result")
  result.value +=num
}

function reduceresult(){
  var result= document.getElementById("result")
  result.value = result.value.slice(0,-1)
}
function moveresult(){
  var result= document.getElementById("result")

}


function clearresult(){
  var result= document.getElementById("result")
  result.value =""
}

function getresult(){
  var result= document.getElementById("result")
  result.value =eval(result.value)
}
