import React from "react";
import StopWatch from "./StopWatch";
import Timer from "./Timer";


class Main extends React.Component{
    constructor(props){
        super(props);

        this.state={
            stopWatch:false,
            timer:false,
        }
        
    }

    handleClickWatch=()=>{
        this.setState({
            stopWatch:true,

        })

    }
    handleClickTimer=()=>{
        this.setState({
            timer:true,

        })

    }
    handleCloseWatch=()=>{
        this.setState({
            stopWatch:false,
        })

    }
    handleCloseTimer=()=>{
        this.setState({
            timer:false,
        })

    }

    render(){
        return (
            <>
              <div className="btns">
              {this.state.stopWatch?<StopWatch handleCloseWatch={this.handleCloseWatch}/>:<button onClick={this.handleClickWatch}>Show Stopwatch</button>} 
              {this.state.timer?<Timer handleCloseTimer={this.handleCloseTimer} />:<button onClick={this.handleClickTimer}>Show Countdown</button>}  
              </div>
            </>
        )
    }
}

export default Main;