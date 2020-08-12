import React, {useState, useEffect} from 'react';
import Card from './movies/card';

const Popular = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = "5350325dd96de45edc142392b6373a75";

    // ComponentDidMount equivalent
    useEffect(() => {
        async function fetchMovies() {
            setIsLoading(true); // On set un loader avant le fetch sur true pour l'afficher
            const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr-FR&api_key=${API_KEY}`;
            const res = await fetch(url);
            res.json()
               .then(res => setData(res)) // On retourne le résultat dans setStates
            setIsLoading(false); // on switch notre loader indicator après avoir fetch pour le désactiver
        }
        fetchMovies(); // On retourne notre fetch
    }, []);

    // Logs prints for debug
    console.log('popular#component#map#item', data && data.results.map(item => (
        <Card key={item.id} {...item}/>
    )));

    return (
        <div className="row">
            <div className="col-12">
                <h1>Popular</h1>
            </div>
            {/* On place notre loader juste avant notre map du fetch 'data' */}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <>
                    {data && data.results.map(item => (
                        <Card key={item.id} {...item}/>
                    ))}
                </>
            )}
        </div>
    );
}

export default Popular;