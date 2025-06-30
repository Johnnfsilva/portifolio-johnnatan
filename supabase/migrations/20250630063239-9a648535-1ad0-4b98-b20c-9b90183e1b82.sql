
-- Criar tabela para armazenar códigos de autenticação de admin
CREATE TABLE public.admin_auth_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  code TEXT NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  used BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar índice para melhor performance
CREATE INDEX idx_admin_auth_codes_email_code ON public.admin_auth_codes(email, code);
CREATE INDEX idx_admin_auth_codes_expires_at ON public.admin_auth_codes(expires_at);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.admin_auth_codes ENABLE ROW LEVEL SECURITY;

-- Criar política que permite acesso público para verificação de códigos
CREATE POLICY "Allow public access for code verification" 
  ON public.admin_auth_codes 
  FOR ALL 
  USING (true);
