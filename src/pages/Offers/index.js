import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/iindex';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import offers from '../../offers.json';
import './style.css';

function Offers() {
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        setOffer(offers.ofertas)
    }, []);

    return (
        <div>
            <Header />
            <div className='ofertas'>
                {offer.map((oferta) => (
                    <Card key={oferta.id} plano={oferta.plano} />
                ))}

                <Link to="/">
                    <button>Ops, errei meu cep!</button>
                </Link>

            </div>
            <Footer />

        </div>
    )
}

export default Offers