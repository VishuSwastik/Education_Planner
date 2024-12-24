import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import EducationPlanner from './components/EducationPlanner'

const App = () => {


  return (
  
    <div className={styles.cont}>
     <h2>Geekster Education Planner</h2>
     <EducationPlanner/>
    </div>
  
  )
}

export default App
