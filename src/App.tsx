import './App.css';
import React from 'react';
import { spotifyKeys } from './keys';

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

  componentDidMount = () => {
    let formData = new FormData();
    let clientId = spotifyKeys.clientId
    let clientSecret = spotifyKeys.clientSecret
    let spotifyUrl = "https://accounts.spotify.com/api/token"

    formData.append("grant_type","client_crendentials");
    formData.append("Authorization",`Basic ${btoa(clientId+":"+clientSecret)}`);

    console.log(formData)

    fetch(spotifyUrl, {
      method: `POST`,
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data));  
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
