import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formataValor } from '../../components/Main';

export const Home = () => {

    

    const [produtos,getProdutos] = useState([]);

    useEffect ( () => {
        axios.get('http://react.professorburnes.com.br/').then((response) => {
            //console.log(response.data);
            getProdutos(response.data)
        })
    },[]);

    return(
        <>
            <h1 className="text-center">Produtos em Destaque:</h1>

            <div className="row d-flex">
                {produtos.map((item,index) =>
                (
                    <div className="col-12 col-md-4 text-center mb-5 card-group">
                        <div className="card">
                            <div className="cards">
                            <img src={item.imagemp} className="w-100"></img>
                            <h5>{item.produto}</h5>
                            {item.promo != 0 ?
                                <div>
                                    De: <span className="cortado">
                                        {formataValor(item.valor)}
                                    </span>
                                    <p className="valor">
                                        Por: {formataValor(item.promo)}
                                    </p>
                                </div>
                                :
                                <p className="valor">
                                    {formataValor(item.valor)}
                                </p>
                            }
                            </div>
                            <Link className="embaixo btn btn-success" to={'/produto/'+item.id}>Detalhes</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}