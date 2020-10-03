import './navMenu.css'
import React, { useState } from 'react'

export default function NavMenu() {
    const categories = [
        'shirts', 'sweetshots', 'hoodies',
        'rubashkas', 'caps', 'shapkas',
        'polo', 'bags', 'accessories',
        'memes', 'FAQ'
    ]
    const [currentCategory, setCategory] = useState(null);

    let clickHandler = (category) => {
        if (category !== currentCategory) {
            setCategory(category);
        }
    }

    return (
        <ul className='nav-list'>
            {
                categories.map(item => {
                    return <li
                        className={`nav-list__item ${item === currentCategory ? `nav-list__item--active` : ``}`}
                        onClick={() => clickHandler(item)}
                        key={item} >
                        {item}

                    </li>
                })
            }

        </ul>
    )
}
