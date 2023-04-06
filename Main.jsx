import React,{ useState} from "react";
import Menu from "./process/Menu";
import Information from "./process/information"
import Review from "./process/review"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';

export  default function Main() {
    const [toggleState, setToggleState] = useState(1);
    const [change, setchange] = useState(203);

    const toggleTab = (index) => {
    setToggleState(index);
    };

    
    return(
        <div className = "main">
            <header>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 8 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        <div className="sub">안양 중앙 시장</div>
                    </Typography>
                </Toolbar>
            </AppBar>

                <div className="sub">
                    <img className="market" alt="mark" src="img/ssss.png" />
                <br />
                    성결 시장 맛집
                </div>
            </header>

            <body>
                <div className="rel">
                    <span >총리뷰 (330)</span>
                    <span onClick={()=>{setchange(change+1)}}>👍</span> {change}   
                    <span onClick={function() {alert('010-1234-5678')}}>📞</span>전화걸기 
                    <span onClick={function() {alert('www.wwwww.co.kr')}}>♥</span>공유 
                </div>

                <div className="sub2">
                    결제 방법:예약 및 픽업 구매,현장 결제
                </div>
            </body>
            
        <div>
            <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
                onClick={() => toggleTab(1)}>
                    가게 물품
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    가게 정보
                </button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>
                    리뷰
                </button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <Menu />
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Information />
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <Review />
                </div>
            </div> 
        </div>        
    </div>
    )
}
