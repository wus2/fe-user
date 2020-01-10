import React from 'react';

export default function Star(props) {
  const { star } = props;
  const switchStar = () => {
    switch (star) {
      case 1:
        return (
          <div>
            <i style={{ color: 'yellow' }} className="fas fa-star" />
            <i className="fas fa-star" /> <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        );
      case 2:
        return (
          <div>
            <i style={{ color: 'yellow' }} className="fas fa-star" />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" /> <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        );
      case 3:
        return (
          <div>
            <i style={{ color: 'yellow' }} className="fas fa-star" />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        );
      case 4:
        return (
          <div>
            <i style={{ color: 'yellow' }} className="fas fa-star" />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" />
          </div>
        );
      case 5:
        return (
          <div>
            <i style={{ color: 'yellow' }} className="fas fa-star" />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
            <i className="fas fa-star" style={{ color: 'yellow' }} />
          </div>
        );
      default:
        return (
          <div>
            <i className="fas fa-star" />
            <i className="fas fa-star" /> <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        );
    }
  };
  return switchStar();
}
