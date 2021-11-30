import React from 'react';

const List = ({ movie }) => {
  return (
    <>
      {movie.map((movie) => {
        const { id, name, rating, image } = movie;
        return (
          <article key={id} className='movie'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{rating} rating</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;