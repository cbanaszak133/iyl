import './App.css';
import React from 'react';

type Props = { name: string, imgUrl: string };
type State = {};

export class RelatedArtist extends React.Component<Props, State>{

    render(){
        return (
            <img src={this.props.imgUrl} alt={this.props.name} />
        )
    }

}

export default RelatedArtist