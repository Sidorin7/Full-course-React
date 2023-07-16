
import logo from "./logo.svg";
import "./App.css";

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      {/* <h1>My name is {name.firstName}, surname - {surname}</h1> */}
      <h1>
        My name is {name()}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

const DynamicGreating = (props) => {
  return (
    <div className={"mb-3 p-3 border border-" + props.color}>
      {

      }
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <DynamicGreating color={"primary"}>
        <h2>This weel was hard</h2>
        <h2>Hello world</h2>
      </DynamicGreating>
      {/* <WhoAmI name={{firstName: 'Ivan'}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={{firstName: 'Sergey'}} surname="Shack" link="instagram.com"/> */}
      <WhoAmI
        name={() => {
          return "Kail";
        }}
        surname="Shack"
        link="instagram.com"
      />
    </div>
  );
}

export default App;
