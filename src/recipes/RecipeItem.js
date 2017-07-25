// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'
import './RecipeItem.css'

class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  toggleLike() {
    const { _id, liked } = this.props
    this.props.onChange(_id, { liked: !liked })
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, liked } = this.props

    return(
      <article className="RecipeItem">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img className="Recipe-Type" src={Vegan} alt="Vegan" /></li> }
            { !vegan && vegetarian && <li><img className="Recipe-Type" src={Vegetarian} alt="Vegetarian" /></li> }
            { pescatarian && <li><img className="Recipe-Type" src={Pescatarian} alt="Pescatarian" /></li> }
          </ul>
          <LikeButton onChange={this.toggleLike.bind(this)} liked={liked} />
        </div>
      </article>
    )
  }
}

export default RecipeItem
