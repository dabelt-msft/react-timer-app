var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function(){
    return (
      <div>
        <p>Countdown Text</p>
        <Clock/>
      </div>
    )
  }
})

module.exports = Countdown;
