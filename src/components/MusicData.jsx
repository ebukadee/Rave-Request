import { useQuery } from 'react-query';
import axios from 'axios'
// import {SPOTIFY_API_KEY, API_HOST} from '../../.env'




 const  MusicData = () => {
  const { data, isLoading, error } = useQuery('tracks', async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'billie',
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },

        headers: {
          'X-RapidAPI-Key': process.env.SPOTIFY_API_KEY,
          'X-RapidAPI-Host': process.env.API_HOST
        }

  }
  axios.request(options)
  .then( (response) => {
    const result = response.data.albums.items
  result.forEach((item)=>{
    console.log(item.data.name,item.data.artists.items[0].profile.name)
  })
  })
  .catch( (error) => {
    console.error(error);
  });

 
})
}

export default MusicData
  


