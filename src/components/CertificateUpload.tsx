
import { useState, useRef } from 'react';
import { Upload, X, Check, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

interface CertificateUploadProps {
  onUpload?: (certificate: any) => void;
}

const CertificateUpload = ({ onUpload }: CertificateUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [certificateData, setCertificateData] = useState({
    title: '',
    organization: '',
    date: '',
    description: '',
    skills: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...imageFiles]);
      toast({
        title: "Files uploaded!",
        description: `${imageFiles.length} certificate(s) uploaded successfully.`,
      });
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one certificate image.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically upload to your server or cloud storage
    // For now, we'll just simulate the process
    const newCertificate = {
      ...certificateData,
      skills: certificateData.skills.split(',').map(s => s.trim()),
      image: URL.createObjectURL(uploadedFiles[0]), // In real app, this would be the uploaded URL
      files: uploadedFiles
    };

    onUpload?.(newCertificate);
    
    toast({
      title: "Certificate added!",
      description: "Your certificate has been successfully added to the portfolio.",
    });

    // Reset form
    setCertificateData({
      title: '',
      organization: '',
      date: '',
      description: '',
      skills: ''
    });
    setUploadedFiles([]);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Upload New Certificate
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
              dragActive
                ? 'border-portfolio-primary bg-portfolio-primary/5'
                : 'border-gray-300 dark:border-gray-600'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <Label>Uploaded Files</Label>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="flex items-center">
                    <FileImage className="w-4 h-4 mr-2 text-portfolio-primary" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{file.name}</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Certificate Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Certificate Title</Label>
              <Input
                id="title"
                value={certificateData.title}
                onChange={(e) => setCertificateData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., AWS Cloud Practitioner"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                value={certificateData.organization}
                onChange={(e) => setCertificateData(prev => ({ ...prev, organization: e.target.value }))}
                placeholder="e.g., Amazon Web Services"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="date">Date Obtained</Label>
            <Input
              id="date"
              value={certificateData.date}
              onChange={(e) => setCertificateData(prev => ({ ...prev, date: e.target.value }))}
              placeholder="e.g., 2023"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={certificateData.description}
              onChange={(e) => setCertificateData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Brief description of the certification"
            />
          </div>

          <div>
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Input
              id="skills"
              value={certificateData.skills}
              onChange={(e) => setCertificateData(prev => ({ ...prev, skills: e.target.value }))}
              placeholder="e.g., Cloud Computing, AWS, DevOps"
            />
          </div>

          <Button type="submit" className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90">
            <Check className="w-4 h-4 mr-2" />
            Add Certificate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CertificateUpload;
