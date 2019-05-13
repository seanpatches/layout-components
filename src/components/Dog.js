import React from 'react';

const dog = {
  name: 'spot',
  age: 5,
  weight: '10 lbs'
};

export default function Dog() {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  );
}
