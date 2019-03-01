import React, { Component ,Fragment} from 'react';
class Inputitem extends Component {
    constructor(props){
        super(props);
        this.onDeleteChild=this.onDeleteChild.bind(this);
    }
    onDeleteChild(){
        this.props.onClick(this.props.index);
    }
    render() {
        const {content}=this.props;
        return (
        <Fragment>
            <div className="list" >{content}<span className="delete" onClick={this.onDeleteChild}>--</span></div>
        </Fragment>       
        );
    }
}

export default Inputitem;