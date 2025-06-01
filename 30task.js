let list = document.getElementsByTagName('li')
for (let i = 0; i < list.length; i++) {
    if (i % 2 != 0) {
        list[i].style.backgroundColor = "blue"
        list[i].style.color = "white"
        list[i].style.listStyle = "none"

    }
    else {
        list[i].style.backgroundColor = "white"
        list[i].style.listStyle = "none"
     
    }
}




