import React, { Component } from 'react';

export default (props) => {
    if (props.value < 0) {
        return null;
    }

    return (
        <div>
            {props.name.toUpperCase()}:
                    <input
                onChange={props.onChange}
                name={props.name}
                type="number"
                value={props.value} />
            <br />
            <br />
        </div>
    );
}