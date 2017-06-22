var React = require('react');

var Main = (props) => {
    return (
      <div>
        <div>
          <div>
            <p>Main.JSX rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    );
}

module.exports = Main;
