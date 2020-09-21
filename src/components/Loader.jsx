import React from 'react'

export default function Loader(props) {
  return (
    <div className="spinner-grow text-dark text-center m-auto" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}