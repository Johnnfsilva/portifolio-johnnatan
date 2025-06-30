
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Project } from '@/types';

interface ProjectFormProps {
  selectedProject: Project | null;
  onSave: () => void;
  onCancel: () => void;
}

const ProjectForm = ({ selectedProject, onSave, onCancel }: ProjectFormProps) => {
  return (
    <Card className="max-w-4xl mx-auto bg-white border-gray-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-gray-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl">
          {selectedProject ? 'Editar Projeto' : 'Novo Projeto'}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 p-6 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Título</label>
            <Input 
              placeholder="Título do projeto"
              defaultValue={selectedProject?.title || ''}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Link do Projeto</label>
            <Input 
              placeholder="https://exemplo.com"
              defaultValue={selectedProject?.link || ''}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Resumo</label>
          <Textarea 
            placeholder="Resumo breve do projeto"
            defaultValue={selectedProject?.summary || ''}
            className="h-20 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Descrição Detalhada</label>
          <Textarea 
            placeholder="Descrição completa do projeto"
            defaultValue={selectedProject?.description || ''}
            className="h-32 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Tecnologias (separadas por vírgula)</label>
          <Input 
            placeholder="React, Node.js, PostgreSQL"
            defaultValue={selectedProject?.technologies.join(', ') || ''}
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">URLs das Mídias (uma por linha)</label>
          <Textarea 
            placeholder="https://exemplo.com/imagem1.jpg&#10;https://exemplo.com/imagem2.jpg"
            defaultValue={selectedProject?.media.map(m => m.url).join('\n') || ''}
            className="h-24 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button onClick={onSave} className="bg-blue-600 hover:bg-blue-700 text-white">
            Salvar
          </Button>
          <Button onClick={onCancel} variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectForm;
