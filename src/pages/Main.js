import React from 'react';
import MPHands from "../components/MPHands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {Helmet} from "react-helmet";
import Chat from "../components/Chat";
// import styled from 'styled-components';

import '../App.css';

function Main() {
  return (
    <>
         <Helmet>
                <meta charSet={"utf-8"}/>
                <title>SLIRI</title>
            </Helmet>
          <div>
      <div>
        <div className="background">
          <div className="section__webcam">
            <div className="title">
              <h2>SLIRI</h2>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <MPHands/>
            <div className="desc">(수어에 대한 자막)</div>
          </div>
          <div className="section__assistant">
            <ul>
              <Chat text={"안녕하세요? 무엇을 도와드릴까요?"}/>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </> 
  );
}

export default Main;
