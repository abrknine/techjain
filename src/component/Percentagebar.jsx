import React from 'react';
import PropTypes from 'prop-types';

const PercentageBar = ({ percentage }) => {
  // Ensure the percentage is within the range [0, 100]
  const clampedPercentage = Math.max(0, Math.min(60, percentage)); // Limiting to 60%

  const fillStyle = {
    width: `${clampedPercentage}%`,
    transition: 'width 0.3s ease', // Add a smooth transition effect
  };

  return (
    <div className="w-40 h-2 bg-gray-200 rounded overflow-hidden">
      <div className="fill h-full bg-green-500" style={fillStyle}></div>
      <button>
        read more
      </button>
    </div>  
  );
};

PercentageBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default PercentageBar;
