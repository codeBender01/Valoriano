import { getWindowWidth } from "../../utils/getWindowWidth";
import Memories from "./Memories";
import MemoriesMobile from "./MemoriesMobile";

const MemoriesPage = () => {
  const width = getWindowWidth();

  return width < 549 ? <MemoriesMobile /> : <Memories />;
};

export default MemoriesPage;
