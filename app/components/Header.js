import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import { View, Text } from 'react-native'
import { style } from './Header.style'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <View>
        <Text style={style.todos}>todos</Text>
        <View style={style.container}>
          <TodoTextInput newTodo
                       style={style.input}
                       onSave={this.handleSave.bind(this)}
                       placeholder="What needs to be done?" />
        </View>
      </View>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
