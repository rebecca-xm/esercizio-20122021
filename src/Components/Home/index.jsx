import style from './Home.module.scss';
import { useFetch } from 'use-http';

function Home() {
    const { data = [] } = useFetch('https://fakestoreapi.com/products', [])
    return (
        <div>
            {data.map(data =>
            (<div key={data.id}>
                <div className={style.list}>
                    <h3>{data.title}</h3>
                    <h4>{data.price}$</h4>
                    <p>{data.description}</p>
                    <img src={data.image} />
                    <p>{data.rating.rate}⭐</p>
                    <small>{data.rating.count}</small>
                </div>
            </div>))}
        </div>
    )
}

export default Home;