import bored from "./photos/bored.png";
import pet_portraits from "./photos/pet_portraits.png";
import picl from "./photos/picl.png";

const LinkContainer = () => {
  const sites = [
    { url: "https://picl.quest/", image: picl },
    { url: "https://kellyjamesart.shop", image: pet_portraits },
    { url: "https://not-bored.surge.sh/", image: bored },
  ];
  return (
    <div className="container">
      <div className="row"></div>
    </div>
  );
};

export default LinkContainer;
