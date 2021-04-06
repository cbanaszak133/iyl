import './App.css';
import React from 'react';
import RelatedArtist from './RelatedArtist';


interface Props {};

interface relatedArtist { name:string, imgUrl:string }

interface State {artistSearch: string, spotifyToken: string, relatedArtists:relatedArtist[]};

export class App extends React.Component<Props, State>{

  constructor(props:any){
    super(props);

    this.state = {
      artistSearch: "",
      spotifyToken: "",
      relatedArtists: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    let tokenUrl = "http://localhost:9000/token"

    fetch(tokenUrl, {
      method: `GET`,
    })
    .then(response => response.json())
    .then(data => this.setState({spotifyToken: data.access_token}));  
  }

  handleSubmit = (event: { preventDefault: () => void; }) => {
    let spotfiySearchUrl = "https://api.spotify.com/v1/search?q=" + this.state.artistSearch + "&type=artist"
    var artistId = "";

    console.log(spotfiySearchUrl);

    fetch(spotfiySearchUrl, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + this.state.spotifyToken
      }
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data.artists.items[0].id);
      artistId = data.artists.items[0].id
    })
    .then( () => {
      if(artistId!==""){
        this.relatedSearch(artistId);
      }
    })

    event.preventDefault();
  };

  handleChange = (event: { target: { value: string } }) => {
    this.setState({artistSearch: event.target.value});
  }

  relatedSearch = (artistId: string) => {
    let spotfyRelatedUrl = "https://api.spotify.com/v1/artists/" + artistId + "/related-artists"

    fetch(spotfyRelatedUrl,{
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + this.state.spotifyToken
      }
    })
    .then(response => response.json())
    .then((data) => {
      let relArts:relatedArtist[] = [];

      for(var i = 0; i < data.artists.length; i++){
        relArts.push({name:data.artists[i].name, imgUrl:data.artists[i].images[0].url})
      }
      
      console.log(relArts)
      console.log(data.artists[0])

      this.setState({relatedArtists:relArts});
      console.log(this.state.relatedArtists)
    });

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

      {this.state.relatedArtists.map((artist: relatedArtist) => {
        return <RelatedArtist name={artist.name} imgUrl={artist.imgUrl} />
      })}

    </div>
  );
}
}

export default App;
