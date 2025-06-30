
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
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="p-0">
        {project.media.length > 0 && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={project.media[0].url}
              alt={project.media[0].alt || project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </CardTitle>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-gray-700 text-white">
              Ver Detalhes
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl gradient-text">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                {project.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Media Gallery */}
              {project.media.length > 0 && (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={project.media[selectedMedia].url}
                      alt={project.media[selectedMedia].alt || project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  {project.media.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {project.media.map((media, index) => (
                        <button
                          key={media.id}
                          onClick={() => setSelectedMedia(index)}
                          className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                            selectedMedia === index ? 'border-blue-500' : 'border-gray-200'
                          }`}
                        >
                          <img
                            src={media.url}
                            alt={media.alt || `Media ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-2 text-gray-900">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex gap-4">
                {project.link && (
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver Projeto
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" asChild className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Ver Código
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
