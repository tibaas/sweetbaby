'use client'

import styled from "styled-components";

export const HeaderContainer = styled.header`

:hover {
  font-weight: bold; 
  color: ${({ theme }) => theme.colors.white}; 
}

font-size: 1.3rem; 
color: ${({ theme }) => theme.colors.white}; 

@media (max-width: 768px) {
    font-size: 1rem;
}

display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
width:100%;
height: 5rem;
position: -webkit-sticky;
position: sticky;
top: 0;
/* background: transparent; */

background: ${({ theme }) =>
      `linear-gradient(to top, ${theme.colors.sky}, ${theme.colors.secondary})`};


a {
  text-decoration: none;
  &:visited {
    color: ${({ theme }) => theme.colors.white}; 
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }

}
`
// export const CarrosselContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;

// margin-top: 2rem;


// `

export const CarrosselContainer = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.white};
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.white};
  }
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 100%;
  height: 500px;
  color: ${({ theme }) => theme.colors.white};

  /* Efeito de sobreposição para escurecer a imagem e dar legibilidade ao texto */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3); /* Sombra escura */
    z-index: 1; /* Fica entre a imagem e o texto */
  }

  img {
    object-fit: cover;
    z-index: 0; /* Imagem fica no fundo */
  }

  @media (max-width: 768px) {
    height: 400px; /* Altura ajustada para mobile */
  }
`

export const HeroTextContainer = styled.div`
  position: relative;
  z-index: 2; /* Garante que o texto fique sobre a camada escura */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeroButton = styled.a`
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ProductsContainer = styled.div`

text-align: center;
margin-top: 5rem;
h2 {
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 4px 4px 2px ${({ theme }) => theme.colors.secondary};
  font-size: 2.5rem;
}

@media (max-width: 768px) {
    margin-top: 3rem;
}

`

export const IconsContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

gap: 3rem;
margin-top: 3rem;

@media (max-width: 768px) {
    gap: 1.5rem; /* Reduz o espaçamento entre os botões em telas menores */
}

`

export const StaticCloudButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.white}; 
  border-radius: 50px;
  /* opacity: 0.9; */
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.4rem;
  font-weight: bold;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  min-width: 150px;
  text-align: center;

  @media (max-width: 480px) {
    width: 120px; /* Ajusta a largura do botão para mobile */
    height: 60px; /* Ajusta a altura do botão para mobile */
    font-size: 1.1rem;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    background-color: lightskyblue;
    color: white;
    text-shadow: 3px 3px 2px ${({ theme }) => theme.colors.secondary};
  }

`;

export const StaticCloudButtonGlobal = styled(StaticCloudButton)`
  width: 180px;
  height: 80px;
  aspect-ratio: 1.8;
  /* Máscara para o formato de nuvem */
  --g: radial-gradient(50% 50%, #000 98%, #0000) no-repeat;
  @media (max-width: 480px) {
    width: 100px; /* Ajusta a largura do botão de nuvem para mobile */
    height: 50px; /* Ajusta a altura do botão de nuvem para mobile */
  }
  mask: var(--g) 100% 100%/30% 60%,var(--g) 70% 0/50% 100%,var(--g) 0 100%/36% 68%,var(--g) 27% 18%/26% 40%,linear-gradient(#000 0 0) bottom/67% 58% no-repeat;
    
`;

export const HighlightedContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 3rem;



@media (max-width: 768px) {
  flex-wrap: wrap;
  gap: 1.5rem;
}


`

export const HighlightedCardsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 3rem;
margin-top: 5rem;
/* display: none; */

h2 {
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 4px 4px 2px ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
}

@media (max-width: 768px) {
    margin-top: 3rem;
}

`
export const CardContainer = styled.div`
  height: 28rem; 
  width: 20rem;
  /* padding: 1rem; */
  background-color: ${({ theme }) => theme.colors.white}; 
  border-radius: 20px; 
  box-shadow: ${({ theme }) => theme.shadows.md}; 
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    a {
      background: lightskyblue;
    }
  }

  @media (max-width: 480px) {
    width: 15rem; 
    height: 24rem;
  } 
`

export const CardImage = styled.div`
  width: 100%; 
  height: 240px; 
  @media (max-width: 480px) {
    height: 180px; 
  }
  img {
    margin-top: 10px;
    width: 100%; 
    height: 100%; 
    /* object-fit: cover;  */
  }
`

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Faz este contêiner crescer para preencher o espaço disponível */
`

export const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 

  @media (max-width: 480px) {
    font-size: 1rem; 
  }
`

export const ProductDescription = styled.p`

font-size: 0.875rem;
opacity: 65%;
text-align: justify;
margin-top: 8px;

`

export const ProductPrice = styled.p`
margin-top: 1rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 480px) {
    font-size: 0.9rem; /* Reduz o tamanho da fonte do preço para mobile */
  }
`

export const ViewDetailsButton = styled.a`
  margin-top: auto; /* Empurra o botão para a parte inferior do contêiner flex */
  /* Ajusta o margin-top para telas menores, se necessário */
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  
  transition: background-color 0.2s ease;

  @media (max-width: 480px) {
    margin-top: 1rem; /* Reduz o espaçamento do botão para mobile */
  }
`
export const CartIconContainer = styled.div`
position: absolute;
margin-left: 18rem;
margin-top: 0.575rem;
opacity: 50%;


`

export const FooterContainer = styled.footer`

background: ${({ theme }) =>
      `linear-gradient(to top, ${theme.colors.sky}, ${theme.colors.secondary})`};


display: flex;
flex-direction: column;
height: 100%;


hr {
  border: none;
  border-top: 1px solid lightskyblue;
}




`

export const FooterTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

/* h2 {

   font-size: 3rem;
  font-weight: bold;
  display: flex;
  gap: 2px;

  .green { color: #91D36B; }
  .pink { color: #F7A5C9; }
  .orange { color: #F9A56A; }
  .yellow { color: #F9D66F; }
  .blue { color: #81C6EC; }
  .blue2 { color: #79C2EC; }
  .mint { color: #8FD389; }
  .cyan { color: #7ECACA; }
} */


`

export const LogoText = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  gap: 2px;

  .green { color: #91D36B; }
  .pink { color: #F7A5C9; }
  .orange { color: #F9A56A; }
  .yellow { color: #F9D66F; }
  .blue { color: #81C6EC; }
  .blue2 { color: #79C2EC; }
  .mint { color: #8FD389; }
  .cyan { color: #7ECACA; }
`;

export const FooterContentContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;

gap: 15rem;


`

export const FooterRightsReservedContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;

`

export const ContactFooterContainer = styled.div`

/* display: flex;
flex-direction: column;
gap: 0.500rem; */


`