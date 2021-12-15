let data = [{
        name: 'Ashleigh',
        age: '21'
    },
    {
        name: 'Aaron',
        age: '23'
    },
    {
        name: 'Ishmael',
        age: '21'
    },
    {
        name: 'Sarah',
        age: '37'
    },
    {
        name: 'Peace',
        age: '42'
    },
    {
        name: 'Sam',
        age: '58'
    }
]

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        "<div>" + item.name + " " + 'is ' + item.age + " " + 'years old' + "</div>"
    )
})

info.innerHTML = details.join('\n')