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
                        The Front-end of the application was created with React. For the styling I mainly used CSS and the Material-UI library. Redux was used for state managment.
                        The Back-End of the application was build with Node and Express and the database used to hold all of the information is MongoDB.<br/><br/>
                        All requests are handled asynchronously and React router dome was used to avoid rendering and give this project a more application kind of feeling.
                        Many parts of the application are split into components to avoid repetition and achieve reusability.</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Bibliotopia"}
                        liveLink = {"https://bibliotopia-ea7bb.web.app/"}
                    />

                    <ProjectCard
                        title={"The Monster Library"}
                        imageFloat={"left"}
                        imageLink={"/Assets/projectImages/MonsterLibrary.png"}
                        info={<a>This is a Website were users can input information about a monster they want and add it to the database of the website. 
                        Every user can add information such as the monster name, it's origin, the type, a description and an image. Additionaly after a monster
                        is created the user has the option to edit the information that he previously inputed or if they wish to they can delete the monster.
                        <br/><br/>
                        The Client part of the applications was created mainly using React.js. For the styling I used plain CSS for the most part except for
                        some of the scroll animations for which I used the React Aos library. The Backend API was made using Node.js & 
                        Express.js. Finaly the I chose mongoDB as the database to store 
                        all the information.</a>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Wetheria"}
                        liveLink = {"https://the-monster-library.web.app/fechedmons"}
                    />


                    <ProjectCard
                        title={"Portofolio Website"}
                        imageFloat="right"
                        imageLink={"/Assets/projectImages/PortofolioWebsite.png"}
                        info={<p>This is the second Version of my Portofolio. Both this version and the previous one look identical with 
                        the exception of some minor layout and animation changes. The main diference comes in the technologies used.
                        The first one was build with HTML, CSS and Vanilla Javascript (If you wish to view the previous version you can visit 
                        <a target="_blank" className="embeded-link" href="https://armantoarisroutsis.github.io/Routsis_Armanto-Portofolio/"> this link</a>). <br/><br/>
                        For this version I remade the majority of the portofolio with React instead. All the sections, the Navigation bar and the footer are split into components. Then some parts of some sections are also made into components for easier managment and for reusability purposes.
                        For some of the animations I used the React AOS library and for others I just used plain CSS.</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Routsis-Armanto-Portofolio"}
                        liveLink = {"https://routsis-armanto.web.app"}
                    />

                    
                    <ProjectCard
                        title={"Task Manager"}
                        imageFloat="left"
                        imageLink={"/Assets/projectImages/TaskManager2.png"}
                        info={<p>This is an application where users can create new tasks in order to organise things that they have to do. Each 
                        task can have a title and a description. After creating a task the user can assign multiple sub-tasks under each task. The user can
                        also edit and delete tasks and sub-tasks.<br/><br/>
                        The frontend of this application was created mainly with React. For the layout and styling I used Css and the Material-UI 
                        library. As for the state managment I went with Redux. The back end of the application is build on Node.js and Express.js. The database used to 
                        store all of the data is MongoDB.
                        All requests and rendering are asynchronous. React router dom was used to avoid rendering and give this project a more application kind of feeling 
                        and a better user experience.Many parts of the application are split into components to avoid repetition and achieve reusability.</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Task-Manager"}
                        liveLink = {""}
                    />

                    <ProjectCard
                        title={"Weather Forcasting App"}
                        imageFloat={"right"}
                        imageLink={"/Assets/projectImages/WeatheriaForcastingApp.png"}
                        info={<p>This is a Weather Forcasting App where the users can input the name of a city or country and get 
                        weather information about the current time as well as a weather forecasting for the coming days of the week.
                        <br/><br/>This application utilizes the WeatherBit API to fetch information based on the location that the user 
                        input, information such as weather temperature in three different metrics, a description about the current weather, 
                        icons that can be used to display how the weather looks like and much more.<br/><br/>This project was made with 
                        React and CSS for the styling. Parts of the application such as the weekday are split into separate components for 
                        reusability and to avoid repetition. Functions used throughout the whole application are all gathered into a separate 
                        file and used as imports in order to make the code cleaner.
                        </p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/Weather-Forcasting-App"}
                        liveLink = {"https://weatheria-forcasting.web.app/"}
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
                        title={"Bitcoin Price Tracker"}
                        imageFloat={"right"}
                        imageLink={"/Assets/projectImages/BitCoinTracker.png"}
                        info={<p>This is a little project that I made in order to better understand the 
                        Next.js framework. The application utilizes the CoinDesk Bitcoin Price Index 
                        API to track real-time changes of Bitcoin and display it in 3 different 
                        currencies (USD/GBP/EUR). The reason that this little application came to 
                        fruition was mentioned above as well, to get a stronger grasp of the Next.js 
                        framework as well as solidify my React.js knowledge even more."</p>}
                        githubLink = {"https://github.com/ArmantoArisRoutsis/BitPriceTracker"}
                        liveLink = {""}
                    />


            </section> 
    )
}

export default WorkSection
