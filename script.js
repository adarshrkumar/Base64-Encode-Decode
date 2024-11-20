var amt = 5

var chars = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?']

var english = document.querySelector('.english__input')
var base64 = document.querySelector('.base64__input')
// var button = document.querySelector('.translate__input')

english.addEventListener('change', encode)
base64.addEventListener('change', decode)

function encode(e) {
    var val = e.target.value
    if (!val) return
    if (!val.length) return
    if (val.length < 1) return

    val = btoa(va)
    base64.value = val
}

function decode(e) {
    var val = e.target.value
    if (!val) return
    if (!val.length) return
    if (val.length < 1) return
    
    val = atob(val)
    english.value = val
}