var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function(){
    return (
      <div>
        <p>Timer Text</p>
        <Clock totalSeconds={89}/>
      </div>
    )
  }
})

module.exports = Timer;
