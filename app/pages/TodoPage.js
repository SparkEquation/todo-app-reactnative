import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
import { ScrollView } from 'react-native'

class TodoPage extends Component {
    render() {
        const { todos, actions } = this.props
        return (
            <ScrollView style={{
                flex: 1,
            }}>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} actions={actions} />
            </ScrollView>
        )
    }
}

TodoPage.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage)
