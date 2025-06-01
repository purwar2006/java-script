// DOM -- DOCUMENT OBJECT MODEL
//               IT IS USED FOR CHANGES IN HTML FILE
//                HTML ELEMENT IS SAID TO BE NODE IS JS FOR CHANGE AND TEXT ELEMENT IS SAID TO BE TEXT NODE 

// GetDocumentById is a function to target the spacific elemrnt from html page

let hed = document.getElementById('head1')
console.log(hed)

hed.textContent = "abhishek"

// change the text and for apply tag only use for one elemnet

let hd = document.getElementById('head2')
console.log(hed)

hd.textContent = "abhis"
hd.innerHTML = "<i>teas </i>"

// getElementByTagname aur getElementByTagname node list return karenge array ke form main yah multiple hote hai esi karan yah array return karta hain 
let list = document.getElementsByTagName('li')
list[4].textContent = "by array"


// kisi elemrnt ki css ko change karne ke liye js se

let style =document.getElementById('my')
style.style.backgroundColor = "blue"
style.style.color = "white"






 