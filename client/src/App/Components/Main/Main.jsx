import React from 'react'
import './Main.scss'
import Shkatulka from '../Shkatulka/Shkatulka'

export default function Main() {
  return (
    <div className="main-container">
      <div className="title">
        Выбери шкатулку и открой её!
        <div className="under-title">у тебя есть только одна попытка</div>
      </div>
      <div className='shkatulkas-container'>
        <Shkatulka/>
        <Shkatulka/>
      </div>
    </div>
  )
}
