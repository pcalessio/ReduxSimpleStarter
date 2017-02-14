import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import YTSearch from 'youtube-api-search';



const API_KEY = '';

// Create a new component 
class App extends Component {

	constructor(props) {
		super(props)

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surf');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			console.log(videos);
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			})
			//this.setState({ videos: videos })
		});
	}

	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (<div>
     		<SearchBar onSearchTermChange={videoSearch} />
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