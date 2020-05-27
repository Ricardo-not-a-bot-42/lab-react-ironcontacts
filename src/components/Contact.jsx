import React, { Component } from 'react';

function Contact(props) {
  return (
    <tr>
      <td>
        <img src={props.picture} alt="" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        <button
          onClick={() => {
            props.click(props.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Contact;
