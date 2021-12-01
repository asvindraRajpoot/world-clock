// import React from "react";

// class Timer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             start: true,
//             activeWatch: {
//                 active: false,
//                 resume: false,
//                 reset: false,
//             },
//             time: {
//                 hour: 0,
//                 minute: 0,
//                 second: 0,

//             }

//         }
        
//     }
  
//     handleStart = () => {
//         this.setState({
//             start: false,
//             activeWatch: {
//                 active: false,
//                 resume: false,
//                 reset: false,
//             },

//         })
//         setInterval(()=>{
//             this.setState({
//                 time:{
//                     hour:this.state.time.hour,
//                     minute:this.state.time.minute,
//                     second:this.state.time.second+1,

//                 }
//             })
//         },1000)
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
//             time: {
//                 hour: 0,
//                 minute: 0,
//                 second: 0,

//             }
//         })

//     }

//     handleStop = () => {
//         this.setState({
//             activeWatch: {
//                 active: true,
//                 resume: true,
//                 reset: true,
//             }


//         })
//     }

//     handleIncrementHours = () => {
//         this.setState({
//             time: {
//                 hour: this.state.time.hour + 1,
//                 minute:this.state.time.minute,
//                 second:this.state.time.second,
//             }

//         })
//     }
//     handleIncrementMinute = () => {
//         this.setState({
//             time: {
//                 hour:this.state.time.hour,
//                 minute: this.state.time.minute + 1,
//                 second:this.state.time.second,
//             }

//         })
//     }
//     handleIncrementSeconds = () => {
//         this.setState({
//             time: {
//                 hour:this.state.time.hour,
//                 minute:this.state.time.minute,
//                 second: this.state.time.second + 1,
//             }

//         })
//     }


//     handleDecrementHours = () => {
//         if (this.state.time.hour !== 0) {
//         this.setState({
//             time: {
//                 hour: this.state.time.hour - 1,
//                 minute:this.state.time.minute,
//                 second:this.state.time.second,
//             }

//         })
//     }
//     }
//     handleDecrementMinute = () => {
//         if (this.state.time.minute !== 0) {
//         this.setState({
//             time: {
//                 minute: this.state.time.minute - 1,
//                 hour:this.state.time.hour,
//                 second:this.state.time.second,
//             }

//         })
//     }
//     }
//     handleDecrementSeconds = () => {
//         if (this.state.time.second !== 0) {
//             this.setState({
//                 time: {
//                     hour:this.state.time.hour,
//                     minute:this.state.time.minute,
//                     second: this.state.time.second - 1,
//                 }

//             })
//         }
//     }


//     render() {
//         return (
//             <>
//                 <div className="watch countdown">
//                     <h2>Countdown</h2>
//                     <div className="timers">

//                         <small className="left">Hours : </small>
//                         <small className="left">Minutes : </small>
//                         <small className="left">Seconds</small>
//                     </div>
//                     <div className="timers up">
//                         <span className="left arrow" onClick={this.handleIncrementHours}><i class="fas fa-long-arrow-alt-up"></i> </span>
//                         <span className="left arrow"  onClick={this.handleIncrementMinute}><i class="fas fa-long-arrow-alt-up"></i></span>
//                         <span className="left arrow" onClick={this.handleIncrementSeconds}><i class="fas fa-long-arrow-alt-up"></i></span>
//                     </div>
//                     <div className="timers">
//                         <span className="left">{this.state.time.hour} : </span>
//                         <span className="left">{this.state.time.minute} : </span>
//                         <span className="left">{this.state.time.second}</span>
//                     </div>
//                     <div className="timers down">
//                         <span className="left arrow" onClick={this.handleDecrementHours}><i class="fas fa-long-arrow-alt-down"></i></span>
//                         <span className="left arrow" onClick={this.handleDecrementMinute}><i class="fas fa-long-arrow-alt-down"></i></span>
//                         <span className="left arrow" onClick={this.handleDecrementSeconds}><i class="fas fa-long-arrow-alt-down"></i></span>
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
//                     <strong className="icon" onClick={this.props.handleCloseTimer}><i class="fas fa-times"></i></strong>
//                 </div>
//             </>
//         )
//     }
// }

// export default Timer;


import React, { Component } from "react";
import "../App.css";

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        <div className="Countdown-label">Hours : Minutes : Seconds</div>
        <div className="Countdown-display">
          <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </button>
          <button onClick={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </button>

          <div className="Countdown-time">
            {hours} : {minutes} : {seconds}
          </div>

          <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button onClick={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </button>
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={this.startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className="Button-start" onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button className="Button-reset" onClick={this.resetTimer}>
              Reset
            </button>
          )}
      </div>
    );
  }
}

export default Timer;