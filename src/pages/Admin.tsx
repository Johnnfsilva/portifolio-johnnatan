
import { useState } from 'react';
import { Project } from '@/types';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import AdminAuth from '@/components/AdminAuth';
import AdminHeader from '@/components/admin/AdminHeader';
import ProjectsList from '@/components/admin/ProjectsList';
import ProjectForm from '@/components/admin/ProjectForm';

const Admin = () => {
  const { isAuthenticated, isLoading, logout } = useAdminAuth();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Mostrar loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verificando acesso...</p>
        </div>
      </div>
    );
  }

  // Mostrar tela de autenticação se não estiver autenticado
  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => {}} />;
  }

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setIsEditing(true);
  };

  const handleAddProject = () => {
    setSelectedProject(null);
    setIsEditing(true);
  };

  const handleSave = () => {
    // Aqui você implementaria a lógica de salvamento
    console.log('Salvando projeto:', selectedProject);
    setIsEditing(false);
    setSelectedProject(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <AdminHeader 
          onLogout={logout}
          onAddProject={handleAddProject}
          isEditing={isEditing}
        />

        {!isEditing ? (
          <ProjectsList 
            onEditProject={handleEdit}
            onAddProject={handleAddProject}
          />
        ) : (
          <ProjectForm 
            selectedProject={selectedProject}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
