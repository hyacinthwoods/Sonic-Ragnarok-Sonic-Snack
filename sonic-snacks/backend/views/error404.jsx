const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <main>
            <h1> 404: Out of Rings!</h1>
            <p>We cant find the page!</p>
        </main>
    )
}

module.exports = error404