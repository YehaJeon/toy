import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [내가낸것, 내가낸것변경] = useState(['?']);
    let [상대가낸것, 상대가낸것변경] = useState(['?']);

    function 가위() {
        var newArray = [...내가낸것];
        newArray[0] = '가위';
        내가낸것변경(newArray);
        let 가위바위보 = ['가위', '바위', '보'];
        var newArray2 = [...상대가낸것];
        newArray2[0] = 가위바위보[Math.floor(Math.random() * 가위바위보.length)];
        상대가낸것변경(newArray2);

        if (newArray2[0] === 가위바위보[2]) {
            console.log('you win');
        } else if (newArray2[0] === 가위바위보[0]) {
            console.log('try again');
        } else if (newArray2[0] === 가위바위보[1]) {
            console.log('you lose');
        }
    }

    function 바위() {
        var newArray = [...내가낸것];
        newArray[0] = '바위';
        내가낸것변경(newArray);
        let 가위바위보 = ['가위', '바위', '보'];
        var newArray2 = [...상대가낸것];
        newArray2[0] = 가위바위보[Math.floor(Math.random() * 가위바위보.length)];
        상대가낸것변경(newArray2);
        if (newArray2[0] === 가위바위보[0]) {
            console.log('you win');
        } else if (newArray2[0] === 가위바위보[1]) {
            console.log('try again');
        } else if (newArray2[0] === 가위바위보[2]) {
            console.log('you lose');
        }
    }

    function 보() {
        var newArray = [...내가낸것];
        newArray[0] = '보';
        내가낸것변경(newArray);
        let 가위바위보 = ['가위', '바위', '보'];
        var newArray2 = [...상대가낸것];
        newArray2[0] = 가위바위보[Math.floor(Math.random() * 가위바위보.length)];
        상대가낸것변경(newArray2);
        if (newArray2[0] === 가위바위보[1]) {
            console.log('you win');
        } else if (newArray2[0] === 가위바위보[2]) {
            console.log('try again');
        } else if (newArray2[0] === 가위바위보[0]) {
            console.log('you lose');
        }
    }

    return (
        <div className="App">
            <div className="divOne">
                <div className="me">
                    <h3>{내가낸것[0]}</h3>
                </div>

                <div className="buttonDiv">
                    <button className="btn1" onClick={가위}>
                        가위
                    </button>

                    <button className="btn2" onClick={바위}>
                        바위
                    </button>
                    <button className="btn3" onClick={보}>
                        보
                    </button>
                </div>
            </div>
            <div className="divTwo">
                <div className="computer">
                    <h3>{상대가낸것[0]}</h3>
                </div>
            </div>
        </div>
    );
}

export default App;
