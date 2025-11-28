'use client'

import { CardContainer, CardImage, CarrosselContainer, CarrosselContent, HeaderContainer, HighlightedCardsContainer, HighlightedContainer, IconsContainer, ProductsContainer, StaticCloudButtonGlobal, CardContent, ProductName, ProductPrice, ViewDetailsButton, ProductDescription, CartIconContainer, FooterContainer, FooterTitleContainer, FooterContentContainer, FooterRightsReservedContainer, ContactFooterContainer, LogoText } from "./styles"
import { GlobalStyle } from "@/src/styles/global"
import { ShoppingCart } from "lucide-react";
import Image from "next/image"
import logo from "../../assets/nobgsblogo.png"


export default function Home() {
  // Dados de exemplo para os produtos
  const products = [
    { 
      id: 1, 
      name: 'Macacão Marrom para Meninas',
      description: "Macacãozinho lindo bem decorado com moranguinhos, produto feito em algodão 100%. " , 
      price: 'R$ 89,90', 
      image: 'https://res.cloudinary.com/ddqljjsbt/image/upload/v1761576190/testmodel_aw1fcz.png', 
      link: '/produto/macacao-marrom' 
    },
    { 
      id: 2, 
      name: 'Vestido Floral para Bebês',
      description: "Vestido florado feito em seda bem agradável para aquele dia de sol. " , 
      price: 'R$ 129,90', 
      image: 'https://res.cloudinary.com/ddqljjsbt/image/upload/v1761580477/modeltwo_pavz4k.png', 
      link: '/produto/vestido-floral' 
    },
    { 
      id: 3, 
      name: 'Conjunto Moletom Nuvem',
      description: " Conjunto baby nuvem feito 100% em algodão para esquentar quem você mais ama. " , 
      price: 'R$ 159,90', 
      image: 'https://res.cloudinary.com/ddqljjsbt/image/upload/v1761580477/modeltree_czn6qz.png', 
      link: '/produto/conjunto-moletom' 
    },
  ];
  
  return(
    <>
      <GlobalStyle />
      <div>
        <HeaderContainer>
          {/* <Image src={logo}  alt="logo"/> */}
          <a href="">Home</a>
          <a href="/pages/products">Produtos</a>
          <a href="">Contato</a>
          <a href="">Quem somos</a>
        </HeaderContainer>
      </div>
        <CarrosselContainer>       
          <CarrosselContent>
            <Image 
              src={"https://res.cloudinary.com/ddqljjsbt/image/upload/v1761400863/hands-resized_lfckdy.jpg"} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw" // Opcional, mas recomendado para otimização
              alt="Mãos segurando um pote de creme"
            />
          </CarrosselContent>
        </CarrosselContainer>

      <ProductsContainer>
        <h2>Categorias</h2>
        <IconsContainer>
          <StaticCloudButtonGlobal href="/pages/products/calcados">
            Calçados
          </StaticCloudButtonGlobal>
          <StaticCloudButtonGlobal href="/pages/products/blusas">Blusas</StaticCloudButtonGlobal>
          <StaticCloudButtonGlobal href="/pages/products/blusas">Moletoms</StaticCloudButtonGlobal>
          <StaticCloudButtonGlobal href="/pages/products/calcas">Calças</StaticCloudButtonGlobal>
          <StaticCloudButtonGlobal href="/pages/products/acessorios">Acessórios</StaticCloudButtonGlobal>
          <StaticCloudButtonGlobal href="/pages/products/blusas">Banho</StaticCloudButtonGlobal>
        </IconsContainer>
      </ProductsContainer>
        <HighlightedCardsContainer>
              <h2>Produtos em destaque</h2>
              <HighlightedContainer>
                {products.map(product => (
                  <CardContainer key={product.id}>
                    <CartIconContainer>
                      <ShoppingCart size={20} />
                    </CartIconContainer>
                    <CardImage>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={320} // Largura do CardContainer (20rem = 320px)
                        height={250} // Altura da CardImage
                        style={{ objectFit: 'contain'}}
                        
                      />
                    </CardImage>
                    <CardContent>
                      <ProductName title={product.name}>{product.name}</ProductName>
                      <ProductDescription>
                        {product.description}
                      </ProductDescription>
                      <ProductPrice>{product.price}</ProductPrice>
                      <ViewDetailsButton href={product.link}>
                        Ver detalhes
                      </ViewDetailsButton>
                    </CardContent>
                  </CardContainer>
                ))}
              </HighlightedContainer>
        </HighlightedCardsContainer>

      <div>
        <h2>Blog Clientes</h2>
      </div>
      <div>
        <FooterContainer>
          <FooterTitleContainer>
            <LogoText>
                <span className="green">S</span>
                <span className="pink">w</span>
                <span className="orange">e</span>
                <span className="yellow">e</span>
                <span className="blue">t</span>
                &nbsp;
                <span className="blue2">B</span>
                <span className="pink">a</span>
                <span className="mint">b</span>
                <span className="cyan">y</span>
            </LogoText>
          </FooterTitleContainer>

          <FooterContentContainer>
            
            <ContactFooterContainer>
              
              <h3>Como nos encontrar?</h3>
              <p>Avenina Antônio Pedro da Silva Nº 780 </p>
              <p>Centro - Ouricuri PE</p>
              <p>WhatsApp: 87 9999-9999 </p>

            </ContactFooterContainer>


            <div>
              <h3>Funcionamento</h3>
              <p>Aberto segunda a sexta das 08:00 as 18:00</p>
              <p> Sábado das 08:00 as 13:00</p>

            </div>
            <div>
              <h3>Links </h3>
              <p>Instagram</p>
              <p>Facebook</p>
              

            </div>

          </FooterContentContainer>
                <hr  />
          <FooterRightsReservedContainer>
                 © 2025 Sweet Baby - Todos os direitos reservados
          </FooterRightsReservedContainer>
        </FooterContainer>
      </div>
    </>
  )
}