import React, { useState, useEffect } from 'react';
import Card from './movies/card';

const PopularBattle = () => {
    const [currentPage] = useState(1);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "5350325dd96de45edc142392b6373a75";

    // ComponentDidMount equivalent
    useEffect(() => {
        async function fetchMovies() {
            setIsLoading(true); // On set un loader avant le fetch sur true pour l'afficher
            const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr-FR&api_key=${API_KEY}`;
            const res = await fetch(url);
            res.json()
               .then(res => setData(res)) // On retourne le résultat dans useState
            setIsLoading(false); // on switch notre loader indicator après avoir fetch pour le désactiver
        }
        // On retourne notre fetch
        fetchMovies();
    }, []);

    // Logs prints for debug
    console.log("return fetch of tmdb discovery api to 'data'", data);
    console.log("first key of data", data[Object.keys(data)[0]]);
    const nextPage = () => currentPage(data.id + 1);
    console.log('PopularBattle#components#nextPage', nextPage);

    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <h1>Popular Battle</h1>
            </div>
            {/* On place notre loader juste avant notre map du fetch 'data' */}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <>
            {/* {data && data.results.slice(0, 2).map(item => ( */}
                <Card key={data[Object.keys(data)[3]]} onClick={nextPage} {...data} />
            {/* ))} */}
                </>
            )}
        </div>
    );
}

export default PopularBattle;