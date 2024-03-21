import React, { useState } from 'react';

const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Lucifer Morningstar' },
  { id: 3, name: 'Sherlock Holmes' },
  { id: 4, name: 'Jake Peralta' },
  { id: 5, name: 'Kang the Conqueror' },
  { id: 6, name: 'Walter White' },
  { id: 7, name: 'Heisenberg' },
  { id: 8, name: 'Spider-Man' },
  { id: 9, name: 'Tony Stark' },
  { id: 10, name: 'Darth Vader' },
  { id: 11, name: 'Hannibal Lecter' },
  { id: 12, name: 'Harry Potter' },
  { id: 13, name: 'Gandalf the Grey' },
  { id: 14, name: 'Frodo Baggins' },
  { id: 15, name: 'James Bond' },
  { id: 16, name: 'Indiana Jones' },
  { id: 17, name: 'Wonder Woman' },
  { id: 18, name: 'Captain Jack Sparrow' },
  { id: 19, name: 'Homer Simpson' },
  { id: 20, name: 'Mickey Mouse' },
  { id: 21, name: 'Bugs Bunny' },
  { id: 22, name: 'Marge Simpson' },
  { id: 23, name: 'SpongeBob SquarePants' },
  { id: 24, name: 'Batman' },
  { id: 25, name: 'Superman' },
  { id: 26, name: 'Hulk' },
  { id: 27, name: 'Thor' },
  { id: 28, name: 'Black Widow' },
  { id: 29, name: 'Captain America' },
  { id: 30, name: 'Wolverine' },
  { id: 31, name: 'Yoda' },
  { id: 32, name: 'Luke Skywalker' },
  { id: 33, name: 'Princess Leia' },
  { id: 34, name: 'Dumbledore' },
  { id: 35, name: 'Voldemort' },
  { id: 36, name: 'Neo' },
  { id: 37, name: 'Trinity' },
  { id: 38, name: 'Morpheus' },
  { id: 39, name: 'Iron Man' },
  { id: 40, name: 'Black Panther' },
  { id: 41, name: 'Katniss Everdeen' },
  { id: 42, name: 'Thorin Oakenshield' },
  { id: 43, name: 'Ellen Ripley' },
  { id: 44, name: 'Darth Maul' },
  { id: 45, name: 'Captain Marvel' },
  { id: 46, name: 'Dobby' },
  { id: 47, name: 'Rick Sanchez' },
  { id: 48, name: 'Morty Smith' },
  { id: 49, name: 'Mr. Bean' },
  { id: 50, name: 'Sheldon Cooper' },
  { id: 51, name: 'Srikant Tiwari' },
  { id: 52, name: 'JK [Family Man]' },
  { id: 53, name: 'Tom Hanks' },
  { id: 54, name: 'Leonardo DiCaprio' },
  { id: 55, name: 'Brad Pitt' },
  { id: 56, name: 'Angelina Jolie' },
  { id: 57, name: 'Meryl Streep' },
  { id: 58, name: 'Jennifer Lawrence' },
  { id: 59, name: 'Robert Downey Jr.' },
  { id: 60, name: 'Johnny Depp' },
  { id: 61, name: 'Chris Hemsworth' },
  { id: 62, name: 'Chris Evans' },
  { id: 63, name: 'Scarlett Johansson' },
  { id: 64, name: 'Emma Watson' },
  { id: 65, name: 'Dwayne Johnson' },
  { id: 66, name: 'Ryan Reynolds' },
  { id: 67, name: 'Deepika Padukone' },
  { id: 68, name: 'Amitabh Bachchan' },
  { id: 69, name: 'Shah Rukh Khan' },
  { id: 70, name: 'Salman Khan' },
  { id: 71, name: 'Priyanka Chopra' },
  { id: 72, name: 'Kareena Kapoor Khan' },
  { id: 73, name: 'Alia Bhatt' },
  { id: 74, name: 'Ranveer Singh' },
  { id: 75, name: 'Aishwarya Rai Bachchan' },
  { id: 76, name: 'Rajinikanth' },
  { id: 77, name: 'Hrithik Roshan' },
  { id: 78, name: 'Akshay Kumar' },
  { id: 79, name: 'Ranbir Kapoor' },
  { id: 80, name: 'Deepika Padukone' }
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
      {selectedSuggestion && (
        <p className='selected breathing'>Selected Option: {selectedSuggestion.name}</p>
      )}
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