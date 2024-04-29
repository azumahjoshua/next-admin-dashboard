import React from 'react'
import styles from "@/app/ui/login/login.moudle.css"
import Loginfrom from '../ui/login/loginFrom/Loginfrom'
// import Loginfrom from '@/app/ui/login/loginFrom/Loginfrom'
const Login = () => {
  return (
    <div className={styles.container}>
      <Loginfrom/>
    </div>
  )
}

export default Login