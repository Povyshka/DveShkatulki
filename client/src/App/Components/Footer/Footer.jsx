import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <span>made by povyshka</span>
        <span>2024</span>
        <div className="links">
          <a
            target="_blank"
            href="https://github.com/Povyshka"
            rel="noreferrer"
          >
            github
          </a>
          <a href="https://t.me/povyshka" target="_blank" rel="noreferrer">
            tg
          </a>
        </div>
      </div>
    </div>
  )
}
