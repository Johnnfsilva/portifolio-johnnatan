
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';

interface ProjectsListProps {
  onEditProject: (project: Project) => void;
  onAddProject: () => void;
}

const ProjectsList = ({ onEditProject, onAddProject }: ProjectsListProps) => {
  return (
    <>
      {/* Add New Project Button */}
      <div className="mb-8">
        <Button 
          onClick={onAddProject}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Adicionar Novo Projeto
        </Button>
      </div>

      {/* Projects List */}
      <div className="grid gap-6">
        <h2 className="text-2xl font-semibold text-gray-900">Projetos Existentes</h2>
        
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow bg-white border-gray-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{project.summary}</p>
                </div>
                <Button 
                  onClick={() => onEditProject(project)}
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Editar
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
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
  );
};

export default ProjectsList;
