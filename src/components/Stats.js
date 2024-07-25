import React from 'react';

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>No items added yet</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You are all Packed and Ready to Go!! ✈️🌍'
          : `💼 You have ${numItems} items on your list, and ${numPacked} packed items
          on your list. ${percentage}% complete.`}
      </em>
    </footer>
  );
}
