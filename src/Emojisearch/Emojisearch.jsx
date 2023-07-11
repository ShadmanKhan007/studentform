import { useState } from 'react';

const EmojiSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  const emojis = [
    { emoji: '😀', name: 'smile' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🥹', name: 'cry' },
    { emoji: '☹️', name: 'sad' },
    { emoji: ' 😊', name: 'happy' },
    { emoji: ' 😆', name: 'laughfing' },
    { emoji: ' 😡', name: 'angry' },
    
   
   
    // Add more emojis here
  ];

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(term)
    );
    setFilteredEmojis(filtered);
  };

  return (
    <div>
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="Search for an emoji"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredEmojis.map((emoji, index) => (
          <li key={index}>
            {emoji.emoji} - {emoji.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiSearch;
