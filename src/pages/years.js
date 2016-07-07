import React, { Component, PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';
import axios from 'axios';

export default class Years extends Component {

constructor(props) {
  super(props);

  this.state = {
    seasons: []
  }
}

componentWillReceiveProps() {
  if (this.props.params.status) {
    axios.get(`http://localhost:3000/api/years/${this.props.params.status}`)
    .then((seasons) => {
      this.setState({
      seasons: seasons.data
      })
    })
  }
}
componentWillReceiveProps() {
  if (this.props.params.status) {
    axios.get(`http://localhost:3000/api/years/${this.props.params.status}`)
    .then((seasons) => {
      this.setState({
      seasons: seasons.data
      })
    })
  }
}

  render() {
    const self = this;
    function seasonFormatter() {
     return self.state.seasons.reduce((finalOutput, curr) => {
     if (Number(curr.year) === Number(self.props.params.status) ) {
       finalOutput.push({
         name: curr.team_name,
         color:'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', .5)',
         data: [[Number(curr.payroll), Number(curr.team_waa)]]
       })
     }
      return finalOutput;
     }, []);
    }

if(this.state.seasons.length > 0){
    var config = {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: 'Payroll comparison'
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Payroll (millions)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'WAA (Wins Above Average)'
        }
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} Payroll, {point.y} WAA'
          }
        }
      },
      series: seasonFormatter()
    };

    return (
      <div>
        <ReactHighcharts config={config}/>
      </div>
    );
  } else {
    return (
      <div className="loader">Loading...</div>
    )
  }
  }
}
