import React from 'react'
import isFunction from 'lodash/isFunction'

export const pureComponent = (fn) => {
  class Wrapper extends React.PureComponent {
    render() {
      return fn(this.props, this.context)
    }
  }
  // не надо, т.к. подписывает на контекст как и функциональный компонент,
  // так и оболочку-PureComponent; лучше назначать сразу оболочке (снаружи)
  // Wrapper.contextTypes = fn.contextTypes
  Wrapper.displayName = fn.name
  return Wrapper
}

export const withState = (fn, defaultState = {}) => {
  class Wrapper extends React.Component {
    render() {
      return fn({
        state: this.state || defaultState,
        setState: this.setState.bind(this)
      })
    }
  }
  Wrapper.displayName = `withState(${fn.name})`
  return Wrapper
}

// функции handle* возвращают новые функции - следует применять в PureComponent
// для обработчиков вложенных компонентов, но не для обработчиков PureComponent

export const handleCheck = (key, input) => (event, isInputChecked) => {
  input({ key, value: isInputChecked })
}

export const handleChange = (key, input, isValidate) => (event, newValue) => {
  input({ key, value: newValue, isValidate })
}

export const handleSelectFieldChange = (key, input, options, isValidate) => (event, index) => {
  input({ key, value: options[index], isValidate })
}

export const handleSubmit = (isSubmitting, save) => (event) => {
  event.preventDefault()
  if (!isSubmitting) {
    save()
  }
}

export const ga = (eventCategory, eventAction, eventLabel) => () => {
  if (isFunction(window.ga)) {
    window.ga('send', 'event', eventCategory, eventAction, eventLabel)
  }
}

export const plural = (value, form1, form2, form3) => {
  // formatjs.io
  return value
}

export const formatDateTime = (dateTime) => {
  // formatjs.io
  // Intl.DateTimeFormat
  return dateTime + ''
}

export const sleep = (ms, reason = null) => new Promise((resolve, reject) =>
  setTimeout(() => {
    if (reason) {
      reject(reason)
      return
    }
    resolve()
  }, ms)
)
