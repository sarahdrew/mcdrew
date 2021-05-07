import { Component } from "react";
import checkerboardGreen from './assets/checkerboard-green.PNG';
import johnPortrait from './assets/jdrew.png';
import kevinPortrait from './assets/kmcdermott.png';

export default class TheMcDrew extends Component {
    render() {
        return (
            <>
                <div id="details">
                    <h2>The McDrew Details</h2>
                    <div class="description-paragraph">
                        <img class="green-checkerboard" src={checkerboardGreen} alt="McDrew Logo" />
                        <p class="paragraph">How it all started...The McDrew Tennis, Bags and Jazz Festival began with  an idea that rattled the idealism of progressive reality and opened the minds to peace and joy in 1974. It defined and opened a new era of celebration and tranquility that revolutionized how tennis and bags came together with the sweet slumber of jazz. The legend lives on...</p>
                    </div>
                    <div class="details-profile">
                        <div class="details-portrait">
                            <img alt="John Drew" src={johnPortrait} />
                        </div>
                        <p class="details-paragraph"><span style={{ color: "#448b66", fontWeight: "900" }} >John Drew</span> In his earlier years John traveled to the Everglades of Florida to master the art of Circus Dog Training. He has a strong love for the performing arts which is most evident in his recent portrayal of "Sheriff Jenkins" in the Sunnyvale Players of "The Western Toddies". When he is not at the country club moonlighting as a "Wine Sommelier", he can be found traveling the world discovering underground water caverns of the ocean</p>
                    </div>

                    <div class="details-profile">
                        <div class="details-portrait">
                            <img alt="Kevin McDermott" src={kevinPortrait} />
                        </div> <p class="details-paragraph"><span style={{ color: "#448b66", fontWeight: "900" }} >Kevin N. McDermott</span> is an attorney engaged in private practice in Springfield, Illinois, since 1990. He received a B.S. and M.S.W. from the University of Illinois- Champaign, along with an M.P.H. from the University of Minnesota-Minneapolis and a J.D. from St. Louis University. In conjunction with his private practice and since 2006, Mr. McDermott has served as the Sangamon County Public Guardian and Administrator. Mr. McDermott is a National Certified Guardian and his law practice is focused on the elderly, guardianship, probate and small business matters throughout the State of Illinois. Along with John L. Drew, Kevin is the co-founder and director of the McDrew Tennis & Jazz Festival which has generated nearly $400,000.00 for charitable organizations in Springfield and Central Illinois, during its 47 year history. Mr. McDermott loves his family and life long McDrew friends, and is an avid swimmer, kayaker, sailor, bike rider, hiker and dog walker, and an enthusiastic fan of tennis, the Fighting Illini, St. Louis Cardinals, and the Y. Kevin resides in Springfield with his dog, Doc, and can becontacted at Kevin@KevinNMcDermott.com or www.KevinNMcDermott.com.<a href="http://themcdrew.com" >Visit his professional website</a></p>
                    </div>
                </div>

            </>

        )
    }
}

