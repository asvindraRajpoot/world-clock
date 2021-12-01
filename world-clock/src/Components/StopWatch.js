// import React from "react";

// class StopWatch extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             start: true,
//             activeWatch: {
//                 active: false,
//                 resume: false,
//                 reset: false,
//             },
//             timer: {
//                 timerOn: false,
//                 timerStart: 0,
//                 timerTime: 0,
//             }


//         }
//         this.timerId = null;
//     }

//     handleStart = () => {
//         this.setState({
//             start: false,
//             activeWatch: {
//                 active: false,
//                 resume: false,
//                 reset: false,

//             },
//             timer: {
//                 timerOn: true,
//                 timerTime: this.state.timer.timerTime,
//                 timerStart: Date.now() - this.state.timer.timerTime,
                
//             }


//         })
//         this.timerId = setInterval(() => {
//             this.setState({
//                 timer: {
//                     timerTime: Date.now() - this.state.timer.timerStart
//                 }
//             })
//         },10)




//     }
//     handleResume = () => {
//         //do somthing

//     }

//     handleReset = () => {
//         this.setState({
//             start: true,
//             activeWatch: {
//                 active: false,
//                 resume: false,
//                 reset: false,
//             },
//             timer: {
//                 timerStart: 0,
//                 timerTime: 0,
//             }

//         })
//         clearInterval(this.timerId);

//     }

//     handleStop = () => {
//         this.setState({
//             activeWatch: {
//                 active: true,
//                 resume: true,
//                 reset: true,
//             },
//             timer: {
//                 timerOn: false,
//             }


//         })
//         clearInterval(this.timerId);
//     }



//     render() {
//         const { timerTime } = this.state.timer;
//         console.log(this.state.timer);
//         let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
//         let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
//         let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
//         let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
//         return (
//             <>
//                 <div className="watch">
//                     <h2>Stopwatch</h2>
//                     <div className="timers">
//                         <span>{hours}  :</span>
//                         <span className="left">{minutes} : </span>
//                         <span className="left">{seconds} : </span>
//                         <span className="left">{centiseconds}</span>
//                     </div>
//                     {this.state.start ? <button onClick={this.handleStart}>Start</button> :
//                         <button onClick={this.handleStop}>Stop</button>
//                     }
//                     {
//                         this.state.activeWatch.active ?
//                             <div>
//                                 <button onClick={this.handleResume}>Resume</button>
//                                 <button onClick={this.handleReset}>Reset</button>
//                             </div>
//                             : <></>
//                     }


//                     <strong className="icon" onClick={this.props.handleCloseWatch}><i class="fas fa-times"></i></strong>
//                 </div>
//             </>
//         )
//     }
// }

// export default StopWatch;


import React, { Component } from "react";
import "../App.css";

class StopWatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default StopWatch;