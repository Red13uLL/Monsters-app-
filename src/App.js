import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    1;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="monsters-title">Monsters rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search-monsters"
        className="monsers- search-box"
      />

      <CardList monsters={filteredMonsters} />
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
//         }),s
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
