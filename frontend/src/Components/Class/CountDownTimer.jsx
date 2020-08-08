import React, { Component } from 'react'
import moment from 'moment'
// import ReactMomentCountDown from 'react-moment-countdown';

export default class TodayDate extends Component {

// state={
//     days:'',
//     hours:'',
//     minutes:'',
//     seconds:'',
//     expire:''
// }
// componentDidMount() {
//     console.log("inside didmount")
//     let x = setInterval(function() {

//         let countDownDate = new Date("2020-04-21T19:24:00").getTime();
//         // Get today's date and time
//         let now = new Date().getTime();
        
//         // Find the distance between now and the count down date
//         let distance = countDownDate - now;
        
//         // Time calculations for days, hours, minutes and seconds
//         let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         console.log("days"+days)
//         let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
//         let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//         console.log("seconds"+seconds)
        
//         // Output the result in an element with id="demo"
//         this.setState({
//             days:days,
//             hours:hours,
//             minutes:minutes,
//             seconds:seconds
//         })
//         // If the count down is over, write some text 
//         if (distance < 0) {
//         clearInterval(x);
//         // document.getElementById("demo").innerHTML = "EXPIRED";
//         this.setState({expire:"EXPIRED"})
//         }
//     }.bind(this), 1000)
// }

state = {
    days: undefined,
    timeDiff:undefined
  };
  countdownTimer = () => {
    // if (date) {
    this.interval = setInterval(() => {
      const { date } = this.props.class;
      let dt = new Date(date);
      //
      const then = moment(dt, "ddd MMM DD YYYY HH:mm:ss GMT Z");
      // console.log("kk"+then.format())
      const now = moment();
      var ms = moment(then, "DD/MM/YYYY HH:mm:ss").diff(
        moment(now, "DD/MM/YYYY HH:mm:ss")
      );
      var d = moment.duration(ms);
      var timeDiff = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
      const days = then.diff(now, "days");
      this.setState({
        days,
        timeDiff,
      });
    }, 1000);
  };
  componentDidMount() {
    this.countdownTimer();
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  
    render() {
        const { date } = this.props.class;
        var strtDate = new Date(date);
        // var secondss = strtDate.getTime() / 1000;
        const fromNow = moment(
          strtDate,
          "ddd MMM DD YYYY HH:mm:ss GMT Z"
        ).fromNow();
        return (
            <>
            <div>Live Start {fromNow}</div>
            {console.log("xxxx"+fromNow+typeof(fromNow))}
              {/* <div> */}
                {/* {this.state.days} days, {this.state.hours} :{" "}
                {this.state.minutes} : {this.state.seconds}</div> */}
                {/* {this.state.timeDiff} */}


                </>
            // <div>
            //     {}
            //     {this.state.days} days {this.state.seconds} seconds

            // </div>
        )
    
}
}