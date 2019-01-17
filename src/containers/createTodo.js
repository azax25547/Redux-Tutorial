import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/action'
import { bindActionCreators } from 'redux'
import Table from './Table';


class CreateTodo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todoText : ''
        }

        this.onChangeTodoText = this.onChangeTodoText.bind(this);
    }

    onChangeTodoText(e){
        this.setState({
            todoText: e.target.value
        })
    }

    render(){
        return(
            <div className='form-group row'>
                <input onChange={this.onChangeTodoText} value={this.state.todoText} type="text" placeholder='Add todo Here'/> 
                <button type="button" onClick={ () =>{ this.props.addTodo(this.state.todoText); this.setState({ todoText: '' }) } } style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
                <Table  {...this.props} />
          </div>
        );
    }
}
const mapStateToProps = state => ({
    todo: state.todoReducer
})
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
