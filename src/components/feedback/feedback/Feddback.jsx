import { useState } from "react";
import MyButton from "../../myButton/MyButton";

function Feedback() {
    const [like,setLike] = useState(0)
    
  return (
    <div className="lesson-container">
      <div>
        <span></span>
        <MyButton text={"Dislike"} />
        <MyButton isDanger={false} text={"Like"} />
        <span></span>
        <MyButton text={"Reset Results"} />
      </div>
    </div>
  );
}

export default Feedback;
