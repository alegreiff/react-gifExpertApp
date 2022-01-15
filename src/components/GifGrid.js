import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const { data:imagenes, loading:cargando } = useFetchGifts(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {cargando && <p className="animate__animated animate__flash">Cargando</p>}
            <div className="card-grid">

                {imagenes.map(img => (
                    //<li key={id}> { title } </li>
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
                }
            </div>
        </>
    )
}
