import React from 'react';

function ModalComponent(){
    return(
        <div class="modal">
        <div class="wrap">
            <div class="container">
            <div class="gap">

                <div class="title">
                <h1>복지재단 공지사항</h1>
                </div>

                <div class="content">
                {/* <!-- 내용 --> */}
                <ol>
                    <li>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.</li>
                    <li>무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세.</li>
                    <li>남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.</li>
                </ol>                       
                </div>

                <div class="button-box">
                <button class="modal-close-btn">닫기</button>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
};

export default ModalComponent;