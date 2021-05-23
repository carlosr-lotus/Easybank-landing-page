import { useState } from 'react'

import './articles.css'

export default function Articles() {

    const [articles] = useState([
        {
            id: 1,
            author: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
            img: require("../../images/image-currency.jpg").default
        }, 
        {
            id: 2,
            author: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
            img: require("../../images/image-restaurant.jpg").default
        }, 
        {
            id: 3,
            author: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
            img: require("../../images/image-plane.jpg").default
        }, 
        {
            id: 4,
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
            img: require("../../images/image-confetti.jpg").default
        }])

    return (
        // This component will return the articles section of the page

        <div className="articles-container">

            <h2>Latest Articles</h2>

            <div className="article-box-container">
                {articles.map((articles) => (
                    <div className="article-box" key={ articles.id }>
                        <img src={ articles.img } alt="article-img" />

                        <div className="article-text">
                            <h4>{ articles.author }</h4>
                            <h3>{ articles.title }</h3>
                            <p>{ articles.text }</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}