var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Timer App</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
              </li>
              <li>
                <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Created by <a href="https://github.com/tiqtok" target="_blank">David Beltran</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
