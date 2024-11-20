var amt = 5

var chars = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?']

var english = document.querySelector('.english__input')
var cypher = document.querySelector('.cypher__input')
// var button = document.querySelector('.translate__input')

english.addEventListener('change', encode)
cypher.addEventListener('change', decode)

function encode(e) {
    var val = e.target.value
    if (!val) return
    if (!val.length) return
    if (val.length < 1) return

    val = encodeURIComponent(val)
    var dir = 1
    val = shift(val, dir)

    cypher.value = val
}

function decode(e) {
    var val = e.target.value
    if (!val) return
    if (!val.length) return
    if (val.length < 1) return
    
    var dir = -1
    val = shift(val, dir)
    val = decodeURIComponent(val)

    english.value = val
}

function shift(val, dir) {
    var num = amt*dir

    val = val.split('')
    val.forEach((v, i) => {
        var index = chars.indexOf(v)
        var nIndex = index + num
        if (nIndex < 0) nIndex += chars.length
        if (nIndex > chars.length-1) nIndex -= chars.length
        val[i] = chars[nIndex]
    })

    return val.join('')
}