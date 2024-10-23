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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="black"
                d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
              />
            </svg>
          </a>
          <a href="https://t.me/povyshka" target="_blank" rel="noreferrer">
            <img src='/icons/tg.png' alt='tg-icon'/>
          </a>
        </div>
      </div>
    </div>
  )
}
