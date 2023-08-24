import { React, useEffect, useState } from 'react';
import Header from "../components/common/Header";
import Footer from '../components/common/Footer';
import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from '../constants/constant';
import {Box,styled} from '@mui/material';
import Banner from '../components/Banner';
import Upnext from '../components/Upnext';
import Slides from '../components/Slides';
const Wrapper=styled(Box)
`
display:flex;
padding:20px;
`
const Component= styled(Box)`
padding:0 115px;
`
export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    }
    getData();
  }, [])
  return (
    <>
      <Header />
      <Component>
      <Wrapper>
        <Banner movies={movies} />
        <Upnext movies={movies}/>
      </Wrapper>
        <Slides movies={movies}/>
        <Slides movies={movies}/>
      </Component>
      <Footer/>
    </>
  )
}
