import { useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="monsters-title">Monsters rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search-monsters"
        className="monsers- search-box"
      />

      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
//       response.json().then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         }),
//       ),
//     );
//   }

//

//   render() {
//
//     return (
//
//     );
//   }
// }

export default App;
