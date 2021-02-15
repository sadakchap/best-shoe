import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../backend';

const useFetchProducts = (pageNumber) => {

    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState('');

    useEffect(() => {
        setIsFetching(true);
        axios({
            method: 'GET',
            url: `${API}/products`,
            params: { page: pageNumber }
        }).then(res => {
            setProducts(prevProducts => [...prevProducts, ...res.data])
            setIsFetching(false);
            setHasMore(res.data.length > 0);
        }).catch(err => {
            setIsFetching(false);
            err?.response?.data?.error ? setError(err?.response?.data?.error) : setError('Sorry, something went wrong while etching data!');
        })
    }, [pageNumber]);

    return { products, hasMore, isFetching, error }
}

export default useFetchProducts