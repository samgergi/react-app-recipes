// src/components/LikeButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'

class LikeButton extends PureComponent {
  static propTypes = {
    liked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  classNames() {
    const { liked } = this.props

    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  render() {
    const { liked, onChange } = this.props

    return (
      <p className={ this.classNames() }>
        <button onClick={onChange}>
          { liked ?
            <span role="img" aria-label="liked">❤️</span> :
            <span role="img" aria-label="not liked">♡</span>
          }
          <span className="copy">
            { liked ?
              <span role="img" aria-label="liked">❤️</span> :
              <span role="img" aria-label="not liked">♡</span>
            }
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
