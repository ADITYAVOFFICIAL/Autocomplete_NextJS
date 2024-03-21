import React, { useState } from 'react';

const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Emma' },
  { id: 3, name: 'Michael' },
  { id: 4, name: 'Sophia' },
  { id: 5, name: 'William' },
  { id: 6, name: 'Olivia' },
  { id: 7, name: 'James' },
  { id: 8, name: 'Ava' },
  { id: 9, name: 'Alexander' },
  { id: 10, name: 'Isabella' },
  { id: 11, name: 'Daniel' },
  { id: 12, name: 'Mia' },
  { id: 13, name: 'Ethan' },
  { id: 14, name: 'Charlotte' },
  { id: 15, name: 'Matthew' },
  { id: 16, name: 'Amelia' },
  { id: 17, name: 'Joseph' },
  { id: 18, name: 'Harper' },
  { id: 19, name: 'Benjamin' },
  { id: 20, name: 'Evelyn' },
  { id: 21, name: 'David' },
  { id: 22, name: 'Abigail' },
  { id: 23, name: 'Andrew' },
  { id: 24, name: 'Emily' },
  { id: 25, name: 'Logan' },
  { id: 26, name: 'Elizabeth' },
  { id: 27, name: 'Jameson' },
  { id: 28, name: 'Avery' },
  { id: 29, name: 'Lucas' },
  { id: 30, name: 'Sofia' },
  { id: 31, name: 'Jackson' },
  { id: 32, name: 'Aria' },
  { id: 33, name: 'Gabriel' },
  { id: 34, name: 'Scarlett' },
  { id: 35, name: 'Carter' },
  { id: 36, name: 'Madison' },
  { id: 37, name: 'Mateo' },
  { id: 38, name: 'Luna' },
  { id: 39, name: 'Ryan' },
  { id: 40, name: 'Grace' }
];

function AutocompleteSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);

    const filteredSuggestions = data.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setSelectedSuggestion(suggestion);
    setSuggestions([]); // Clear suggestions after selecting one
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter anything and get surprised...."
      />
      {searchQuery && suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteSearch;
