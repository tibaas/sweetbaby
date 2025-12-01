import styled from 'styled-components';

export const AdminWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background}; 
  font-family: 'Poppins', sans-serif; 
`;

export const Sidebar = styled.aside< { $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.sky};
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    transform: translateX(0);
  `}

  @media (min-width: 992px) {
    position: sticky;
    transform: translateX(0);
  }
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary}; 
  text-align: center;
  margin-bottom: 3rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  border-left: 4px solid transparent;
  transition: all 0.3s ease;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.sky};
    border-left-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }

  /* A margem foi removida pois o AdminWrapper com flexbox já gerencia o layout */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.sky};
  border-radius: 6px;
  padding: 0.5rem;
  margin-right: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 1rem;
    object-fit: cover;
  }

  span {
    display: none;
    @media (min-width: 576px) {
      display: inline;
    }
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  /* Removida a sombra 'inset' que causava a linha pontilhada */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.sky};

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Section = styled.section`  
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  /* Removida a sombra 'inset' que causava a linha pontilhada */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.sky};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.85;
  }

  /* Em telas menores, esconde o texto e mostra apenas o ícone */
  @media (max-width: 576px) {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    padding: 0;
    
    span {
      display: none;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    padding: 0.75rem 1rem; /* Padding vertical ligeiramente reduzido */
    text-align: left;    
    vertical-align: middle; /* Adicionado para centralizar verticalmente o conteúdo */
    border-bottom: 1px solid ${({ theme }) => theme.colors.sky};
  }

  th {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  }

  td {
    color: ${({ theme }) => theme.colors.text};
  }

  .actions {
    /* O vertical-align: middle; na td já cuida do alinhamento. */
    /* O display: flex foi movido para um wrapper dos botões se necessário, ou nos próprios botões. */
    white-space: nowrap; /* Impede que os botões quebrem a linha */
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  padding: 0.4rem; /* Padding ajustado para um visual mais quadrado */
  cursor: pointer;
  display: inline-flex; /* Alterado para inline-flex */
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin-right: 0.5rem; /* Adiciona espaçamento entre os botões */

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

export const PageCounter = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 1rem;
`;

export const PaginationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.sky};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.sky};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  @media (min-width: 992px) {
    display: none;
  }
`;