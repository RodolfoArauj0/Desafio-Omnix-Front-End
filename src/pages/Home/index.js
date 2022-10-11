import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Header from '../../components/Header';
import './style.css';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/offers')
    }, 1000);
  }, [])

  return (
    <div className="container-home">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
