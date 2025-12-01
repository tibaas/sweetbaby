'use client';

import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import {
  ThemeToggleButton,
  AdminWrapper,
  Sidebar,
  Logo,
  Nav,
  NavLink,
  MainContent,
  Header,
  UserProfile,
  DashboardGrid,
  Card,
  Section,
  SectionHeader,
  AddButton,
  ProductTable,
  ActionButton,
  MenuButton,
  TableWrapper,
  Overlay,
  PaginationWrapper,
  PaginationButton,
  PageCounter,
} from './styles';
import { lightTheme, darkTheme } from '../../../styles/themes/theme';
import { ThemeProvider } from 'styled-components';

import {
  FiGrid,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiMoon,
  FiSun,
  FiMenu,
} from 'react-icons/fi';

// Dados de exemplo para a tabela de produtos
const mockProducts = [
  { id: 1, name: 'Conjunto Nuvem Feliz', price: 'R$ 89,90', stock: 15, category: 'Conjuntos' },
  { id: 2, name: 'Macacão Sonho de Bebê', price: 'R$ 120,50', stock: 8, category: 'Macacões' },
  { id: 3, name: 'Vestido Doce Encanto', price: 'R$ 99,00', stock: 22, category: 'Vestidos' },
  { id: 4, name: 'Body Estrelinha', price: 'R$ 45,00', stock: 30, category: 'Bodies' },
  { id: 5, name: 'Calça Bebê Conforto', price: 'R$ 35,90', stock: 50, category: 'Calças' },
  { id: 6, name: 'Blusa Ursinho Carinhoso', price: 'R$ 55,00', stock: 25, category: 'Blusas' },
  { id: 7, name: 'Kit Meias Divertidas (3 pares)', price: 'R$ 29,90', stock: 100, category: 'Acessórios' },
  { id: 8, name: 'Sapatinho Primeiros Passos', price: 'R$ 75,00', stock: 18, category: 'Calçados' },
  { id: 9, name: 'Manta de Algodão Orgânico', price: 'R$ 110,00', stock: 12, category: 'Acessórios' },
  { id: 10, name: 'Pijama Céu Estrelado', price: 'R$ 95,50', stock: 20, category: 'Pijamas' },
  { id: 11, name: 'Toalha de Banho com Capuz', price: 'R$ 65,00', stock: 35, category: 'Banho' },
  { id: 12, name: 'Romper Verão Fresco', price: 'R$ 79,90', stock: 14, category: 'Macacões' },
];

// Estilo Global para o corpo da página, útil para controlar o scroll quando o menu está aberto
const GlobalStyle = createGlobalStyle<{ lockScroll?: boolean }>`
  body {
    margin: 0; /* Remove a margem padrão do navegador */
    padding: 0; /* Garante que não haja preenchimento extra */
    overflow: ${({ lockScroll }) => (lockScroll ? 'hidden' : 'auto')};
  }
`;

export default function Admin(){
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  // Lógica de Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mockProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return(
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle lockScroll={isSidebarOpen} />
      <AdminWrapper>
        <Sidebar $isOpen={isSidebarOpen}>
          <Logo>Sweet Baby</Logo>
          <Nav>
            <NavLink href="#" className="active">
              <FiGrid /> Dashboard
            </NavLink>
            <NavLink href="#">
              <FiBox /> Produtos
            </NavLink>
            <NavLink href="#">
              <FiShoppingCart /> Pedidos
            </NavLink>
            <NavLink href="#">
              <FiUsers /> Clientes
            </NavLink>
            <NavLink href="#">
              <FiSettings /> Configurações
            </NavLink>
          </Nav>
        </Sidebar>
        {isSidebarOpen && <Overlay onClick={toggleSidebar} />}

        <MainContent>
          <Header>
            <MenuButton onClick={toggleSidebar}>
              <FiMenu />
            </MenuButton>
            <h2>Dashboard</h2>
            <UserProfile>
              <ThemeToggleButton onClick={toggleTheme}>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </ThemeToggleButton>
              <span>Olá, Igor</span>
              {/* Usando uma imagem de avatar de exemplo */}
              <img src="https://i.pravatar.cc/150?u=igor" alt="Foto do perfil do usuário" />
            </UserProfile>
          </Header>

          <DashboardGrid>
            <Card>
              <h3>Vendas Totais</h3>
              <p>R$ 12.543,00</p>
            </Card>
            <Card>
              <h3>Pedidos Pendentes</h3>
              <p>12</p>
            </Card>
            <Card>
              <h3>Novos Clientes</h3>
              <p>34</p>
            </Card>
            <Card>
              <h3>Produtos em Estoque</h3>
              <p>256</p>
            </Card>
          </DashboardGrid>

          <Section>
            <SectionHeader>
              <h3>Produtos Recentes</h3>
              <AddButton>
              <FiPlus /> <span>Adicionar Produto</span>
              </AddButton>
            </SectionHeader>
          <TableWrapper>
            <ProductTable>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Estoque</th>
                  <th>Categoria</th>
                  <th>Ações</th>
                  </tr>
              </thead>
              <tbody>                
                {currentItems.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td className="actions">
                      <ActionButton title="Editar">
                        <FiEdit size={16} />
                      </ActionButton>
                      <ActionButton title="Excluir">
                        <FiTrash2 size={16} />
                      </ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>
            </TableWrapper>
            <PaginationWrapper>
              <PageCounter>
                Página {currentPage} de {totalPages}
              </PageCounter>
              <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
                Anterior
              </PaginationButton>
              <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                Próximo
              </PaginationButton>
            </PaginationWrapper>
          </Section>
        </MainContent>
      </AdminWrapper>
    </ThemeProvider>
  )
}