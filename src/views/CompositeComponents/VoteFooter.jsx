import React from 'react';
import PropTypes from 'prop-types';

const VoteFooter = function (props) {
  const {change} = props
  return(
      <div className="footer">
        <button onClick={change.bind(null, 'sup')}>支持</button>
        <button onClick={change.bind(null, 'opp')}>反对</button>
      </div>
  )
}
VoteFooter.propTypes = {
  change: PropTypes.func.isRequired
}
export default VoteFooter;
