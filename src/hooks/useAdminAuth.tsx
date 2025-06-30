
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se já está autenticado (localStorage)
    const authToken = localStorage.getItem('admin_auth_token');
    const authExpiry = localStorage.getItem('admin_auth_expiry');
    
    if (authToken && authExpiry) {
      if (new Date().getTime() < parseInt(authExpiry)) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('admin_auth_token');
        localStorage.removeItem('admin_auth_expiry');
      }
    }
    
    setIsLoading(false);
  }, []);

  const sendCode = async (email: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-admin-code', {
        body: { email }
      });

      if (error) throw error;
      return { success: true };
    } catch (error: any) {
      console.error('Erro ao enviar código:', error);
      return { success: false, error: error.message };
    }
  };

  const verifyCode = async (email: string, code: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('verify-admin-code', {
        body: { email, code }
      });

      if (error) throw error;

      if (data.success) {
        // Gerar token simples e definir expiração (2 horas)
        const token = Math.random().toString(36).substr(2, 15);
        const expiry = new Date().getTime() + (2 * 60 * 60 * 1000);
        
        localStorage.setItem('admin_auth_token', token);
        localStorage.setItem('admin_auth_expiry', expiry.toString());
        
        setIsAuthenticated(true);
        return { success: true };
      }
      
      return { success: false, error: data.message };
    } catch (error: any) {
      console.error('Erro ao verificar código:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_auth_token');
    localStorage.removeItem('admin_auth_expiry');
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    sendCode,
    verifyCode,
    logout
  };
};
