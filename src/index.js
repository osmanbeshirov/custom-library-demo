import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = (props) => {
  return (
    <button {...props} >{props.text}</button>
  )
}

export const CardBtn = (props) => {
  return (
    <button {...props}>{props.text}</button>
  )
}

export const Paragraph = (props) => {
  return <p className={styles.paragraph} {...props}>{props.text}</p>
}
