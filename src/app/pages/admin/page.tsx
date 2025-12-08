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
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  Form,
  FormGroup,
  SubmitButton,
  ModalBody,
  ModalFooter,
  ConfirmButton,
} from './styles';
import { lightTheme, darkTheme } from '../../../styles/themes/theme';
import { ThemeProvider } from 'styled-components';

import {
  FiGrid,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiAlertTriangle,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiMoon,
  FiSun,
  FiMenu,
} from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

// Definindo a interface para o tipo do produto
interface Product {
  id: number;
  name: string;
  price: string;
  stock: number;
  category: string;
  size?: string;
  colors?: string;
}

// Dados de exemplo para a tabela de produtos
const mockProducts = [
  // Adicionando os campos opcionais 'size' e 'colors'
  { id: 1, name: 'Conjunto Nuvem Feliz', price: 'R$ 89,90', stock: 15, category: 'Conjuntos', size: 'P, M, G', colors: 'Azul, Rosa' },
  { id: 2, name: 'Macacão Sonho de Bebê', price: 'R$ 120,50', stock: 8, category: 'Macacões', size: 'RN, P', colors: 'Branco' },
  { id: 3, name: 'Vestido Doce Encanto', price: 'R$ 99,00', stock: 22, category: 'Vestidos', size: '1, 2, 3', colors: 'Rosa' },
  { id: 4, name: 'Body Estrelinha', price: 'R$ 45,00', stock: 30, category: 'Bodies', size: 'P, M', colors: 'Cinza, Branco' },
  { id: 5, name: 'Calça Bebê Conforto', price: 'R$ 35,90', stock: 50, category: 'Calças', size: 'P, M, G', colors: 'Preto, Cinza' },
  { id: 6, name: 'Blusa Ursinho Carinhoso', price: 'R$ 55,00', stock: 25, category: 'Blusas', size: '1, 2', colors: 'Marrom' },
  { id: 7, name: 'Kit Meias Divertidas (3 pares)', price: 'R$ 29,90', stock: 100, category: 'Acessórios', size: 'Único', colors: 'Variadas' },
  { id: 8, name: 'Sapatinho Primeiros Passos', price: 'R$ 75,00', stock: 18, category: 'Calçados', size: '16, 17, 18', colors: 'Azul Marinho' },
  { id: 9, name: 'Manta de Algodão Orgânico', price: 'R$ 110,00', stock: 12, category: 'Acessórios', size: 'N/A', colors: 'Bege' },
  { id: 10, name: 'Pijama Céu Estrelado', price: 'R$ 95,50', stock: 20, category: 'Pijamas', size: '1, 2, 3', colors: 'Azul, Amarelo' },
  { id: 11, name: 'Toalha de Banho com Capuz', price: 'R$ 65,00', stock: 35, category: 'Banho', size: 'N/A', colors: 'Branco, Verde' },
  { id: 12, name: 'Romper Verão Fresco', price: 'R$ 79,90', stock: 14, category: 'Macacões', size: 'P, M', colors: 'Estampado' },
];

// Estilo Global para o corpo da página, útil para controlar o scroll quando o menu está aberto
const GlobalStyle = createGlobalStyle<{ lockScroll?: boolean }>`
  body {
    margin: 0; 
    padding: 0; 
    overflow: ${({ lockScroll }) => (lockScroll ? 'hidden' : 'auto')};
  }
`;

export default function Admin(){
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const itemsPerPage = 7;
  const [products, setProducts] = useState<Product[]>(mockProducts); 

  // Estado para os dados do formulário (controlado)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    size: '',
    colors: '',
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    // Limpa o estado de edição ao fechar o modal
    if (isModalOpen) {
      setEditingProduct(null);
    }
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
    // Limpa o produto a ser deletado se o modal for fechado
    if (isDeleteModalOpen) {
      setProductToDelete(null);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setFormData({
      name: '', price: '', stock: '', category: '', size: '', colors: ''
    });
    toggleModal();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  // Lógica de Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editingProduct) {
      const updatedProducts = products.map((p) =>
        p.id === editingProduct.id
          ? {
              ...p,
              name: formData.name,
              price: `R$ ${parseFloat(formData.price).toFixed(2).replace('.', ',')}`,
              stock: Number(formData.stock) || 0,
              category: formData.category,
              size: formData.size || undefined,
              colors: formData.colors || undefined,
            }
          : p
      );
      setProducts(updatedProducts);
    } else {
      const newProduct: Product = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1, // ID mais seguro
        name: formData.name,
        price: `R$ ${parseFloat(formData.price).toFixed(2).replace('.', ',')}`,
        stock: Number(formData.stock) || 0,
        category: formData.category,
        size: formData.size || undefined,
        colors: formData.colors || undefined,
      };
      setProducts([newProduct, ...products]);
    }
    toggleModal();
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.replace('R$ ', '').replace(',', '.'),
      stock: String(product.stock),
      category: product.category,
      size: product.size || '',
      colors: product.colors || '',
    });
    toggleModal();
  };

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    toggleDeleteModal();
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      setProducts(products.filter((p) => p.id !== productToDelete.id));
      toggleDeleteModal();
    }
  };

  // Bloqueia o scroll do body quando o menu lateral ou o modal estiverem abertos
  const isBodyScrollLocked = isSidebarOpen || isModalOpen || isDeleteModalOpen;

  return(
    <ThemeProvider theme={currentTheme}>
      {/* O GlobalStyle agora controla o scroll para ambos os casos */}
      <GlobalStyle lockScroll={isBodyScrollLocked} />

      <AdminWrapper>
        <Sidebar $isOpen={isSidebarOpen}>
          <Logo>Admin Page</Logo>
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
              <AddButton onClick={handleOpenAddModal}>
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
                      <ActionButton title="Editar" onClick={() => handleEditClick(product)}>
                        <FiEdit size={16} />
                      </ActionButton>
                      <ActionButton title="Excluir" onClick={() => handleDeleteClick(product)}>
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

        {isModalOpen && (
          <ModalOverlay onClick={toggleModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h3>{editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}</h3>
                <CloseButton onClick={toggleModal}><FiX /></CloseButton>
              </ModalHeader>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <label htmlFor="name">Nome do Produto</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="price">Preço (ex: 89.90)</label>
                  <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} step="0.01" required />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="stock">Estoque</label>
                  <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleInputChange} required />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="category">Categoria</label>
                  <input type="text" id="category" name="category" value={formData.category} onChange={handleInputChange} required />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="size">Tamanhos (separados por vírgula)</label>
                  <input type="text" id="size" name="size" value={formData.size} onChange={handleInputChange} placeholder="Ex: P, M, G" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="colors">Cores (separadas por vírgula)</label>
                  <input type="text" id="colors" name="colors" value={formData.colors} onChange={handleInputChange} placeholder="Ex: Azul, Rosa, Branco" />
                </FormGroup>
                <SubmitButton type="submit">
                  <span>{editingProduct ? 'Salvar Alterações' : 'Salvar Produto'}</span>
                </SubmitButton>
              </Form>
            </ModalContent>
          </ModalOverlay>
        )}

        {isDeleteModalOpen && (
          <ModalOverlay onClick={toggleDeleteModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h3>Confirmar Exclusão</h3>
                <CloseButton onClick={toggleDeleteModal}><FiX /></CloseButton>
              </ModalHeader>
              <ModalBody>
                <p>
                  Você tem certeza que deseja excluir o produto <strong>{productToDelete?.name}</strong>?
                </p>
                <p>Esta ação não poderá ser desfeita.</p>
              </ModalBody>
              <ModalFooter>
                <AddButton onClick={toggleDeleteModal}>Cancelar</AddButton>
                <ConfirmButton onClick={handleConfirmDelete}>Sim, Excluir</ConfirmButton>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        )}
      </AdminWrapper>
    </ThemeProvider>
  )
}