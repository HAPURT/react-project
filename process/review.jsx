import React from "react";
import "./tool.css"

export default function review(){
    
    return(
        <div>
            <div className="evaluation">
                <div className="score">
                    <h1>⭐ 4.8</h1>
                </div>

                <div className="dddsss">
                    <div className="star">
                        <span>맛</span>
                        <span>⭐⭐⭐⭐⭐</span>
                        <span>4.9</span>
                    </div>
                    <div className="star">
                        <span>양</span>
                        <span>⭐⭐⭐⭐⭐</span>
                        <span>4.8</span>
                    </div>
                    <div className="star">
                        <span>위생</span>
                        <span>⭐⭐⭐⭐⭐</span>
                        <span>4.7</span>
                    </div>
                </div>
            </div>

            <div className="serch2">
            최근리뷰
            </div>

            <div className="evaluation2">
                <div>
                    <img className="profile" alt="profile" src="img/pro.png" />
                </div>
                <div className="serch2">
                    안양시민 <br />
                    ⭐⭐⭐⭐⭐ (23.03.19)
                </div>
            </div>

            <div>
                <img className="market3" alt="mark" src="img/ssss.png" />
            </div>
        </div>
    );
}