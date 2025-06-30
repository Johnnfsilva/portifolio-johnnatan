
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';

interface AdminAuthProps {
  onAuthenticated: () => void;
}

const AdminAuth = ({ onAuthenticated }: AdminAuthProps) => {
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { sendCode, verifyCode } = useAdminAuth();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    const result = await sendCode(email);
    
    if (result.success) {
      toast({
        title: "Código enviado",
        description: "Verifique seu email para o código de acesso.",
      });
      setStep('code');
    } else {
      toast({
        title: "Erro",
        description: result.error || "Erro ao enviar código",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    setIsLoading(true);
    const result = await verifyCode(email, code);
    
    if (result.success) {
      toast({
        title: "Acesso autorizado",
        description: "Bem-vindo ao painel administrativo!",
      });
      onAuthenticated();
    } else {
      toast({
        title: "Código inválido",
        description: result.error || "Código inválido ou expirado",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-xl border-gray-200">
        <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-gray-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">
            Acesso Administrativo
          </CardTitle>
          <p className="text-blue-100 mt-2">
            {step === 'email' 
              ? 'Digite seu email para receber o código de acesso' 
              : 'Digite o código enviado para seu email'}
          </p>
        </CardHeader>
        
        <CardContent className="p-6 bg-gray-50">
          {step === 'email' ? (
            <form onSubmit={handleSendCode} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu-email@exemplo.com"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Código'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyCode} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Código de Verificação</label>
                <Input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="123456"
                  maxLength={6}
                  className="text-center text-2xl tracking-widest border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Verificando...' : 'Verificar Código'}
              </Button>
              
              <Button 
                type="button" 
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => setStep('email')}
              >
                Voltar
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAuth;
