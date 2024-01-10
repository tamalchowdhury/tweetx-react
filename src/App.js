/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { css } from "@emotion/react"
import "./App.css"

const accentColor = "#ff889c"

function App() {
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
        <form>
          <div>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" id="new-password" placeholder="Password" />
          </div>
          <div>
            <input
              type="password"
              id="confirm-password"
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
