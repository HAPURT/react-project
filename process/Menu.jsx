import React from "react";
import "./tool.css"

export default function Menu(){
    return( 
        <div>
            <div className="product">
                <div className="serch" >
                    <h3>맛있는 꽈배기</h3>
                    <h3>리뷰(320)</h3>
                    <h3>3,700원</h3>
                </div>
                <div>
                    <img className="market2" alt="mark" src="img/ssss.png"
                        onClick={function() {alert('www.wwwww.co.kr')}} />
                </div>
            </div>
            
            <hr color = 'gray' width ='450px' align = 'left'/>

            <div className="product">
                <div className="serch" >
                    <h3>맛있는 사과</h3>
                    <h3>리뷰(200)</h3>
                    <h3>2,700원</h3>
                </div>
                <div>
                    <img className="market2" alt="mark" src="img/ssss.png" />
                </div>
            </div>

            <hr color = 'gray' width ='450px' align = 'left'/>

            <div className="product">
                <div className="serch" >
                    <h3>맛있는 배</h3>
                    <h3>리뷰(108)</h3>
                    <h3>1,700원</h3>
                </div>
                <div>
                    <img className="market2" alt="mark" src="img/ssss.png" />
                </div>
            </div>

        </div>
    );
}