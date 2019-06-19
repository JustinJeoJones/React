import React from 'react';
import ReactDOM from 'react-dom';

class FormatName extends React.Component{
    constructor(){
        super();
        this.state ={
            fname: '',
            lname: ''
        }
    }
    changeFName = (event) =>{
        this.setState({
            fname: event.target.value
        });
    }
    changeLName = (event) =>{
        this.setState({
            lname: event.target.value
        });
    }
    render = () =>{
        return <div>
        <form>
            First Name<input type="text" value={this.state.fname} onChange={this.changeFName}></input>
            Last Name<input type="text" value={this.state.lname} onChange={this.changeLName}></input>
        </form>
        {this.state.fname !== '' ? 
        (<h1>{this.state.fname} {this.state.lname}</h1>):
        (<h1>No name set up</h1>)

    }
    </div>;
    }
    
}


class ActionLink extends React.Component{
    constructor(){
        super();
        this.state = {
            label: 'Click Me!'
        };
    }
   
    
    handleClick= (e) =>{
        e.preventDefault();
        console.log(this.state.label);
        this.setState({
            label:'Link was clicked!'
        });
    }
    render =() =>{
        return(
            <a href="#" onClick={this.handleClick}>
            {this.state.label}
            </a>
        )
    }
}


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
           date: new Date() 
        });
    }
    render(){
        return(
             <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        )
    }
}

function App(){
    return (
        <div>
            <FormatName />
            <Clock date={new Date()} />
            <ActionLink />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );



