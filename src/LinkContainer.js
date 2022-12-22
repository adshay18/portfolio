import LinkCard from "./LinkCard";
import bored from "./photos/bored.png";
import pet_portraits from "./photos/pet_portraits.png";
import picl from "./photos/picl.png";
import jobly from "./photos/jobly.png";

const LinkContainer = () => {
  const sites = [
    {
      url: "https://picl.quest/",
      image: picl,
      description:
        "Created database driven website driven by external photo API.  Users can browse photos and all information is captured through a relational PostgreSQL database built on Flask’s SQLAlchemy. Solely developed Front-End and Back-End in Python, Back-End written according to RESTful API techniques.",
    },
    {
      url: "https://kellyjamesart.shop",
      image: pet_portraits,
      description:
        "Lovely little website to display artist's work. Built on Bootstrap, requested form submissions through Google Forms.",
    },
    {
      url: "https://not-bored.surge.sh/",
      image: bored,
      description:
        "Created interactive site with an internal Express.js API to handle user data and requests per RESTful techniques. The frontend of the site is built on React.js, and Reactstrap, for a beautiful user experience. Users can search for things to do to cure their boredom and earn badges while doing it.",
    },
    {
      url: "https://shay-jobly.surge.sh/",
      image: jobly,
      description:
        "Demo application built on an Express.js backend with a React App frontend. Data is currently populated with mock companies and jobs, but ready to handle submissions.",
    },
  ];
  return (
    <div className="container links">
      <div className="row justify-content-center">
        {sites.map((site) => (
          <LinkCard
            image={site.image}
            url={site.url}
            description={site.description}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkContainer;
