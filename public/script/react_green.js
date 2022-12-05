function WrapComponent(){
    return(
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <ModalComponent/>
        </div>
    )
}

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
                                    <a href="#" class="main-btn" title="재단소개">재단소개</a>
                                    <div class="sub sub1">
                                        <div class="container">
                                            <ul>
                                                <li> {/* <!-- 1칸 --> */}
                                                    <ul>
                                                        <li><a href="#" title="설립취지">설립취지</a></li>
                                                        <li><a href="#" title="연혁">연혁</a></li>
                                                        <li><a href="#" title="찾아오시는길">찾아오시는길</a></li>
                                                    </ul>
                                                </li>
                                                <li> {/* <!-- 2칸 --> */}
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li> {/* <!-- 3칸 --> */}
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li> {/* <!-- 4칸 --> */}
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="main-btn" title="후원하기">후원하기</a>
                                    <div class="sub sub2">
                                        <div class="container">
                                            <ul>
                                                <li>
                                                    <ul>
                                                        <li><a href="#"국내후원>국내후원</a></li>
                                                        <li><a href="#"국외후원>국외후원</a></li>
                                                        <li><a href="#"맞춤후원>맞춤후원</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="main-btn" title="자료실">자료실</a>
                                    <div class="sub sub3">
                                        <div class="container">
                                            <ul>
                                                <li>
                                                    <ul>
                                                        <li><a href="#" title="서식자료실">서식자료실</a></li>
                                                        <li><a href="#" title="사진자료실">사진자료실</a></li>
                                                        <li><a href="#" title="후원양식">후원양식</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="main-btn" title="스토리">스토리</a>
                                    <div class="sub sub4">
                                        <div class="container">
                                            <ul>
                                                <li>
                                                    <ul>
                                                        <li><a href="#" title="웹진">웹진</a></li>
                                                        <li><a href="#" title="보고서">보고서</a></li>
                                                        <li><a href="#" title="나의후원">나의후원</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
                                                    </ul>                      
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="#">서브메뉴1</a></li>
                                                        <li><a href="#">서브메뉴2</a></li>
                                                        <li><a href="#">서브메뉴3</a></li>
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
        }
        HeaderComponent.defaultProps = {
            homePath: "./index.html",
            imgSrc: "./images/logo.png",
            altSrc: "Green복지재단 Logo",
            logoTitle:"HOME"
        }

        function MainComponent(){
            return(
                <main id="main">
                    <Section1Component/>
                    <Section2Component/>
                </main>
            )
        }
                function Section1Component(){
                    return(
                        <section id="section1">
                        {/* <!--div.slide-container>div.slide-view>ul.slide-wrap>li.slide.slide$*3>img[src=img$.jpg]--> */}
                        <div class="slide-container">
                            <div class="slide-view">
                            <ul class="slide-wrap">
                                <li class="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                                <li class="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
                                <li class="slide slide2"><a href="#" title="그린복지재단2"><img src="./images/img2.jpg" alt="" /></a></li>
                                <li class="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                                <li class="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </section>
                    )
                }
                function Section2Component(){
                    return(
                        <section id="section2">
                        <div class="left board">
                            <button class="notice-btn">공지사항</button>
                            <div class="notice-box board-box">
                            <div class="gap">
                                <ul>
                                <li><a href="#" title="Green 복지재단 공지사항1" class="modal-btn">Green 복지재단 공지사항1</a><span>2020.11.23</span></li>
                                <li><a href="#" title="Green 복지재단 공지사항2">Green 복지재단 공지사항2</a><span>2020.11.23</span></li>
                                <li><a href="#" title="Green 복지재단 공지사항3">Green 복지재단 공지사항3</a><span>2020.11.23</span></li>
                                <li><a href="#" title="Green 복지재단 공지사항4">Green 복지재단 공지사항4</a><span>2020.11.23</span></li>
                                </ul>  
                            </div>
                            </div>
                        </div>
                        <div class="center board">
                            <button class="gallery-btn">갤러리</button>
                            <div class="gallery-box board-box">

                            <a href="#" title="icon1"><img src="./images/icon1.png" alt="icon1" /></a>
                            <a href="#" title="icon2"><img src="./images/icon2.png" alt="icon2" /></a>
                            <a href="#" title="icon3"><img src="./images/icon3.png" alt="icon3" /></a>

                            </div>
                        </div>  
                        <div class="right">
                            <div class="banner">
                            <div class='title'><h2>EVENT BANNER</h2></div>
                            <div class="img-box">
                                <a href="#" title="banner"><img src="./images/banner.jpg" alt="banner" /></a>
                            </div>
                            </div>
                        </div>  
                        </section>
                    )
                }
        function FooterComponent(){
            return(
                <footer id="footer">
                    <div class="left">
                    
                    <h1><a href="#" title="Logo"><img src="./images/footerLogo.png" alt="Logo" /></a></h1>

                    </div>
                    <div class="center">
                    
                    <div class="row1">
                        <span><a href="#" title="하단메뉴1">하단메뉴1</a></span>
                        <span><i>|</i></span>
                        <span><a href="#" title="하단메뉴2">하단메뉴2</a></span>
                        <span><i>|</i></span>
                        <span><a href="#" title="하단메뉴3">하단메뉴3</a></span>
                    </div>
                    
                    <div class="row2">
                        <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
                    </div>

                    </div>  
                    <div class="right">
                    
                    <select name="family" id="family">
                        <option value="" selected>패밀리 사이트</option>
                        <option value="패밀리사이트1">패밀리사이트1</option>
                        <option value="패밀리사이트2">패밀리사이트2</option>
                        <option value="패밀리사이트3">패밀리사이트3</option>
                    </select>

                    </div>  
                </footer>
            )
        }
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
        }

ReactDOM.render(
    <WrapComponent/>,
    document.getElementById('root')
);