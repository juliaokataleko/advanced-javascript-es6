let colors = [
    "Red", "Blue", "Dark", "Green", "Purple"
]

let items = colors.map(function(color) {
    return '<li>' + color + '</li>'
})

items = colors.map(color => '<li>' + color + '</li>')

// templates literals
items = colors.map(color => `<li>${color}</li>`)


