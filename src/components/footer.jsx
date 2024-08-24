import React from 'react';
import "../index.css";
import Button_comprar from './button_comprar';

const Footer = () => {
  return (
    <footer>
        <Button_comprar></Button_comprar>
      <h5>Visual Tech</h5>
      <p>
        Loja Espacializada em produtos e-commerce <br />
        Agradecemos sua visita!
      </p>

      <div className="info-footer">
        <div>
          <h5>Contato</h5>
          <p>
            <picture>
              <img src="src/assets/icons/icon-whatsapp.svg" alt="Ícone do whatsapp" />
            </picture>
            +55 (21) 99999-9999
          </p>
          <p>
            <picture>
              <img src="src/assets/icons/icon-de-mail.svg" alt="Ícone de mail" />
            </picture>
            visual_tech.com.br
          </p>
          <p>
            <picture>
              <img src="src/assets/icons/icon-ponto-no-mapa.svg" alt="Ícone de ponto no mapa" />
            </picture>
            Rua Fulano de tal, Nº 0101 - Loja A
          </p>
        </div>
        <div>
          <h5>Informações</h5>
          <p>Visual Tech Ltda.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
          <p>
            <picture>
              <img src="src/assets/icons/icon-doc.svg" alt="Ícone do documento" />
            </picture>
            Política de privacidade
          </p>
          <p>
            <picture>
              <img src="src/assets/icons/icon-doc.svg" alt="Ícone do documento" />
            </picture>
            Termos de uso
          </p>
        </div>
        <div>
          <h5>Links úteis</h5>
          <a href="produtos.html">Produtos</a>
          <a href="#">Destaques</a>
          <a href="#">Vendedores</a>
          <a href="produtos.html">Comprar</a>
        </div>
        <div>
          <h5>Redes sociais</h5>
          <ul className="redes-sociais">
            <li><a href="#"><img src="src/assets/icons/icon-facebook.svg" alt="Facebook" /></a></li>
            <li><a href="#"><img src="src/assets/icons/icon-instagran.svg" alt="Instagram" /></a></li>
            <li><a href="#"><img src="src/assets/icons/icon-twitter.svg" alt="Twitter" /></a></li>
            <li><a href="#"><img src="src/assets/icons/icon-youtube.svg" alt="YouTube" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
