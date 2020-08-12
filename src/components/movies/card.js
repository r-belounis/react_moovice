import React, {useState, useEffect} from 'react';

const Cards = props => {
    const [items, setItems] = useState(props);
    // console.log('Cards#Component#props', useState(props));

    // On retourne nos props dans un useEffect
    useEffect(() => {
        setItems(props);
    }, [props]);

    // console.log(items.poster_path, items.title)

    return (
        <>
            <div className="col-3">
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/original${items.poster_path}`} className="card-img-top" alt={items.title} />
                    <div className="card-body">
                        <h5 className="card-title">{items.title}</h5>
                        <p className="card-text">{items.overview}</p>
                        <p className="card-text">{items.date}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;