import {useState, useEffect} from 'react';
import {POPULAR_BASE_URL} from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  //console.log(state + " COME ON MAN")

  //asynch
  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');
    //run this code first
     try{
       const result = await (await fetch(endpoint)).json();
       // console.log(result )
       setState(prev => ({
         ...prev,
         movies:
         isLoadMore !== -1
         ? [...prev.movies, ...result.results]
         : [...result.results ],
         heroImage: prev.heroImage || result.results[0],
         currentPage: result.page,
         totalPages: result.total_pages

       }));

     }
     //if try doesnt work run the catch
     catch(error){
       setError(true)
       console.log(error)
     }
     //not longer loading
     setLoading(false)
   }

     useEffect( () => {
       fetchMovies(POPULAR_BASE_URL);
     }, [])

     return [{state, loading, error}, fetchMovies]

}
