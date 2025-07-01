
import { useState } from 'react';
import { Project } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [selectedMedia, setSelectedMedia] = useState(0);

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-white border-gray-200 overflow-hidden"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <CardHeader className="p-0">
        {project.media.length > 0 && (
          <div className="relative overflow-hidden h-48">
            <img
              src={project.media[0].url}
              alt={project.media[0].alt || project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-blue-600 font-bold text-xl mb-3">
          {project.title}
        </CardTitle>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
              {tech}
            </Badge>
          ))}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Ver Detalhes
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-white">
            <DialogHeader className="pb-4 border-b border-gray-200">
              <DialogTitle className="text-2xl font-bold text-blue-600 mb-2">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Detalhes do projeto
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 pt-4">
              <div className="text-gray-600 text-base leading-relaxed">
                {project.description}
              </div>
              
              {/* Media Gallery */}
              {project.media.length > 0 && (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={project.media[selectedMedia].url}
                      alt={project.media[selectedMedia].alt || project.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  
                  {project.media.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {project.media.map((media, index) => (
                        <button
                          key={media.id}
                          onClick={() => setSelectedMedia(index)}
                          className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            selectedMedia === index 
                              ? 'border-blue-500 shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={media.url}
                            alt={media.alt || `Imagem ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Technologies */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-semibold mb-3 text-blue-600 text-lg">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-2 py-1 text-sm font-medium border border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
