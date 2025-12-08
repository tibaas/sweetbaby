'use client';

import { useState, useCallback, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { usePathname } from 'next/navigation';

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
  MenuButton,
  Overlay,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  Toast,
} from './styles';
import { lightTheme, darkTheme } from '../../../styles/themes/theme';
import AddProductForm from '@/src/components/AddProduct/page';
import { Product } from './page';

import {
  FiGrid,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const GlobalStyle = createGlobalStyle<{ lockScroll?: boolean }>`
  body {
    margin: 0;
    padding: 0;
    overflow: ${({ lockScroll }) => (lockScroll ? 'hidden' : 'auto')};
  }
`;

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const pathname = usePathname();
  const [refreshProducts, setRefreshProducts] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000); // O toast some após 4 segundos
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    if (isModalOpen) {
      setEditingProduct(null); // Limpa o produto em edição ao fechar
    }
  };

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  const handleFormSubmitted = useCallback((status: 'success' | 'error', message: string) => {
    setToast({ message, type: status });
    if (status === 'success') {
      toggleModal();
      setRefreshProducts(v => !v); // Força a atualização da lista de produtos
    }
    // Se for erro, o modal continua aberto para o usuário corrigir.
  }, [toggleModal]); // A dependência do toggleModal está correta aqui

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle lockScroll={isSidebarOpen || isModalOpen} />
      <AdminWrapper>
        <Sidebar $isOpen={isSidebarOpen}>
          <Logo>Admin Page</Logo>
          <Nav>
            <NavLink href="/pages/admin" className={pathname === '/pages/admin' ? 'active' : ''}>
              <FiGrid /> Dashboard
            </NavLink>
            <NavLink href="#" onClick={handleOpenAddModal} className={pathname.startsWith('/pages/admin/produtos') ? 'active' : ''}>
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
              <img src="https://i.pravatar.cc/150?u=igor" alt="Foto do perfil do usuário" />
            </UserProfile>
          </Header>
          {/* Passando a função de atualização para os filhos */}
          {children}
        </MainContent>

        {isModalOpen && (
          <ModalOverlay onClick={toggleModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h3>{editingProduct ? 'Editar Produto' : 'Adicionar Produto'}</h3>
                <CloseButton onClick={toggleModal}><FiX /></CloseButton>
              </ModalHeader>
              <AddProductForm productToEdit={editingProduct} onFormSubmit={handleFormSubmitted} onCancel={toggleModal} />
            </ModalContent>
          </ModalOverlay>
        )}
        {toast && (
          <Toast $type={toast.type}>{toast.message}</Toast>
        )}
      </AdminWrapper>
    </ThemeProvider>
  );
}