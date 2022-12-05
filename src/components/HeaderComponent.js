import React from 'react';

function HeaderComponent(props){
    const {homePath,logoTitle,imgSrc,altSrc} = props
    return(
        <header id="header">
            <div class="left">
                <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={altSrc} /></a></h1>
            </div>
            <div class="right">
                <nav id="nav">
                    <ul>
                        <li>
                            <a href="!#" class="main-btn" title="재단소개">재단소개</a>
                            <div class="sub sub1">
                                <div class="container">
                                    <ul>
                                        <li> {/* <!-- 1칸 --> */}
                                            <ul>
                                                <li><a href="!#" title="설립취지">설립취지</a></li>
                                                <li><a href="!#" title="연혁">연혁</a></li>
                                                <li><a href="!#" title="찾아오시는길">찾아오시는길</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* <!-- 2칸 --> */}
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li> {/* <!-- 3칸 --> */}
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li> {/* <!-- 4칸 --> */}
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="!#" class="main-btn" title="후원하기">후원하기</a>
                            <div class="sub sub2">
                                <div class="container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li><a href="!#"국내후원>국내후원</a></li>
                                                <li><a href="!#"국외후원>국외후원</a></li>
                                                <li><a href="!#"맞춤후원>맞춤후원</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="!#" class="main-btn" title="자료실">자료실</a>
                            <div class="sub sub3">
                                <div class="container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li><a href="!#" title="서식자료실">서식자료실</a></li>
                                                <li><a href="!#" title="사진자료실">사진자료실</a></li>
                                                <li><a href="!#" title="후원양식">후원양식</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="!#" class="main-btn" title="스토리">스토리</a>
                            <div class="sub sub4">
                                <div class="container">
                                    <ul>
                                        <li>
                                            <ul>
                                                <li><a href="!#" title="웹진">웹진</a></li>
                                                <li><a href="!#" title="보고서">보고서</a></li>
                                                <li><a href="!#" title="나의후원">나의후원</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                        <li>
                                            <ul>
                                                <li><a href="!#">서브메뉴1</a></li>
                                                <li><a href="!#">서브메뉴2</a></li>
                                                <li><a href="!#">서브메뉴3</a></li>
                                            </ul>                      
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};
HeaderComponent.defaultProps = {
    homePath: "./index.html",
    imgSrc: "./images/logo.png",
    altSrc: "Green복지재단 Logo",
    logoTitle:"HOME"
}

export default HeaderComponent;