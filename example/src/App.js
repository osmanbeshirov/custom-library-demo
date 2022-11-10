import React from 'react'

import { ExampleComponent, Button } from 'cassui'
import 'cassui/dist/index.css'


const App = () => {
  return <>
    <ExampleComponent text="Welcome to the CassUI 😄" />

    <Button text='Click me' onClick={() => alert('HI I AM A ALERT FUNCTION')} />

  </>
}

export default App
