import React, { Component,Fragment } from 'react';
import Inputitem from "./inputitem";
import "./inputlood.css"

class Inputlood extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[
                "aaa",
                "bbb",
            ],
            newValue:'',
        }
        this.handInputValue=this.handInputValue.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.onDelete=this.onDelete.bind(this);

    }
    handInputValue(e){
        this.setState({
            newValue:e.target.value,
        });      
    }
    handleButtonClick(){
        const newValue=this.state.newValue;
        if(newValue!==""){
            this.setState({
                list: [...this.state.list,this.state.newValue],
                newValue:'',
            });
        }
       
    }
    onDelete(index){
        const listd=[...this.state.list];
        listd.splice(index,1);
        this.setState({
            list:listd,
        })
    }
    getInputitem(){
        return(
            this.state.list.map((item,index) => {
                return (
                    <Inputitem 
                    key={index}
                    content={item} 
                    index={index} 
                    onClick={this.onDelete}
                    />
                )
                // return <li key={index} onClick={this.onDelete.bind(this,index)}>{item}</li>
            })
        )
       
    }
    render() {
        const {list}=this.state;
        return (
            <Fragment>
                <div className="nav">
                    <div className="nav-content">
                        <label className="nav-title">ToDoList</label>
                        <input 
                        className="nav-input" type="text" 
                        value={this.state.newValue} 
                        onChange={this.handInputValue}
                        placeholder="请输入标签"
                        />
                        <button className="nav-button" type="button" onClick={this.handleButtonClick}>add</button>
                    </div>                                        
                </div>
                <div className="content">
                    <div className="content-text">
                        <p><label className="title">正在进行</label><span className="cnumber">{list.length}</span></p>
                        <ul>{this.getInputitem()}</ul>
                    </div>
                    
                </div>                               
            </Fragment>
        );
    }
}

export default Inputlood;
