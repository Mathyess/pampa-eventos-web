import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🏗️",
      title: "Montagem de Estruturas",
      description: "Palcos, coberturas, arquibancadas e estruturas metálicas para eventos de todos os portes.",
      features: [
        "Palcos profissionais",
        "Coberturas resistentes",
        "Estruturas personalizadas",
        "Montagem especializada"
      ]
    },
    {
      icon: "🎵",
      title: "Locação de Equipamentos",
      description: "Som, iluminação, vídeo e equipamentos técnicos de última geração para seu evento.",
      features: [
        "Sistemas de som profissional",
        "Iluminação cênica",
        "Equipamentos de vídeo",
        "Tecnologia de ponta"
      ]
    },
    {
      icon: "👥",
      title: "Recursos Humanos",
      description: "Equipe técnica especializada para montagem, operação e desmontagem do seu evento.",
      features: [
        "Técnicos especializados",
        "Carregadores experientes",
        "Montadores qualificados",
        "Supervisão técnica"
      ]
    },
    {
      icon: "📋",
      title: "Organização Geral",
      description: "Coordenação completa do seu evento, desde o planejamento até a execução final.",
      features: [
        "Planejamento detalhado",
        "Coordenação de equipes",
        "Controle de cronograma",
        "Suporte 24h"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas para eventos, desde pequenas apresentações 
              até grandes festivais e shows.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-brand-green transition-all duration-300 border-border/50 hover:border-primary/50 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-lg p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4">Precisa de um serviço personalizado?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Cada evento é único. Nossa equipe está pronta para desenvolver 
                soluções sob medida para suas necessidades específicas.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-industrial shadow-brand-green transition-all duration-300">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;