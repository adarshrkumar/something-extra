var text = document.getElementById('result').textContent

var splitItems = text.split('aagctt').join('A/AGCTT')

var items = splitItems.split('/')
splitItems = splitItems.split('/').replace(' ')

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