
let myLead = []

//1.myLead = JSON.parse(myLead)
//2.myLead.push("new value")
//3.myLead = JSON.stringify(myLead)
//4.console.log(typeof mylead)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")//.textContent
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const xBtn = document.querySelector("#x-btn")
//localStorage.setItem("myName","Kiki")
//let name = localStorage.getItem("myName")
//localStorage.clear() 
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
console.log(leadFromLocalStorage)


if (leadFromLocalStorage){
    myLead = leadFromLocalStorage
    render(myLead)
}


 tabBtn.addEventListener("click", function(){
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead)
     })
 })

 
function render(leads){
    let listITems = ""
    for (let i = 0; i < leads.length; i++) {
        listITems +=
        `<li>  
        <a href='${leads[i]}'
                target= '_blank'>
                 ${leads[i]}
         </a>
        </li> ` 
    }
       ulEL.innerHTML = listITems
    }
        

deleteBtn.addEventListener("dblclick", function(e){
    localStorage.clear()
    myLead = []
    render(myLead)
})

inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead)
})

