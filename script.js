var text = document.getElementById('result').textContent

var splitItems = text.split('ctgcag').join('CTGCA/G')

var items = splitItems.split('/')
splitItems = splitItems.split('/').join(' ')

var counts = []
items.forEach(function(i) {
    counts.push(i.length)
})

var countStr = `${items.length-1} | `

counts.forEach(function(c, i) {
    if (i !== 0) countStr += ' - '
    countStr += c
})

document.getElementById('result').textContent = countStr