import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import YTSearch from 'youtube-api-search';



const API_KEY = 'AIzaSyDm0dQimfiD1L0_9RuheRT7SA4qzFHSvaY';

// Create a new component 
class App extends Component {

	constructor(props) {
		super(props)

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'something'}, (videos) => {
			console.log(videos);
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			})
			//this.setState({ videos: videos })
		});
	}

	render() {
		return (<div>
     		<SearchBar />
     		<VideoDetail video={this.state.selectedVideo} />
     		<VideoList 
     		onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
     		videos={this.state.videos} 
     		/>
		</div>);  //JSX  HTML into js 	
	}
}

// put it into the dom
ReactDOM.render(<App />, document.querySelector('.container'));