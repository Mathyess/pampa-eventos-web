import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  // Placeholder data - será substituído por conteúdo real posteriormente
  const portfolioItems = [
    {
      title: "Festival de Verão",
      location: "Porto Alegre, RS",
      description: "Grande festival com 3 palcos simultâneos",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Festival"
    },
    {
      title: "Show Nacional",
      location: "Caxias do Sul, RS",
      description: "Estrutura completa para artista nacional",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Show"
    },
    {
      title: "Evento Corporativo",
      location: "Florianópolis, SC",
      description: "Convenção empresarial com 2000 participantes",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Corporativo"
    },
    {
      title: "Festa Tradicional",
      location: "Pelotas, RS",
      description: "CTG com estrutura completa de som e luz",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tradicional"
    },
    {
      title: "Concert Hall",
      location: "Curitiba, PR",
      description: "Show intimista com audio profissional",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Show"
    },
    {
      title: "Festival Universitário",
      location: "Santa Maria, RS",
      description: "Evento de 3 dias com múltiplas atrações",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Festival"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso <span className="text-gradient">Portfólio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alguns dos eventos que tivemos o prazer de realizar. 
              Cada projeto é uma nova oportunidade de superar expectativas.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-brand-green transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 flex items-center">
                    <span className="mr-1">📍</span>
                    {item.location}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Clients Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Clientes que Confiam</h3>
              <p className="text-muted-foreground">
                Trabalhamos com artistas, empresas e organizadores de todo o Sul do Brasil
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">Porto Alegre</div>
                  <div className="text-sm text-muted-foreground">Estádio Beira-Rio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">Gramado</div>
                  <div className="text-sm text-muted-foreground">Festival de Cinema</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Caxias do Sul</div>
                  <div className="text-sm text-muted-foreground">Festa da Uva</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">Pelotas</div>
                  <div className="text-sm text-muted-foreground">FENADOCE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;