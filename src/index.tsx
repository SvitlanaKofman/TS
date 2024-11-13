import ReactDOM from "react-dom/client";
import "./index.css";
// import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson08 from "./lessons/lesson08/Lesson08";
import FetchDog from "./components/fetchDog/FetchDog";
import FetchFox from "./components/fetchFox/FetchFox";
import Lesson09 from "./lessons/lesson09/Lesson09";
import CatFacts from "./components/fetchCat/FetchCat";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* <Lesson06 /> */}
    {/* <Lesson04 /> */}
    {/* <Lesson07/> */}
    {/* <Lesson05 */}
    {/* <Lesson08/> */}
    {/* <FetchDog/> */}
    {/* <FetchFox/> */}
    {/* <Lesson09/> */}
    <CatFacts/>
  </>
);
