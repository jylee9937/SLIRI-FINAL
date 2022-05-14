import React from 'react'
import assistantLogo from "../assets/Google_Assistant_logo.png";

function Chat({text}) {
  return (
    <li>
        <img src={assistantLogo} className="assistant" alt={"구글 어시스턴트 로고"}/>
        <p>{text}</p>
    </li>
  )
}

export default Chat;
