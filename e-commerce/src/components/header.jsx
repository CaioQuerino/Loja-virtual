import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Brand href="index.html">Visual Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="produtos.html">Produtos</Nav.Link>
            <Nav.Link href="#">Destaques</Nav.Link>
            <Nav.Link href="#">Vendedores</Nav.Link>
          </Nav>
          <div className="other-links">
            <a href="#" className="item-link">Entrar</a>
            <a href="#" className="item-link">Cadastre-se</a>
            <div className="d-flex align-items-center">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2387 4.58496C21.0192 4.30745 20.6902 4.14579 20.3426 4.14579H5.24889L4.73494 2.32194L4.73455 2.32082C4.49841 1.50459 3.85062 0.886607 3.04487 0.708201L1.20024 0.299478C0.887357 0.23046 0.579693 0.435944 0.512902 0.758853C0.446154 1.08136 0.644963 1.39969 0.957494 1.46871L2.80213 1.87738C3.1954 1.96428 3.51085 2.26586 3.62596 2.66349L6.99762 14.6328C6.92162 14.6693 6.84857 14.7094 6.77774 14.7529C6.41397 14.9767 6.12256 15.2908 5.92701 15.6576C5.74032 16.0064 5.64073 16.4014 5.63147 16.8089H5.62964V16.871H5.63112C5.63886 17.1889 5.70413 17.4947 5.81854 17.7734C6.0008 18.2187 6.30403 18.5957 6.68626 18.8629C7.0685 19.1298 7.5326 19.2865 8.0273 19.2861H18.8725C19.1923 19.2861 19.4513 19.0185 19.4513 18.6884C19.4513 18.3582 19.1923 18.0902 18.8725 18.0902H8.0273C7.85426 18.0902 7.69269 18.0547 7.54477 17.9899C7.32306 17.8931 7.13229 17.7299 6.99836 17.5248C6.86999 17.3281 6.79473 17.0955 6.78808 16.8408C6.79473 16.537 6.88842 16.2736 7.05294 16.0628C7.13855 15.9538 7.24336 15.8584 7.37095 15.7795C7.49714 15.7017 7.64545 15.6404 7.81958 15.6015L18.7208 13.7677C19.4336 13.6477 19.9995 13.0853 20.1434 12.3545L21.4767 5.58072V5.57991C21.4922 5.50142 21.5003 5.42135 21.5 5.34205C21.5003 5.06876 21.4092 4.80073 21.2387 4.58496Z" fill="#8B8B8C"/>
                <path d="M10.6327 22.3756C10.3426 22.1788 9.98847 22.0636 9.61232 22.0636C9.36187 22.0636 9.12031 22.1147 8.90144 22.2074C8.57342 22.3461 8.296 22.5772 8.09948 22.8681C7.90257 23.1582 7.78705 23.5123 7.78745 23.8885C7.78745 24.1389 7.8385 24.3805 7.93082 24.5994C8.06993 24.9274 8.30062 25.2052 8.59155 25.4017C8.88203 25.5982 9.23617 25.7141 9.61232 25.7138C9.86278 25.7141 10.104 25.6627 10.3228 25.5699C10.6512 25.4308 10.9287 25.2006 11.1251 24.9097C11.3216 24.6187 11.4372 24.2646 11.4372 23.8885C11.4372 23.638 11.3857 23.3968 11.2938 23.1784C11.1547 22.85 10.9241 22.5725 10.6327 22.3756ZM10.2903 24.1752C10.2347 24.3063 10.1411 24.4197 10.023 24.499C9.90494 24.5786 9.76668 24.6242 9.61237 24.6246C9.50947 24.6246 9.41422 24.604 9.32651 24.5669C9.19495 24.5117 9.08108 24.4172 9.00181 24.2996C8.9226 24.1815 8.87706 24.0428 8.87661 23.8885C8.87706 23.7856 8.89727 23.6903 8.93437 23.6026C8.9896 23.4711 9.08366 23.3576 9.20166 23.2784C9.31976 23.1987 9.45802 23.1532 9.61237 23.1527C9.71528 23.1532 9.81053 23.1734 9.89824 23.2105C10.0298 23.2661 10.1432 23.3597 10.2229 23.4778C10.3022 23.5959 10.3477 23.7341 10.3477 23.8885C10.3477 23.9918 10.3275 24.0871 10.2903 24.1752Z" fill="#8B8B8C"/>
                <path d="M20.6416 22.3756C20.3511 22.1788 19.9973 22.0636 19.6212 22.0636C19.3708 22.0636 19.1287 22.1147 18.9104 22.2074C18.5823 22.3461 18.3049 22.5772 18.108 22.8681C17.9115 23.1582 17.7966 23.5123 17.7965 23.8885C17.7965 24.1389 17.8474 24.3805 17.9398 24.5994C18.0789 24.9274 18.3096 25.2052 18.6005 25.4017C18.8916 25.5982 19.2455 25.7141 19.6212 25.7138C19.8718 25.7141 20.113 25.6627 20.3318 25.5699C20.6606 25.4308 20.9388 25.2006 21.1344 24.9097C21.3303 24.6187 21.4453 24.2646 21.4453 23.8885C21.4453 23.638 21.3938 23.3968 21.302 23.1784C21.1627 22.85 20.9317 22.5725 20.6416 22.3756ZM20.2997 24.1752C20.2447 24.3063 20.1512 24.4197 20.0326 24.499C19.9144 24.5786 19.7754 24.6242 19.6214 24.6246C19.5177 24.6246 19.422 24.604 19.3333 24.5669C19.2016 24.5117 19.0886 24.4172 19.0082 24.2996C18.9284 24.1815 18.8836 24.0428 18.8833 23.8885C18.8836 23.7856 18.9038 23.6903 18.9404 23.6026C18.9956 23.4711 19.0891 23.3576 19.2068 23.2784C19.3248 23.1987 19.4635 23.1532 19.6214 23.1527C19.7245 23.1532 19.8194 23.1734 19.9079 23.2105C20.0387 23.2661 20.1524 23.3597 20.2327 23.4778C20.3115 23.5959 20.3572 23.7341 20.3572 23.8885C20.3572 23.9918 20.3366 24.0871 20.2997 24.1752Z" fill="#8B8B8C"/>
              </svg>
              <a href="#" className="item-link">Carrinho</a>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
