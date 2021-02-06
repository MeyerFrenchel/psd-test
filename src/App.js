import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Features from './components/Features/Features';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Banana from './assets/banana.jpg';
import SmallBanana from './assets/small-banana.jpg';
import Build from './assets/build.jpg';
import SmallBuild from './assets/small-build.jpg';
import YoutubeIcon from './assets/Group 1.png';
import SmallYoutubeIcon from './assets/smallyoutube.png';
import { Component } from 'react';


class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {

    const { width } = this.state;
  const isMobile = width >= 756;  
    
    if(isMobile) {
      return (
        <div className="App">
        <Router>
        <Navbar />
        <Sidebar/>
        <Features primaryHead={'Illustration'} lessons={24} minutes={134} imageUrl={Banana} widthSize={1345} heightSize={544} left={259} top={194} socialIcon={YoutubeIcon}/>
        <Features primaryHead={'Graphic Design'} lessons={30} minutes={236} imageUrl={Build} widthSize={1355} heightSize={544} left={252} top={798} socialIcon={YoutubeIcon}/>
        </Router>
          
        </div>
      );
    } else {
      return(
      <div className="App">
      <Router>
      <Navbar />
      <Sidebar/>
      <Features primaryHead={'Illustration'} lessons={24} minutes={134} imageUrl={SmallBanana} widthSize={360} heightSize={225} left={40} top={233} socialIcon={SmallYoutubeIcon}/>
      <Features primaryHead={'Graphic Design'} lessons={30} minutes={236} imageUrl={SmallBuild} widthSize={360} heightSize={225} left={40} top={571} socialIcon={SmallYoutubeIcon}/>
      </Router>
        
      </div>
    );
    }

  }

  
  
}

export default App;
