import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../images/h1.svg'
import './Header.scss'


const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch();
    const history = useHistory(); 
    const submitHandler = (e)=>{
        e.preventDefault();
        if(term === ""){
         alert("please enter search term...")
            window.location.reload();
        }
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }
return (
<>
    <div className="header">

        <div className="logo">
            <Link to="/">Mosad </Link>
        </div>
        <div className="search-bar">
            <form onSubmit={submitHandler}>
                <input type="text" name="" value={term} placeholder="Search Movies or Shows" onChange={(e)=>setTerm(e.target.value)} />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
        <div className="user-image">
            <img src={user} alt="user" />
        </div>
    </div>
</>
);
};

export default Header;