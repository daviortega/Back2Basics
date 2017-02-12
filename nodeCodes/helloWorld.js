'use strict'

let mySample = require('./sample-input-fql.json')


mySample.forEach(function(element) {
    console.log('New item')
    console.log(JSON.stringify(element.query))
    console.log('end of item')
}, this);
