import React from 'react';
export const App = () => {
  return (
    <div>
      <h1 className="title">Recipe List</h1>
      {recipes.map((recipe, index) => (
        <Recipe className="card" key={index} recipe={recipe} />
      ))}
    </div>
  );
};
 
