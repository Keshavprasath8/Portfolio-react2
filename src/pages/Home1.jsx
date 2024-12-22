import React from "react";
import Hero from "../components/Hero";

function Home() {
  const name = "Keshav";
  const title = "Prasath";
  const description = "I'm a dedicated Frontend Developer with a passion for crafting visually appealing and highly functional web pages. With expertise in HTML, CSS, JavaScript, and React, I transform ideas into interactive and responsive websites that users love.";
  const githubLink = "https://github.com/yourusername"; 
  const linkedinLink = "https://www.linkedin.com/in/keshav-prasath-aa35a8171/";
  const netlifyLink = "https://app.netlify.com/teams/keshavprasath8/sites";

  return (
    <div>
      <Hero 
        name={name} 
        title={title} 
        description={description} 
        githubLink={githubLink} 
        linkedinLink={linkedinLink} 
        netlifyLink={netlifyLink} 
      />
    </div>
  );
}

export default Home;
