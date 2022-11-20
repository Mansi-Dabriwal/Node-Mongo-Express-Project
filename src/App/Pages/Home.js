import React from 'react'
import Card from '../../component/Card'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>  
      <Card INFO={"HOME"} Description={"This Page is home page."}></Card>
    </div>
  )
}
