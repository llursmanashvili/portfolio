/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import Portfolio from "../../assets/recentprojects/react-portfolio.png";
import Veritru from "../../assets/recentprojects/veritru.png";
import Lofo from "../../assets/recentprojects/lofo.png";
import Startup from "../../assets/recentprojects/startup.png";
import Lacalle from "../../assets/recentprojects/lacalle.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "GEORGIAGOLD.COM",
      description: `A website project for 4 start hotel in Gori,Georgia.It contains all nacessary inforamtion about hotel services.`,
      alter: "Static hotel website",
      href: "https://main--chic-madeleine-a5609b.netlify.app/",
      image: `${Lacalle}`,
    },
    {
      id: 2,
      title: "BGSHOP.GE",
      description: `Static Website for shop in Tskneti,Georgia. Site has simple design and it shows product with prices,also it contains contact informations also.`,
      alter: "static shop website",
      image: `${Lofo}`,
      href: "http://bgshop.ge",
    },
    {
      id: 3,
      title: "Metal Plastic Doors",
      description: `WebSite for Metal-plastic factory,which contains information about factory's product and their services.`,
      alter: "Static website",
      href: "https://649ef71922c077134e87897d--frabjous-genie-0427ba.netlify.app/",
      image: `${Portfolio}`,
    },

    {
      id: 4,
      title: "RoboFriends",
      description: `React application with working search bar and api profiles.`,
      alter: "Startup Project",
      image: `${Startup}`,
      href: "https://llursmanashvili.github.io/projectr/",
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <a href={project.href}>
                <img src={project.image} alt={project.alter} />
              </a>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
