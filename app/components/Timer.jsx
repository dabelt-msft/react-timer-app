var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'paused'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          })
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer)
  },
  onStatusChange: function(newStatus){
    //currying pattern - using a function that calls another function
      return () => {
        this.props.onStatusChange(newStatus);
      }
  },
  startTimer: function(){
    this.timer = setInterval(()=>{
      var newCount = this.state.count + 1;
      this.setState({
        count: (newCount <= 6000) ? newCount : 6000
      });
      if (newCount === 6000){
        this.setState({
          timerStatus: 'stopped'
        })
      }
    }, 1000);
  },
  handleSetTimer: function(){
    this.setState({
      count: 0,
      timerStatus: 'started'
    })
  },
  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    })
  },
  render: function(){
    var {count, timerStatus} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
})

module.exports = Timer;
