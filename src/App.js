import './App.css';
import PropTypes from 'prop-types';

import PostsApp from './PostsApp.js';
function App(props) {
  return (
    <div className="App">
      <PostsApp />
    </div>
  );
}

// Typechecking with PropTypes;
App.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}


// Make min and max characters posts!

// EXAMPLE IN RUBY
// validates :status, inclusion: { in: STATUS }
// validates :start_date, presence: true
// validates :end_date, comparison: { greater_than_or_equal_to: :start_date }
// validates :name, presence: true, length: { minimum: 2 }
// validates :species, presence: true,  inclusion: { in: SPECIES }

export default App;
