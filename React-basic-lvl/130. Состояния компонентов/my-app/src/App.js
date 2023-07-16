import { Component} from "react";


import "./App.css";

// const EmpItem = styled.div`
//   padding: 20px;
//   margin-bottom: 15px;
//   border-radius: 5px;
//   box-shadow: 5px 5px 10px rgba(0,0,0,.2) ;
// `;

// const Header = styled.h2`
//   font-size: 22px;
// `

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: "",
    };
    // this.nextYear = this.nextYear.bind(this)
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };
  render() {
    const { name, surname, link } = this.props;
    const {position, years} = this.state;


    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {years},
          position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </div>
    )
  }
}

// const Wrapper = styled.div`
//   width: 600px;
//   margin: 80px auto 0 auto;

// `

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {props.children}
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <DynamicGreating color={'primary'}>
        <h2>This weel was hard</h2>
        <h2>Hello world</h2>
      </DynamicGreating>
      <WhoAmI name="Sergey" surname="Shack" link="instagram.com" />
      <WhoAmI name="Alex" surname="Karpov" link="instagram.com" />
    </div>
  );
}

export default App;
