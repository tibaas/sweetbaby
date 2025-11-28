import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body {
    font-family: var(--font-fredoka), cursive; 
    background: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.colors.sky}, ${theme.colors.secondary})`};
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative; 
    min-height: 100vh; 
    overflow-x: hidden;
  }

  /* Animação das Nuvens */
  @keyframes animateCloud {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100vw);
    }
  }

  #clouds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    pointer-events: none; /* Garante que as nuvens não interfiram com cliques */
    z-index: -1; 
  }

  .cloud {
    position: absolute;
    background: #fff;
    border-radius: 100px;
    opacity: 0.7; 

   
    &::before, &::after {
      content: '';
      position: absolute;
      background: #fff;
      border-radius: 100px;
    }
  }

  /* Variações de nuvens */
  .c1 {
    width: 180px; height: 55px; 
    top: 8%;
    animation: animateCloud 30s linear infinite;
    animation-delay: -10s;
    &::before { width: 90px; height: 90px; top: -45px; left: 35px; }
    &::after { width: 110px; height: 70px; top: -25px; right: 25px; }
  }

  .c2 {
    width: 250px; height: 75px; 
    top: 18%;
    animation: animateCloud 40s linear infinite;
    animation-delay: -2s;
    &::before { width: 125px; height: 125px; top: -60px; left: 50px; }
    &::after { width: 150px; height: 100px; top: -40px; right: 30px; }
  }

  .c3 {
    width: 150px; height: 45px; 
    top: 30%;
    animation: animateCloud 32s linear infinite;
    animation-delay: -15s;
    &::before { width: 75px; height: 75px; top: -35px; left: 30px; }
    &::after { width: 90px; height: 60px; top: -20px; right: 20px; }
  }

  .c4 {
    width: 120px; height: 35px; 
    top: 45%;
    animation: animateCloud 50s linear infinite;
    animation-delay: -25s;
    &::before { width: 60px; height: 60px; top: -30px; left: 25px; }
  }

  .c5 {
    width: 280px; height: 80px; 
    top: 60%;
    animation: animateCloud 38s linear infinite;
    animation-delay: -8s;
    &::before { width: 140px; height: 140px; top: -70px; left: 55px; }
    &::after { width: 160px; height: 100px; top: -40px; right: 40px; }
  }

  .c6 {
    width: 160px; height: 50px; 
    top: 75%;
    animation: animateCloud 28s linear infinite;
    animation-delay: -18s;
    &::before { width: 80px; height: 80px; top: -40px; left: 30px; }
  }

  .c7 {
    width: 210px; height: 60px; 
    top: 85%;
    animation: animateCloud 45s linear infinite;
    animation-delay: -22s;
    &::before { width: 100px; height: 100px; top: -50px; left: 40px; }
    &::after { width: 120px; height: 80px; top: -30px; right: 30px; }
  }

  .c8 {
    width: 130px; height: 40px; 
    top: 25%;
    animation: animateCloud 55s linear infinite;
    animation-delay: -30s;
    &::after { width: 70px; height: 50px; top: -20px; right: 20px; }
  }

  .c9 {
    width: 200px; height: 60px; 
    top: 5%;
    animation: animateCloud 33s linear infinite;
    animation-delay: -12s;
    &::before { width: 100px; height: 100px; top: -50px; left: 40px; }
  }

  .c10 {
    width: 240px; height: 70px; 
    top: 50%;
    animation: animateCloud 42s linear infinite;
    animation-delay: -20s;
    &::after { width: 140px; height: 90px; top: -35px; right: 35px; }
  }

  .c11 {
    width: 170px; height: 50px; 
    top: 90%;
    animation: animateCloud 29s linear infinite;
    animation-delay: -28s;
    &::before { width: 85px; height: 85px; top: -40px; left: 35px; }
  }

  .c12 {
    width: 190px; height: 55px; 
    top: 65%;
    animation: animateCloud 36s linear infinite;
    animation-delay: -1s;
    &::before { width: 95px; height: 95px; top: -45px; left: 40px; }
    &::after { width: 110px; height: 70px; top: -25px; right: 25px; }
  }

  /* Novas variações para cobrir toda a tela */
  .c13 { 
    width: 220px; height: 65px;
    top: 95%;
    animation: animateCloud 31s linear infinite;
    animation-delay: -5s;
    &::before { width: 110px; height: 110px; top: -55px; left: 45px; }
    &::after { width: 130px; height: 90px; top: -35px; right: 30px; }
  }

  .c14 {
    width: 160px; height: 48px;
    top: 70%;
    animation: animateCloud 43s linear infinite;
    animation-delay: -23s;
    &::before { width: 80px; height: 80px; top: -40px; left: 30px; }
  }

  .c15 {
    width: 200px; height: 60px;
    top: 40%;
    animation: animateCloud 37s linear infinite;
    animation-delay: -10s;
    &::before { width: 100px; height: 100px; top: -50px; left: 40px; }
    &::after { width: 120px; height: 80px; top: -30px; right: 30px; }
  }

  .c16 {
    width: 140px; height: 42px;
    top: 15%;
    animation: animateCloud 48s linear infinite;
    animation-delay: -28s;
    &::before { width: 70px; height: 70px; top: -35px; left: 25px; }
  }

  .c17 {
    width: 260px; height: 78px;
    top: 55%;
    animation: animateCloud 34s linear infinite;
    animation-delay: -17s;
    &::before { width: 130px; height: 130px; top: -65px; left: 50px; }
    &::after { width: 150px; height: 100px; top: -40px; right: 35px; }
  }

`;
