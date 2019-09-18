import React, { Component } from 'react'

import Header from '../components/Header';
import Video from '../components/Video';
import People from '../components/People';

class Main extends Component {
    render() {
        return (
           <div>
               <Header />
               <Video />
               <People />
           </div>
        );
    }
}

export default Main;
