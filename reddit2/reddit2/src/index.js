import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class APICall extends React.Component {
    constructor(){
        super();
        this.state ={
            items:[],
            isloaded: false
        }
    }
    componentDidMount(){
        fetch("https://www.reddit.com/r/aww.json")
        .then(res => res.json())
        .then(
            (result) =>{
                this.setState({
                    items: result.data.children,
                    isloaded: true
                })
            }
        )
    }
    render = () =>{
        return (
            
            <div>
                {this.state.isloaded ?(
                <ul className="list">
                    {this.state.items.map(item =>(
                        <li key={item.data.title} className="post">
                        <p>{item.data.author}</p>
                        {item.data.title}
                        <img src={item.data.thumbnail} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"/>
                        </li>
                    ))}
                </ul>
                ):(
                    <p>loading</p>
                )
                }
            </div>
            
        )}
        
    }


function App (){
    return(
        <div>
            <APICall />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );