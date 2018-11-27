import React from 'react';

const emojiList = [
	{emoji: '🎉', label: 'Party Popper'},
	{emoji: '😃', label: 'Grinning Face With Big Eyes'},
	{emoji: '🤔', label: 'Thinking Face'},
	{emoji: '😐', label: 'Neutral Face'},
	{emoji: '😕', label: 'Confused Face'},
	{emoji: '🙁', label: 'Slightly Frowning Face'},
	{emoji: '☹️', label: 'Frowning Face'},
	{emoji: '😟', label: 'Worried Face'},
	{emoji: '😯', label: 'PHushed Face'},
	{emoji: '🤕', label: 'Face With Head-Bandage'},
	{emoji: '😱', label: 'Face Screaming in Fear'}
];

const Emojis = emojiList => {
	return emojiList.map(emoji => <span role='img' aria-label={emoji.label}>{emoji.emoji}</span>);
}

export default Emojis(emojiList);