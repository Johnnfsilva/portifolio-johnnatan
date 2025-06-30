
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AdminHeaderProps {
  onLogout: () => void;
  onAddProject: () => void;
  isEditing: boolean;
}

const AdminHeader = ({ onLogout, onAddProject, isEditing }: AdminHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
        <p className="text-gray-600">Gerencie seus projetos e informações do portfólio</p>
      </div>
      <div className="flex gap-2">
        <Button onClick={onLogout} variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
          Sair
        </Button>
        <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
          <Link to="/">
            Voltar ao Portfólio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
