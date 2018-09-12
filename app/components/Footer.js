import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { style } from './Footer.style'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <Text style={style.count}>
        {activeCount || 'No'} {itemWord} left
      </Text>
    )
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <TouchableOpacity onPress={() => onShow(filter)}>
        <View style={[
            style.filter,
            selectedFilter === filter && style.activeFilter
          ]} >
          <Text style={style.filterText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <TouchableOpacity onPress={onClearCompleted} style={style.clearContainer}>
          <Text style={style.clear}>Clear</Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
          <View style={style.container}>
              {this.renderTodoCount()}
              <View style={style.filterContainer}>
                  {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
                      <View key={filter}>
                          {this.renderFilterLink(filter)}
                      </View>
                  )}
              </View>
              {this.renderClearButton()}
          </View>
      )
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer
