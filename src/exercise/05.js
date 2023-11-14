import * as React from 'react'
import '../box-styles.css'

const Box = ({className = '', styles, ...otherProps}) => (
  <div className={className} style={{...styles}} {...otherProps}></div>
)

const smallBox = (
  <Box
    children="small lightblue box"
    className="box box--small"
    style={{backgroundColor: 'lightblue'}}
  />
)
const mediumBox = (
  <Box
    children="medium pink box"
    className="box box--medium"
    style={{backgroundColor: 'pink'}}
  />
)
const largeBox = (
  <Box
    children="large orange box"
    className="box box--large"
    style={{backgroundColor: 'orange'}}
  />
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
