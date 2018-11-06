// Constructor
function Chronometer(){
        this.currentTime = 0
        this.intervalId

    }

 Chronometer.prototype.startClick = ()=> {
        //var that = this
        currentTime=0
        this.intervalId = setInterval(() => {
            this.currentTime++
            console.log(this.currentTime)
            
            //this.setTime() Marca error
        },1000)
    
 }

 Chronometer.prototype.setMinutes = function () {
    //var that = this
        return this.setMinutes = (Math.floor(this.currentTime / 60))
    
 };

 Chronometer.prototype.setSeconds = function () {
    //var that = this
        return this.setSeconds = this.currentTime - ((this.setMinutes*1) * 60)
    
 };

 Chronometer.prototype.twoDigitsNumber = function (v){
     /*
    var that = this
    this.twoDigitsNumber = (setMinutes, setSeconds)=> {
        if (that.setMinutes*1 < 10)
            rerturn("0" + that.setMinutes)
        if (that.setSeconds*1 < 10)
            rerturn("0" + that.setSeconds)
            */
    if (v<10){
        return "0" + v
    }else{
        return v
    }
    
 }

 Chronometer.prototype.setTime = function() {
    /*var that = this
        if (that.setSeconds == 59) {
            that.setMinutes++;
            that.setSeconds = 0;
            
            //console.log(min+“:”+sec)
        }
    */
        this.m = this.twoDigitsNumber(this.setMinutes())
        this.s = this.twoDigitsNumber(this.setSeconds())
        /*else if(this.setSeconds<10){
          if(sec<=9){console.log(min+“:0"+sec)}
          else{console.log(min+“:”+sec)}
       
        }
        */
    this.minut = that.twoDigitsNumber(this.setMinutes())
    this.second = that.twoDigitsNumber(this.setSeconds())
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
    this.stopClick = () => {
        clearInterval(interval)
    }
 };

 Chronometer.prototype.resetClick = function () {
    this.resetClick = () => {
        this.setMinutes = 0
        this.setSeconds = 0
    }
 };

// Chronometer.prototype.splitClick = function () {

// };
