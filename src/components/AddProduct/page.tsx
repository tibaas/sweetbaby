'use client';

import React, { useState } from 'react';
import {
  FormWrapper,
  Form,
  FormGroup,
  SubmitButton,
  TagInputWrapper,
  Tag,
} from './styles';
import { supabase } from '@/src/lib/supabase';
import { FiX } from 'react-icons/fi';

// Interfaces que já tínhamos
interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock_quantity: number;
  category: string;
  sizes?: string[];
  colors?: string[];
  image_urls?: string[];
  is_featured?: boolean;
  created_at: string;
}

interface AddProductFormProps {
  productToEdit?: Product | null;
  onFormSubmit: (status: 'success' | 'error', message: string) => void;
  onCancel: () => void;
}

// Lista fixa de categorias
const availableCategories = ["Blusas", "Calçados", "Moletons", "Acessórios", "Vestidos"];

export default function AddProductForm({ productToEdit, onFormSubmit, onCancel }: AddProductFormProps) {
  // Inicializa o estado do formulário com base em productToEdit ou valores padrão.
  const [isLoading, setIsLoading] = useState(false);
  // Isso evita o useEffect para popular o formulário e o aviso de "cascading renders".
  const [formData, setFormData] = useState(() => ({
    name: productToEdit?.name || '',
    price: productToEdit?.price ? String(productToEdit.price) : '',
    stock: productToEdit?.stock_quantity ? String(productToEdit.stock_quantity) : '',
    // Usa o nome da categoria. Se for um produto novo, define a primeira da lista como padrão.
    category: productToEdit?.category || availableCategories[0],
    description: productToEdit?.description || '',
    size: '', // O campo de input para novos tamanhos sempre começa vazio
    colors: productToEdit?.colors?.join(', ') || '',
    is_featured: productToEdit?.is_featured || false,
  }));
  const [sizeTags, setSizeTags] = useState<string[]>(() => productToEdit?.sizes || []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSizeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newSize = formData.size.trim();
      if (newSize && !sizeTags.includes(newSize)) {
        setSizeTags([...sizeTags, newSize]);
      }
      setFormData((prev) => ({ ...prev, size: '' }));
    }
  };

  const removeSizeTag = (sizeToRemove: string) => {
    setSizeTags(sizeTags.filter(size => size !== sizeToRemove));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const productData = {
      name: formData.name,
      price: parseFloat(formData.price) || 0,
      stock_quantity: Number(formData.stock) || 0,
      description: formData.description,
      category: formData.category, 
      sizes: sizeTags,
      colors: formData.colors ? formData.colors.split(',').map(c => c.trim()) : [],
      is_featured: formData.is_featured,
    };

    let error;

    if (productToEdit) {
      // Lógica de ATUALIZAÇÃO
      const { error: updateError } = await supabase
        .from('products')
        .update(productData)
        .eq('id', productToEdit.id);
      error = updateError;
    } else {
      // Lógica de CRIAÇÃO
      const { error: insertError } = await supabase
        .from('products')
        .insert([productData]);
      error = insertError;
    }

    if (error) {
      console.error(productToEdit ? 'Erro ao atualizar produto:' : 'Erro ao criar produto:', error);
      onFormSubmit('error', error.message || 'Ocorreu um erro. Tente novamente.');
    } else {
      const successMessage = productToEdit ? 'Produto atualizado com sucesso!' : 'Produto criado com sucesso!';
      onFormSubmit('success', successMessage);
    }
    setIsLoading(false);
  };

  return (
    <FormWrapper>
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
          <label htmlFor="description">Descrição</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="category">Categoria</label>
          <select id="category" name="category" value={formData.category} onChange={handleInputChange} required>
            {availableCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="size">Tamanhos (pressione Enter para adicionar)</label>
          <TagInputWrapper>
            {sizeTags.map((size) => (
              <Tag key={size}>
                {size}
                <button type="button" onClick={() => removeSizeTag(size)}>
                  <FiX size={14} />
                </button>
              </Tag>
            ))}
            <input
              type="text"
              id="size" name="size" value={formData.size} onChange={handleInputChange} onKeyDown={handleSizeKeyDown}
              placeholder={sizeTags.length === 0 ? "P, 38, 2 anos..." : ""}
            />
          </TagInputWrapper>
        </FormGroup>
        <FormGroup>
          <label htmlFor="colors">Cores (separadas por vírgula)</label>
          <input type="text" id="colors" name="colors" value={formData.colors} onChange={handleInputChange} placeholder="Ex: Azul, Rosa, Branco" />
        </FormGroup>
        <FormGroup>
          <label style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
            <input type="checkbox" name="is_featured" checked={formData.is_featured} onChange={handleInputChange} />
            Produto em destaque (aparece na home)
          </label>
        </FormGroup>
        <SubmitButton type="submit" disabled={isLoading}>
          <span>{isLoading ? 'Salvando...' : (productToEdit ? 'Salvar Alterações' : 'Salvar Produto')}</span>
        </SubmitButton>
      </Form>
    </FormWrapper>
  );
}
