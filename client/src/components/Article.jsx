import React from 'react'

import './article.css'

/**
 * An article for the blog section
 * @param  {string} props.imgUrl article image
 * @param  {string} props.date   article date
 * @param  {string} props.title  article title
 * @return {element}             an article with its image
 */
const Article = ({ imgUrl, date, title }) => {
	return (
		<div className="gpt3__blog-container_article">
			<div className="gpt3__blog-container_article-image">
				<img src={imgUrl} alt="About the blog" />
			</div>
			<div className="gpt3__blog-container_article-content">
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<a href="#">Read full article >></a>
			</div>
		</div>
	)
}

export default Article