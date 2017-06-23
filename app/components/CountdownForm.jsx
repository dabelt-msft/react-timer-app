var React = require('react');

var CountdownForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;

    // / ^ - match first char with [0-9], $ - does the same for the end/
    if (strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function(){
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
})

module.exports = CountdownForm;
