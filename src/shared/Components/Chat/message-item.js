import React from 'react';

export default class messageItem extends React.PureComponent {
  render() {
    const { user, message, name } = this.props;
    return (
      <li
        style={{ display: 'flex' }}
        className={user ? 'message right appeared' : 'message left appeared'}
      >
        <div style={{ alignSelf: 'center' }}>{name}</div>
        <div className="text_wrapper">
          <div className="text">{message}</div>
        </div>
      </li>
    );
  }
}
