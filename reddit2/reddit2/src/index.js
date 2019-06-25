import React from 'react';
import ReactDOM from 'react-dom';
import './cssreset.css';
import './index.css';
function Header(){
    return(
        <a href="https://www.reddit.com/r/aww/">
            <div className="header">
                <span>r/AWW</span>
            </div>
        </a>
    )
}
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
            
            <div className="layout">
                <div className=""></div>
                {this.state.isloaded ?(
                <ul className="list">
                    {this.state.items.map(item =>(
                            <li key={item.data.title} className="post">
                                <a  href={"https://www.reddit.com"+ item.data.permalink} target="_blank">
                                    <p>Posted by: <a className="user" href={'https://www.reddit.com/user/'+ item.data.author} target="_blank">{item.data.author}</a></p>
                                        <p className="title">{item.data.title}</p>
                                    <img className="thumbnail" src={item.data.thumbnail} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"/>
                                </a>
                            </li>
                    ))}
                </ul>
                ):(
                    <p>loading</p>
                )
                }
                <div className=""></div>
            </div>
            
        )}
        
    }


function App (){
    return(
        <div>
            <Header />
            <APICall />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );