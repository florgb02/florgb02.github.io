var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
     return {
        options: []
      }
  },
  render: function(){
    return this.getChart();
  },
  getChart: function(){
    return <div className="chart-wrapper">
      <div id="piece1" className="hold">
        <div className="pie"></div>
        <div className="pie fill"></div>
      </div>
      <div id="piece2" className="hold">
          <div className="pie"></div>
          <div className="pie fill"></div>

      </div>
      <div id="piece3" className="hold">
          <div className="pie"></div>
          <div className="pie fill"></div>
      </div>
    </div>
  }
});
