import React, { useState } from 'react';
import './App.css';

function App() {
    let [내가낸것, 내가낸것변경] = useState('?');
    let [상대가낸것, 상대가낸것변경] = useState(['?']);
    let 가위바위보 = ['가위', '바위', '보'];
    let [결과, 결과변경] = useState('');
    let newArray = [...내가낸것];
    let newArray2 = [...상대가낸것];
    let newArray3 = '';

    function 상대() {
        newArray2[0] = 가위바위보[Math.floor(Math.random() * 가위바위보.length)];
        상대가낸것변경(newArray2);
    }

    function 가위() {
        newArray = '가위';
        내가낸것변경(newArray);

        상대();

        if (newArray2[0] === '보') {
            newArray3 = '이겼습니다!';
            결과변경(newArray3);
        } else if (newArray2[0] === '가위') {
            newArray3 = '비겼습니다!';
            결과변경(newArray3);
        } else if (newArray2[0] === '바위') {
            newArray3 = '졌습니다!';
            결과변경(newArray3);
        }
    }

    function 바위() {
        newArray = '바위';
        내가낸것변경(newArray);

        상대();

        if (newArray2[0] === '가위') {
            newArray3 = '이겼습니다!';
            결과변경(newArray3);
        } else if (newArray2[0] === '바위') {
            newArray3 = '비겼습니다!';
            결과변경(newArray3);
        } else if (newArray2[0] === '보') {
            newArray3 = '졌습니다!';
            결과변경(newArray3);
        }
    }

    function 보() {
        newArray = '보';
        내가낸것변경(newArray);

        상대();

        if (newArray2[0] === '주먹') {
            newArray3 = '이겼습니다!';
            결과변경(newArray3);
        } else if (newArray2[0] === '보') {
            newArray3 = '비겼습니다!';
            결과변경(newArray3);
        } else if (newArray2[0] === '가위') {
            newArray3 = '졌습니다';
            결과변경(newArray3);
        }
    }

    return (
        <div className="App">
            <div className="divOne">
                <h2 className="text">{결과}</h2>
                <div className="me">
                    <h3>{newArray}</h3>
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
                    <h3>{newArray2[0]}</h3>
                </div>
            </div>
        </div>
    );
}

export default App;
