import './App.css';
import React from 'react';

type Props = {};
type State = {artistSearch: string, relatedArtists:any };

export class App extends React.Component<Props, State>{

  constructor(props:any){
    super(props);

    this.state = {
      artistSearch: "",
      relatedArtists: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = () => {

  };

  handleChange = (event: { target: { value: string } }) => {
    this.setState({artistSearch: event.target.value});
  }

  render(){
  return (
    <div className="App">
      <h1>ily</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
          Artist: 
            <input type="text" value={this.state.artistSearch} onChange={this.handleChange}/>    
        </label>
        <input type="submit" value="tyl" />

      </form>
    </div>
  );
}
}

export default App;
