import React from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const summarizeText = (rawText) => {
  let length = 2;
  console.log(rawText);
  //use figaro to hide api key
  // axios.post('https://rallycoding.herokuapp.com/api/music_albums')
  //      .then(res => console.log(res));

 // fetch('http://api.smmry.com/?SM_API_KEY=2CA94C7AE9&SM_LENGTH=3&SM_URL=https://en.wikipedia.org/wiki/Computer', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => console.log("smmry", res.sm_api_content));

  axios.post('http://api.smmry.com/?SM_API_KEY=2CA94C7AE9&SM_LENGTH=3&SM_URL=https://en.wikipedia.org/wiki/Computer')
    .then(res => console.log(res));

};

class AlbumList extends React.Component {
  state = { albums: [] };

  componentWillMount () {
    summarizeText('hi my name is ryley. how are you.');
  }

  renderAlbums () {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render () {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
