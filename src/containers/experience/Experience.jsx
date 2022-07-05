import React, { useEffect } from 'react'
import './experience.css'
import useCollapse from 'react-collapsed'


function Section(props) {
  const config = {
      defaultExpanded: props.defaultExpanded || false,
      collapsedHeight: props.collapsedHeight || 0
      
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          <div className="title">{props.title}</div>

      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              {props.children}
          </div>
      </div>
  </div>
  );
}



const Experience = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div class="header-container">
      <h1 class="experienceH1">Experience and Skills</h1>
    <div class="aboutme-container">
      
    <div class="boxes box1">
        <div class="boxcontent">
            <h2>Who am I?</h2>
            <p>&emsp; Currently, I am a senior at Marymount University looking to get my foot into the door in the IT field. I'm expecting to graduate by December 2022 with a major in Information Technology and a minor in Computer Science. I've been coding since I was a junior in Highshool and started with Java. From there I took AP computer science classes and throughout college continued to take coding/scripting classes where I took leaps in my coding abilities. My sophomore year of college I started my internship at Navy Federal Credit Union (NFCU) which was my first introduction into the professional world of IT. I was a Desktop Support Intern there for 2 years before I found a new position inside of NFCU. My current position is a Business Systems Analyst Intern position. Currently, this role allows me to use coding on a daily basis and has given me the opportunity to obtain a considerable amount of knowledge. </p>
        </div>
    </div>
    <div class="boxes box2">
        <div class="boxcontent">
            <h2>Technical Skills</h2>
            <p>&emsp; In my career so far, I've become fairly knowledgeable with a variety of different coding languages. Listed below are the languages I'm most familiar with.</p>
            <div className="preferences">
           <Section title="Python">
            <p>Python is my personal favorite language to work with and the one I'm most knowledgable about. I've created multiple large projects using python and whenever I have a choice of languages to work with it is almost always my go to. </p>  
          </Section>
          <Section title="C#">
           <p>C# is the language I'm newest to and it is also the language I use on a daily basis at my current job. For the past year I've been using C# to complete professional work and have learned an extensive amount.</p>
          </Section>
          <Section title = "Java">
            <p>Java is the language that I've been using the longest and it's the language I used to learn how to code. I've been using Java for 6 years now but have focused on other languages and haven't used it at my current job.</p>
          </Section>
          <Section title = "HTML">
            <p>I'm fairly versed in HTML and have used it in a professional setting increasingly over the past year. As I am newer to HTML, there is still lots of room to develop my expertise, but over the past year my knowledge of it has accelerated.</p>
          </Section>
          <Section title = "JavaScript">
            <p>Currently, I've been spending a great deal of my free time teaching myself JavaScript in order for me to become a more versatile developer. I'm still learning but I've been thoroughly enjoying my time with the language. Prior to using ReactJS for this website, I created a similar Collapsible from Scratch.</p>
          </Section>
          <Section title = "SQL"> 
            <p>Throughout college, I have taken a few classes focused on SQL and use it in a professional setting today. In my current role, we mostly use stored procedures in order to pull data from different databases. </p>
          </Section>
     </div>

          </div>
        </div>

    <div class="boxes box3">
        <div class="boxcontent">
            <h2>Who am I outside of IT?</h2>
            <p>&emsp; I was born in Burke, VA and throughout my adolenscence I loved playing sports. I played football, soccer, baseball, and basketball on a team until I was in highschool. I attended Lake Braddock Secondary School and focused on playing basketball. Once I entered college, I started to realize that I most likely wouldn't have the time to continue to play and my first college, Northern Virginia Community College, did not have a team. From there my interest in IT grew and I continued to take some classes that would help me develop my coding skill. Eventually I transferred to Marymount where I am today.  Once COVID-19 hit I started to pick up other interests, such as cooking, video games, and running, while also researching future plans. Now, I'm planning on moving into an apartment in Brooklyn, NY.
        </p>
        </div>
    </div>
  </div>
  </div>
  )

}
export default Experience