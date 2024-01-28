/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { css } from "@emotion/react"
import "./App.css"

const accentColor = "#ff889c"

function App() {
  function register(formData) {
    console.log("Register with form data", formData)
  }

  function handleFormSubmit(event) {
    event.preventDefault()

    const { name, email, newPassword, confirmPassword } = event.target.elements

    register({
      name: name.value,
      email: email.value,
      password: newPassword.value,
    })
  }

  return (
    <div className="container">
      <h1
        css={{
          color: accentColor,
        }}
      >
        TweetX
      </h1>
      <button className="button">Login</button>
      <div>
        <h2>Create Account</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" id="newPassword" placeholder="Password" />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button className="button primary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
