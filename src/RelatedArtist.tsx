import './RelatedArtist.css';
import React from 'react';


type Props = { name: string, imgUrl: string, spotifyUrl: string, token:string };
type State = {};

export class RelatedArtist extends React.Component<Props, State>{

    constructor(props:any){
        super(props);

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover = () => {

    }



    render(){
        return (
        <div className="artist-card">
            <a href={this.props.spotifyUrl}>
                <img src={this.props.imgUrl} alt={this.props.name} />
            </a>
            <p className="artist-name">{this.props.name}</p>
        </div>
        )
    }

}

export default RelatedArtist