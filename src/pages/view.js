import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View ()
{
    const params = useParams();
    const store = useAppContext();

    const [item, setItem] = useState(null);

    const itemStyles = {
        container:{
            display: "flex",
            gap: "20px",
            width: "800px",
            margin: "0 auto",
            
        }
    }

    useEffect(()=>{
        const book =store.getItem(params.bookId);
        setItem(book);
    }, []);

    if (!item) {
        return <Layout>Item not found</Layout>;
    }

    return (
        <Layout>
            <div style={itemStyles.container}>
                <div>
                    <div>{item?.cover ? <img src={item?.cover} width="400" /> : ""} </div>
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? "Leído" : "Espera"}</div>
                    <div>{item?.review}</div>
                </div>
            </div>

        </Layout>
    );
}