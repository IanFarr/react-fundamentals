import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [error, setError] = React.useState(null)

  const handleChange = event => {
    const input = event.target.value
    const isValid = input === input.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input">Username:</label>
        <input
          id="usernameInput"
          type="text"
          ref={usernameInputRef}
          onChange={handleChange}
        />
        {error ? <p>{error}</p> : null}
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
