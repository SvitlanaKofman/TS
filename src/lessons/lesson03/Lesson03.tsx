import MyButton from "../../components/myButton/MyButton";

function Lesson03():JSX.Element {
  const handleClick = ():void => {
    console.log("click!");
  };
  const handleSubmit = ():void => {
    console.log("submit!");
  };
  const handleReset = ():void => {
    console.log("reset!");
  };
  return (
    <div className="lesson-conteiner">
      <h2>Lesson 03</h2>
      <p>React props</p>
      <p>Мы хотим научится передавать в компонент разные данные</p>
      <div>
        <MyButton  myType={"button"} text={"Нажми меня!"} func={handleClick} isDanger={true} />
        <MyButton  myType={"submit"} text={"Submit"} func={handleSubmit} isDanger={false} />
        <MyButton myType={"reset"}text={"Reset"} func={handleReset} isDanger={false} />
        <MyButton />
      </div>
    </div>
  );
}

export default Lesson03;
