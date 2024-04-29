import React from 'react'
// import styles from "./loginForm.module.css"
import styles from "./loginForm.moudle.css"
const Loginfrom = () => {
  return (
    <>
    <form  className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {/* {state && state} */}
    </form>
    </>
  )
}

export default Loginfrom