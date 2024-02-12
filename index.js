let count =0
let countEl= document.getElementById("count-el")
function increment(){
    count=count+1
    countEl.innerText = count 
}
let previousEntries=document.getElementById("previous-entries") 
function save(){
    previousEntries.innerText =previousEntries.innerHTML+count +" - "
    count=0
    countEl.innerText = count 
}