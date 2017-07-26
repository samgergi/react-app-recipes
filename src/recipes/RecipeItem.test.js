// src/recipes/RecipeItem.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'

chai.use(chaiEnzyme())

const recipe = {
  _id: 'abcd123',
  title: 'Spanish Omelette',
  summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
  vegan: false,
  vegetarian: true,
  pescatarian: false,
  onChange: () => {} // stub
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "RecipeItem"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('RecipeItem')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })
})
