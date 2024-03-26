var text = document.getElementById('result').textContent

var split = text.split('aagctt').join('A/AGCTT')

var items = split.split('/')
split = split.split('/').replace(' ')

var counts = []
items.forEach(function(i) {
    counts.push(i.length)
})

var countStr = ''

counts.forEach(function(c, i) {
    if (i !== 0) countStr += ' | '
    countStr += c
})

document.getElementById('result').textContent = counts