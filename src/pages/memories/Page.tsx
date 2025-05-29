import { getWindowWidth } from "../../utils/getWindowWidth";
import Memories from "./Memories";
import MemoriesMobile from "./MemoriesMobile";
import { Helmet } from "react-helmet";

const MemoriesPage = () => {
  const width = getWindowWidth();

  return (
    <>
      <Helmet>
        <title>Handcrafted Bracelets | Voloriano</title>
        <meta
          name="description"
          content="Discover our collection of handcrafted bracelets made with love and precision."
        />
        <meta property="og:title" content="Handcrafted Bracelets | Voloriano" />
        <meta
          property="og:description"
          content="Explore unique bracelet designs that complement your style."
        />
        <meta
          property="og:image"
          content="https://voloriano.com/assets/bracelet1-DMYItUW2.png"
        />
        <link rel="canonical" href="https://voloriano.com/" />
      </Helmet>

      {width < 549 ? <MemoriesMobile /> : <Memories />}
    </>
  );
};

export default MemoriesPage;
