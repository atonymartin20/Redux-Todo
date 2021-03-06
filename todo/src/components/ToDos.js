import React from 'react';
import { connect } from 'react-redux';
import { updateComplete } from '../actions';

const ToDos = (props) => {
    return (
        <div>
            {props.toDos.map( todo => {
                return (
                        <h3 onClick={() => props.updateComplete(todo.id)} style={todo.completed ? {textDecoration:'line-through'}: {textDecoration:'none'}} key={todo.id}>
                        {todo.text}
                    </h3>
                )
            })}
        </div>
    )
}

export default connect(null, { updateComplete })(ToDos)