import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Head.jsx'
import Content from './Content.jsx'
import Profile from './Profile.jsx'

function App() {

  return (
    <>
      <Head />
      <Profile />
      <Content />
    </>
  )
}

export default App
