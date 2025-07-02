import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stage.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 hero-gradient opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">EquipePampa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium">
            Transformamos ideias em eventos inesquecíveis
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Especialistas em montagem de shows, locação de equipamentos e fornecimento de mão de obra técnica para eventos de todos os portes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-industrial shadow-brand-green px-8 py-4 text-lg"
            >
              Solicite um Orçamento
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="btn-industrial shadow-brand-yellow px-8 py-4 text-lg"
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;