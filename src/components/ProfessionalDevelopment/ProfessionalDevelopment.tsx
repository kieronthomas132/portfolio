import HTMLIcon from "../../assets/skills/html5.png";
import ReactIcon from "../../assets/skills/react.png";
import CSSIcon from "../../assets/skills/css.png";
import JSIcon from "../../assets/skills/js.png";

const ProfessionalDevelopment = () => {
  return (
    <div className="text-white md:w-[83%] w-[100%] pb-[100px] pt-[120px] md:pt-[250px] mx-auto z-10 relative font-inter p-3">
      <div className="md:text-6xl text-5xl md:ml-5 font-bold mb-8">
        <h1>
          Professional <span className="text-neutral-400">Development</span>
        </h1>
        <h3 className="text-xl mt-4 text-neutral-500">How am I developing? </h3>
      </div>
      <div className="w-[100%] h-[2px] bg-neutral-600" />
      <img
        src={JSIcon}
        className="absolute w-[150px] -z-10 grayscale opacity-10 rotate-12 top-[240px] right-[100px]"
        alt={JSIcon}
      />
      <img
        src={HTMLIcon}
        className="absolute w-[150px] -z-10 grayscale opacity-10 rotate-12 top-[170px] left-[100px]"
        alt={HTMLIcon}
      />
      <img
        src={CSSIcon}
        className="absolute w-[150px] -z-10 grayscale opacity-10 rotate-12 bottom-[90px] right-[0px]"
        alt={CSSIcon}
      />
      <img
        src={ReactIcon}
        className="absolute w-[150px] -z-10 grayscale opacity-10 rotate-12 bottom-[150px] -left-[90px]"
        alt={ReactIcon}
      />
      <div className="md:ml-5 mt-8 p-2 md:p-0">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            My Journey from Biomedical Science to Web Development
          </h2>
          <p className="text-lg text-neutral-400">
            I graduated with a first-class degree in biomedical science but
            decided to transition into the world of web development. I began by
            learning HTML and CSS, foundational languages for web development,
            and later progressed to JavaScript. JavaScript posed a greater
            challenge as a programming language, but my determination and
            persistence helped me grasp its concepts.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Embracing React for Dynamic User Interfaces
          </h2>
          <p className="text-lg text-neutral-400">
            As I aimed to enhance my skills and create engaging web
            applications, I immersed myself in learning React and delving into
            frontend development. React, a powerful JavaScript library for
            building user interfaces, introduced me to concepts like hooks and
            component-based architecture. This knowledge empowered me to craft
            dynamic and captivating web experiences for users.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            Current Goals and Future Growth as a Full Stack Developer
          </h2>
          <p className="text-lg text-neutral-400">
            My current aspiration is to transition into a full stack developer
            role by expanding my knowledge and proficiency in backend
            development. I am actively learning essential backend technologies
            such as NodeJS, Express, MongoDB, MySQL, PostgreSQL, GraphQL, and
            more. By gaining hands-on experience with these technologies, I hope
            to utilize a multitude of backend tools and databases to develop
            comprehensive applications and deepen my understanding of
            server-side development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDevelopment;
