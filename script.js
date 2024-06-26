function calculate(){
    let mark1 = Number(document.getElementById("one").value)
    let mark2 = Number(document.getElementById("two").value)
    let mark3 = Number(document.getElementById("three").value)
    let mark4 = Number(document.getElementById("four").value)
    let mark5 = Number(document.getElementById("five").value)

    let total = mark1 + mark2 + mark3 + mark4 + mark5

  document.getElementById("mark").innerHTML = total
   
}


