import React from 'react';

import CertificationItem from "./CertificationComponents/CertificationItem"
import TitleWithParaghraph from "./Shared/TitleWithParaghraph"

const CerificationsPage = () => {
    return (
        <main class="l-main">
            <section class="work section" id="certifications">

                <TitleWithParaghraph
                title="Certifications"
                paragraph="This is a small section about some of my achivements. These certifications are not in any way proof of my skills and my abilities. But they are an indication of
                         the time, effort and dedication that I have put outside of education, work and personal life into learning 
                         new skills that interest me. A lot of these courses and programs have helped me extend my knowledge and 
                         understanding of certain technologies and build many projects along the way."
                         />

                <div class="certifications-container bd-grid">
                    <CertificationItem imageLink="/Assets/cetrificationImages/Freecodecamp_Front_End_Libraries.png" link={"https://www.freecodecamp.org/certification/fcca03d2f11-fa19-496a-8326-1911ac37aaa3/front-end-libraries"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/Freecodecamp_Data_Structures_and_Algorithms.png" link={"https://www.freecodecamp.org/certification/fcca03d2f11-fa19-496a-8326-1911ac37aaa3/javascript-algorithms-and-data-structures"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/CC_WEBDEV_CPATH.png" link={"https://www.codecademy.com/profiles/ArmantoRoutsis"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/CC_COMPSCIENCE_CPATH.png" link={"https://www.codecademy.com/profiles/ArmantoRoutsis"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/CC_RUBYONRAILSCERT.png" link={"https://www.codecademy.com/profiles/ArmantoRoutsis"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/Freecodecamp_Responsive_Design_Certification.png" link={"https://www.freecodecamp.org/certification/fcca03d2f11-fa19-496a-8326-1911ac37aaa3/responsive-web-design"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/CC_PYTHONCERT.png" link={"https://www.codecademy.com/profiles/ArmantoRoutsis"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/U_PYTHONAUTOCERT.png" link={"https://www.udemy.com/certificate/UC-2ad78b71-ac1f-48ac-b764-14fa35cffa58/"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/CC_SQLCERT.png" link={"https://www.codecademy.com/profiles/ArmantoRoutsis"}/>
                    <CertificationItem imageLink="/Assets/cetrificationImages/CC_RUBYCERT.png" link={"https://www.codecademy.com/profiles/ArmantoRoutsis"}/>
                </div>

            </section>
        </main>
    )
}

export default CerificationsPage
