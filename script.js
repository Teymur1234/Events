const input=document.getElementById("input")
const button=document.getElementById("button")
const list=document.getElementById("list")
const button1=document.getElementById("delete")
function isler() {
    var text=input.value
    if (text!=null) {
        var li=document.createElement("li")
        li.textContent=text
        input.value=""
        list.append(li)
    }
}
function deleting() {
    list.removeChild(list.lastElementChild);
}
