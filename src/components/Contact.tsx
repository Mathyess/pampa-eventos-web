import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você integraria com seu backend
    console.log("Form data:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pronto para transformar sua ideia em um evento inesquecível? 
              Fale conosco e vamos conversar sobre seu projeto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Solicite seu Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Seu telefone/WhatsApp"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Conte-nos sobre seu evento: data, local, tipo de evento, número de pessoas..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 btn-industrial shadow-brand-green text-lg"
                  >
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Contato Direto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Phone className="text-primary" size={20} />
                      </motion.div>
                      <div>
                        <div className="font-semibold">Telefone</div>
                        <div className="text-muted-foreground">(51) 99999-9999</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4"
                        whileHover={{ 
                          scale: 1.1,
                          y: [-2, 2, -2, 0],
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <MessageCircle className="text-secondary" size={20} />
                      </motion.div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-muted-foreground">(51) 99999-9999</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail className="text-primary" size={20} />
                      </motion.div>
                      <div>
                        <div className="font-semibold">E-mail</div>
                        <div className="text-muted-foreground">contato@equipepampa.com.br</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta</span>
                      <span>8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados</span>
                      <span>8h às 12h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergências</span>
                      <span className="text-primary font-semibold">24h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Area */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Área de Atuação</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span>Rio Grande do Sul (todo o estado)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-secondary mr-2">•</span>
                      <span>Santa Catarina</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span>Paraná</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">Sede:</span> Porto Alegre, RS
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;