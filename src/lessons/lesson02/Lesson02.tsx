import react from "../../assets/react.jpg";
import MyButton from "../../components/myButton/MyButton";
import "./lesson02.css";
// функция-компонент должна называться с большой буквы
// имя файла тоже называется с большой буквы и совпадает с именем функции
function Lesson02():JSX.Element {
  const element = <li> Element in variable </li>;
  const text = "Text for JSX tag";
  const company = "Facebook";

  interface IUser {
    firstName: string
    lastName: string
  }
  const user:IUser = {
    firstName: "Brendan",
    lastName: "Eich",
  };

  function formatUser(name: IUser) {
    return name.firstName + " " + name.lastName;
  }

  const isLoggedIn = false 

  return (
    <div className="lesson-conteiner">
      <h3>Lesson 02</h3>
      <p>React JSX components</p>
      <img className="react" src={react} alt="react" />
      <ul>
        <li>Simple text</li>
        {element}
        <li>{text}</li>
        <li>React was createt by {company}</li>
        <li>{formatUser(user)} is creator of JS</li>
        <li>User {isLoggedIn ? 'is': 'is NOT'} in the system </li>
      </ul>
      <MyButton/>
    </div>
  );
}

// не забываем сделать export для связи с другими компонентами
export default Lesson02;
