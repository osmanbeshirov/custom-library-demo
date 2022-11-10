import React from 'react'

import { ExampleComponent, Button, CardBtn, Paragraph } from 'cassui'
import 'cassui/dist/index.css'

// import '../../dist/index.css'




const App = () => {
  return <>
    <ExampleComponent text="Welcome to the CassUI 😄" />

    <Button text='Click me' onClick={() => alert('HI I AM A ALERT FUNCTION')} />

    <CardBtn text='Add to card' onClick={() => alert('Product is added to card...')} />

    <Paragraph text='Just paragraph' />

  </>
}

export default App;
