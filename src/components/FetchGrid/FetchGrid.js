'use client'
import { useEffect } from "react";
import axios from "axios";
import styles from './FetchGride.module.css'

const FetchGrid = ()  => {
    useEffect(() =>{
        const HandleFetchData = async () => {
            try{
                const response = await axios.get('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Strokes&api_key=d659cc02b91f8569a8d3a3e95091db43&format=json')
                const data = response.data.topalbums.album;
                console.log(data)
            }
            catch(error){
                console.log(error)
            }
           
        }
        HandleFetchData();
    },[])
    return(
        <div className={styles.containerfetch}>
            <p>Fetch Data</p>
        </div>
    );
};

export default FetchGrid