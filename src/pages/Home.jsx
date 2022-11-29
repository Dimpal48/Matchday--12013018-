import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import FixtureCard from '../components/FixtureCard';
import './style.css'
import searchIcon from '../assets/searchIcon.png'

export default function FirstScreen() {
    const fetchedFixtures = useRef([]);
    const [fixtures, setFixtures] = useState([]);
    const [filterQuery, setFilterSearchValue] = useState('')


    const filterMatches = () => {
        if (!filterQuery)
            setFixtures(fetchedFixtures.current);
        else
            setFixtures(fetchedFixtures.current.filter((f) => f.tournament[0]?.name?.toLowerCase().includes(filterQuery) || f.team1[0]?.name?.toLowerCase().includes(filterQuery) || f.team2[0]?.name?.toLowerCase().includes(filterQuery)))
    }

    const fetchData = async (pageNo) => {
        document.getElementById("loader-container").style.display = "block";
        const resp = await fetch('https://matchday.ai/referee/champ/fixture/dummy-matches?page=' + pageNo);
        const data = await resp.json();
        fetchedFixtures.current = [...fetchedFixtures.current, ...data?.fixtures]
        filterMatches();
        document.getElementById("loader-container").style.display="none";
    }

    useEffect(() => {
        const startFetch = async () => {
            let pageNo = 0;
            let loading = false;
            await fetchData(pageNo);
            let l = window.addEventListener('scroll', async () => {
                let dE = document.querySelector('.fixtures');
                if (pageNo > 9)
                    return;
                if (window.scrollY + window.innerHeight >= dE.scrollHeight) {
                    console.log(loading, pageNo);
                    if (!loading) {
                        loading = true
                        pageNo++;
                        await fetchData(pageNo);
                        loading = false;
                    }
                }
            })
        }
        startFetch()
        return () => {
        }
    }, []);

    useEffect(() => {
        filterMatches();
    }, [filterQuery])


    return (
        <>
            <section className='container'>
                <div>
                    <h2 style={{color:"#23294b"}}>International Matches</h2>
                </div>
                <div className='field-cover'>
                    <div className='input-field'>
                        <img src={searchIcon} />
                        <input onChange={(e) => setFilterSearchValue(e.target.value.toLowerCase())} type="text" placeholder='Search for Matches' />
                    </div>
                </div>
            </section>
            <section className='fixtures'>
                {fixtures?.map((fixture, i) =>
                    <Link to={'fixture/' + fixture?.tournament[0]?.name} key={i} className={"fixture-card-link"}> <FixtureCard fixture={fixture} /></Link>
                )}
            </section>
            <div id="loader-container" style={{display:"none"}}>
                <div id="loader-one" class="loader"></div>
                <div id="loader-two" class="loader"></div>
                <div id="loader-three" class="loader"></div>
            </div>
        </>
    )
}
