import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validação para garantir que as variáveis de ambiente foram carregadas
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and/or Anon Key are missing in .env.local');
}

// Cria e exporta o cliente Supabase.
// Este cliente será um "singleton", ou seja, a mesma instância será usada em toda a aplicação.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

