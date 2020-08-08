import React from 'react';

function Content(props) {
  return (
    <div>
      <h3>Content</h3>
       {props.name}
       {props.address}
    </div>
  );
}

export default Content;