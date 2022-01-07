// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    const username = inputRef.current.value
    onSubmitUsername(username)
    event.preventDefault()
  }

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setUsername(isValid ? value : username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          ref={inputRef}
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
