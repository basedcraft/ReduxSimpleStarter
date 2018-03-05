import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAFg12sK_E3krdA1sGSsp6zFtPQKHBh_os'

// Create a new component. This component should produce
// some HTML

const App =  () => {
       return (
           <div>
               <SearchBar/>
           </div>
       );

}


// Take this component's generated HTML and put it
// on the page (in the DOM)s
ReactDOM.render(<App />, document.querySelector('.container'));