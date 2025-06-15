import React from 'react';

function Button(props: {label: string; onClick: ()=> void; disabled: boolean}) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
  );
};

export default Button;