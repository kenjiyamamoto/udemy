'use strict'

var React = require('react')
var createReactClass = require('create-react-class')

var Title = createReactClass({
	render: function () {
		return React.createElement('h1', null, 'Titulo')
	}
})

export default Title