import React,{useState} from 'react'


import ProjectItem from "./WorkSection/ProjectItem"

const WorkSection =()=> {

    return (
       <section class="work section" id="work">
                <h2 class="section-title">Work</h2>

                <div class="work__container bd-grid">
                    <ProjectItem 
                        title={"Bibliotopia"}
                        imageLink={"/Assets/projectImages/Bibliotopia.png"}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Bibliotopia"}
                        liveLink = {"https://u7kpv.csb.app/"}
                        modalContent="This application utilizes the open weather api to fetch infrormation such 
                        as weather in three different metrics, location as well as the icons used to display how 
                        the weather looks like. The stack used for the creation of this app was Node and Express on 
                        the backend and html and css along with Ejs for rendering on the front end."
                    />
                    <ProjectItem 
                        title={"Portfolio Website"}
                        imageLink={"/Assets/projectImages/PortofolioWebsite.png"}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Routsis_Armanto-Portofolio"}
                        liveLink = {"https://armantoarisroutsis.github.io/Routsis_Armanto-Portofolio/"}
                        modalContent="This is Portofolio Website that I created in order to display who 
                        I am and some of the projects that I have created to the world."
                    />
                    <ProjectItem 
                        title={"To Do List"}
                        imageLink={"/Assets/projectImages/ToDoList.png"}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/ToDoList"}
                        liveLink = {"https://afternoon-lake-67823.herokuapp.com/"}
                        modalContent="This is my Version of the classic To-Do-List. I made this web application 
                        using Node.js & Express.js for the backend. For the database I used MongoDB. As for the front
                        end just basic HTML5 & CSS3 was used along with EJS templating. The application gives you the 
                        option to add and remove items from a default-list. Aside from that the user is also given the 
                        ability to create multiple other lists."
                    />
                    <ProjectItem 
                        title={"Wetheria"}
                        imageLink={"/Assets/projectImages/WeatherApp.png"}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Wetheria"}
                        liveLink = {""}
                        modalContent="This application utilizes the open weather api to fetch infrormation such 
                        as weather in three different metrics, location as well as the icons used to display how 
                        the weather looks like. The stack used for the creation of this app was Node and Express on 
                        the backend and html and css along with Ejs for rendering on the front end."
                    />
                    <ProjectItem 
                        title={"Monster Generator"}
                        imageLink={"/Assets/projectImages/MonGen.png"}
                        githubLink = {"/public/Assets/projectImages/MonGen.png"}
                        liveLink = {""}
                        modalContent="This application utilizes the open weather api to fetch infrormation such 
                        as weather in three different metrics, location as well as the icons used to display how 
                        the weather looks like. The stack used for the creation of this app was Node and Express on 
                        the backend and html and css along with Ejs for rendering on the front end."
                    />
                    <ProjectItem 
                        title={"Bitcoin Price Tracker"}
                        imageLink={"/Assets/projectImages/BitCoinTracker.png"}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/BitPriceTracker"}
                        liveLink = {""}
                        modalContent="This application utilizes the open weather api to fetch infrormation such 
                        as weather in three different metrics, location as well as the icons used to display how 
                        the weather looks like. The stack used for the creation of this app was Node and Express on 
                        the backend and html and css along with Ejs for rendering on the front end."
                    />
                </div>
            </section> 
    )
}

export default WorkSection
