'use client';

import { useState, useEffect} from 'react';

import {
  DashboardGrid,
  Card,
  Section,
  SectionHeader,
  AddButton,
  ProductTable,
  ActionButton,
  TableWrapper,
  PaginationWrapper,
  PaginationButton,
  PageCounter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalFooter,
  ConfirmButton,
} from './styles';
import { supabase } from '@/src/lib/supabase';

import {
  FiEdit,
  FiTrash2,
  FiX } from 'react-icons/fi';

// Definindo a interface para o tipo do produto
export interface Product {
  id: string; // UUID do Supabase é uma string
  name: string;
  description?: string;
  price: number; // Armazenar como número
  stock_quantity: number;
  category: string;
  sizes?: string[];
  colors?: string[];
  image_urls?: string[];
  is_featured?: boolean;
  created_at: string;
}

interface AdminPageProps {
  onEditProduct: (product: Product) => void;
  refreshTrigger: boolean;
}

export default function Admin({ onEditProduct, refreshTrigger }: AdminPageProps){
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const itemsPerPage = 7;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
  
      if (error) {
        console.error('Erro ao buscar produtos:', error);
      } else {
        setProducts(data as Product[]);
      }
    };
    getProducts();
  }, [refreshTrigger]);

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
    if (isDeleteModalOpen) {
      setProductToDelete(null);
    }
  };

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    toggleDeleteModal();
  };

  const handleConfirmDelete = async () => {
    if (productToDelete) {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productToDelete.id);

      if (error) {
        console.error('Erro ao deletar produto:', error);
      } else {
        // Refresca a lista de produtos removendo o item deletado do estado,
        // evitando uma nova chamada à API.
        setProducts(prevProducts =>
          prevProducts.filter(p => p.id !== productToDelete.id)
        );
        toggleDeleteModal();
      }
    }
  };

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

  return(
    <>
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
          {/* <AddButton onClick={() => onEditProduct(null as any)}>
          <FiPlus /> <span>Adicionar Produto</span>
          </AddButton> */}
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
                    {/* Formatando o preço para exibição */}
                    <td>{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</td>
                    <td>{product.stock_quantity}</td>
                    <td>{product.category}</td>
                    <td className="actions">
                      <ActionButton title="Editar" onClick={() => onEditProduct(product)}>
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

      {isDeleteModalOpen && (
        <ModalOverlay onClick={toggleDeleteModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>Confirmar Exclusão</h3>
              <CloseButton onClick={toggleDeleteModal}><FiX /></CloseButton>
            </ModalHeader>
            <ModalBody>
              <p>Você tem certeza que deseja excluir o produto <strong>{productToDelete?.name}</strong>?</p>
              <p>Esta ação não poderá ser desfeita.</p>
            </ModalBody>
            <ModalFooter>
              <AddButton onClick={toggleDeleteModal}>Cancelar</AddButton>
              <ConfirmButton onClick={handleConfirmDelete}>Sim, Excluir</ConfirmButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}