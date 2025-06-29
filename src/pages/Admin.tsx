
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';

const Admin = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
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
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
            <p className="text-gray-600">Gerencie seus projetos e informações do portfólio</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/">
              Voltar ao Portfólio
            </Link>
          </Button>
        </div>

        {!isEditing ? (
          <>
            {/* Add New Project Button */}
            <div className="mb-8">
              <Button 
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Adicionar Novo Projeto
              </Button>
            </div>

            {/* Projects List */}
            <div className="grid gap-6">
              <h2 className="text-2xl font-semibold text-gray-900">Projetos Existentes</h2>
              
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-gray-600 mt-2">{project.summary}</p>
                      </div>
                      <Button 
                        onClick={() => handleEdit(project)}
                        variant="outline"
                        size="sm"
                      >
                        Editar
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <p>Mídias: {project.media.length}</p>
                      <p>Criado em: {project.createdAt.toLocaleDateString('pt-BR')}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          /* Edit Form */
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>
                {selectedProject ? 'Editar Projeto' : 'Novo Projeto'}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Título</label>
                  <Input 
                    placeholder="Título do projeto"
                    defaultValue={selectedProject?.title || ''}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Link do Projeto</label>
                  <Input 
                    placeholder="https://exemplo.com"
                    defaultValue={selectedProject?.link || ''}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Resumo</label>
                <Textarea 
                  placeholder="Resumo breve do projeto"
                  defaultValue={selectedProject?.summary || ''}
                  className="h-20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Descrição Detalhada</label>
                <Textarea 
                  placeholder="Descrição completa do projeto"
                  defaultValue={selectedProject?.description || ''}
                  className="h-32"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tecnologias (separadas por vírgula)</label>
                <Input 
                  placeholder="React, Node.js, PostgreSQL"
                  defaultValue={selectedProject?.technologies.join(', ') || ''}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">URLs das Mídias (uma por linha)</label>
                <Textarea 
                  placeholder="https://exemplo.com/imagem1.jpg&#10;https://exemplo.com/imagem2.jpg"
                  defaultValue={selectedProject?.media.map(m => m.url).join('\n') || ''}
                  className="h-24"
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Salvar
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Admin;
