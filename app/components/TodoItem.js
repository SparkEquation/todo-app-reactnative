import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { style } from './TodoItem.style'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <View style={style.innerContainer}>
          <TodoTextInput style={[style.text, style.input, { height: 40 }]}
                         text={todo.text}
                         editing={this.state.editing}
                         onSave={(text) => this.handleSave(todo.id, text)} />
        </View>
      )
    } else {
      element = (
        <View style={style.innerContainer}>
          <TouchableOpacity style={style.left} onPress={() => completeTodo(todo.id)} >
            <View style={[style.status, todo.completed && style.completedStatus]}>
              {todo.completed && <Image source={require('./assets/tick.png')} style={style.tickImage}/>}
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={style.center} onPress={this.handleDoubleClick.bind(this)}>
            <Text numberOfLines={1} style={[style.text]}>{todo.text}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.right} onPress={() => deleteTodo(todo.id)} >
            <Image source={require('./assets/cross.png')} style={style.crossImage}/>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={[style.container, this.props.first && style.firstContainer]}>
        {element}
      </View>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  first: PropTypes.bool
}

export default TodoItem
