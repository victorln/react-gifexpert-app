

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);

    // //Sirve para evitar que se vuelta a ejecutar el llamado a la funcion que trae los datos de la api.
    // useEffect(() => {
    //     getGifs( category )
    //         .then((img) => setImages(img));
    // }, [category]);
    
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h2><b className="animate__animated animate__fadeIn">{category}</b></h2>
            {loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="cardGrid">              
                    {
                        images.map((image) => {
                            // return <li key={ image.id }>{ image.title }</li>
                            return <GifGridItem
                                key={image.id}
                                {...image} />
                        })
                    }                
            </div>
        </>
    )
}
