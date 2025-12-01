export const lightTheme = {
  colors: {
    primary: '#0066FF',
    secondary: '#00A3FF',
    sky: '#87CEEB', // Um azul céu para o gradiente
    background: '#F8FAFC',
    text: '#1E293B',
    white: '#FFFFFF',
    error: '#EF4444',
    success: '#10B981',
    
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
}

export const darkTheme = {
  colors: {
    primary: '#4a90e2',
    secondary: '#00A3FF', // Pode ajustar se necessário
    sky: '#2a3a5c', // Um azul mais escuro para o modo noturno
    background: '#121212',
    text: '#e0e0e0',
    white: '#1e1e1e', // Cor de fundo para cards e sidebar
    error: '#EF4444',
    success: '#10B981',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
  },
};

// Exportando o tema claro com o nome defaultTheme para manter a consistência, se necessário em outros lugares.
export const defaultTheme = lightTheme;