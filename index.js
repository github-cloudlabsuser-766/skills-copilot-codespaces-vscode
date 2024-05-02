import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;
const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);
data.forEach((group) => {
    group.forEach((person) => {
        console.log(`Name: ${person.name}, Age: ${person.age}`);
    });
});
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
    ],
    [
        { name: 'Bob', age: 35 },
        { name: 'Alice', age: 40 },
    ],
];

data.forEach((group) => {
    group.forEach((person) => {
        console.log(`Name: ${person.name}, Age: ${person.age}`);
    });
});
const names = data.flatMap(group => group.map(person => person.name));
console.log(names);