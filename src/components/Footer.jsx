import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='dark'>
      <div className='container p-4'>
        <div className='row d-flex align-items-center'>
          <div className='col-lg-6 col-md-12 mb-4 text-left'>
            <img
              className='mapa'
              src='/img/ubicacion.png'
              alt='ubicacion'
              width='100%'
            />
          </div>
          <div className='col-lg-3 col-md-6 mb-4'>
            <ul className='list-group'>
              <il>
                <i className='bi bi-geo-alt'></i> Humboldt 2192
              </il>
              <il>
                <i className='bi bi-globe'></i> Buenos Aires, Argentina.
              </il>
              <il>
                <i className='bi bi-phone'></i> +54 11 4444-1234
              </il>
              <il>
                <i className='bi bi-whatsapp'></i> +54 9 11 4444-4321
              </il>
              <il>
                <i className='bi bi-envelope'></i> info@marvel-store.com.ar
              </il>
              <il>
                <i className='bi bi-clock'></i> Lunes a Sábados 9 a 00 hs
              </il>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 mb-4 text-center'>
            <p>Hace tu pedido por</p>
            <p>
              <Link to='/'>
                <img
                  src='/img/pedidos-ya-logo.png'
                  alt='pedidos-ya-logo'
                  width='100px'
                />
              </Link>
            </p>
            <p>Seguinos en la redes</p>
            <p className='fs-2 mb-3'>
              <i className='bi bi-facebook'></i> <i className='bi bi-instagram'></i> <i className='bi bi-tiktok'></i>
            </p>
          </div>
        </div>
      </div>
      <p className='footer-copyright text-center py-3'>
        © 2022 Copyright <Link to='/'>Marvel Store</Link>
      </p>
    </footer>
  );
};

export default Footer;
