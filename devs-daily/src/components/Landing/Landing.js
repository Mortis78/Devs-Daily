import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './Landing.css'

export const Landing = (props) => {

  const articleCards = props.articles.map(article => {
    return (
      <Card
        // id={article.id}
        // key={article.id}
        // title={article.title}
        // description={article.description}
    
      />
    )
  })

  return (
    <div className='article-cards'>
      <Link className='favorites-link' to={'/Favorites'}>
        Go to Favorites
        </Link>
      {articleCards}
    </div>
  )
}

