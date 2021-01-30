import React,{useEffect} from 'react'

import ProjectCard from "./WorkSection/ProjectCard"

import Aos from 'aos';
import "aos/dist/aos.css";

const WorkSection =()=> {

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])

    return (
       <section class="work section" id="work">
                <h2 class="section-title" data-aos="fade-up">Work</h2>
                    <ProjectCard
                        title={"Bibliotopia"}
                        imageFloat="right"
                        imageLink={"/Assets/projectImages/bibliotopia.png"}
                        info={<p>This is a FullStack Wep Application where users can add their book recomendations. They can 
                        input information such as the book author, the book title, a description and an image. Users can also update their 
                        posts or delete them as well as like posts made by them or other users.<br/><br/>
                        The Front-end of the application was created with React. For the styling I mainly used CSS and the Material-UI library. As for state managment Redux was used.
                        The Back-End of the application was build with Node and Express. The database used to hold all of the information is MongoDB.</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Bibliotopia"}
                        liveLink = {"https://bibliotopia-ea7bb.web.app/"}
                    />


                    <ProjectCard
                        title={"Portofolio Website"}
                        imageFloat="right"
                        imageLink={"/Assets/projectImages/PortofolioWebsite.png"}
                        info={<p>This is actually the second Version of my Portofolio. They both look identical with 
                        the exception of some minor layout and animation changes. The main diference comes in the technologies used.
                        The first one was build with HTML, CSS and Vanilla Javascript (If you wish to view the previous version you can visit 
                        <a target="_blank" className="embeded-link" href="https://armantoarisroutsis.github.io/Routsis_Armanto-Portofolio/"> this link</a>). <br/><br/>
                        For this version I remade the majority of the portofolio with React instead. All of the sections are split into components as well as the Navigation 
                        Bar and the Footer. Then some parts of some sections are also made into components for easier managment and for reusability purposes.
                        For some of the animations I used the React AOS library and for others I just used plain CSS.</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Routsis-Armanto-Portofolio"}
                        liveLink = {"https://routsis-armanto.web.app"}
                    />

                    <ProjectCard
                        title={"Task Manager"}
                        imageFloat="left"
                        imageLink={"/Assets/projectImages/TaskManager.png"}
                        info={<p>This is an application where users can create new tasks in order to organise things 
                        that they have to do. Each task has a title and a description. After creating a task the user 
                        can add multiple sub-tasks in each task. The user can also edit and delete tasks and sub-tasks.<br/><br/>
                        The frontend of this application was created mainly with React and for the layout and styling I used Css 
                        and the Material-UI library. I also used Redux for the state managment. The back end is build on Node.js
                        and Express.js. The database used to store all of the data is MongoDB.</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Task-Manager"}
                        liveLink = {""}
                    />


                    <ProjectCard
                        title={"Bitcoin Price Tracker"}
                        imageFloat={"right"}
                        imageLink={"/Assets/projectImages/BitCoinTracker.png"}
                        info="This is a little project that I made in order to better understand the 
                        Next.js framework. The application utilizes the CoinDesk Bitcoin Price Index 
                        API to track real-time changes of Bitcoin and display it in 3 different 
                        currencies (USD/GBP/EUR). The reason that this little application came to 
                        fruition was mentioned above as well, to get a stronger grasp of the Next.js 
                        framework as well as solidify my React.js knowledge even more."
                        githubLink = {"https://github.com/ArmantoArisRoutsis/BitPriceTracker"}
                        liveLink = {""}
                    />

                    <ProjectCard
                        title={"To Do List"}
                        imageFloat="left"
                        imageLink={"/Assets/projectImages/ToDoList.png"}
                        info={<p>This is my Version of the classic To-Do-List. The application allows the users to add 
                        and remove items from "a default list". Aside from that the user 
                        is also given the option to create multiple other lists.<br/><br/>
                        I made this web application using Node.js & Express.js 
                        for the backend. For the database I used MongoDB. As for 
                        the front end I used basic HTML5 & CSS3along with 
                        EJS for dynamic templating.</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/ToDoList"}
                        liveLink = {"https://afternoon-lake-67823.herokuapp.com/"}
                    />

                    <ProjectCard
                        title={"Wetheria"}
                        imageFloat={"right"}
                        imageLink={"/Assets/projectImages/WeatherApp.png"}
                        info="This application utilizes the open weather api to fetch infrormation such as weather 
                        in three different metrics, location as well as the icons used to display how the weather 
                        looks like. The stack used for the creation of this app was Node and Express on the backend 
                        and html and css along with Ejs for rendering on the front end."
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Wetheria"}
                        liveLink = {""}
                    />

            </section> 
    )
}

export default WorkSection
