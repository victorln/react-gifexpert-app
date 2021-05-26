

export const getGifs = async( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=aIy5lDZ3l5zCWJPJhZBKmdvb0tuRVnj4`;
    const response = await fetch(url);                
    const {data} = await response.json();     
                  
    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    //setImages( gifs );
    return gifs;
}    
