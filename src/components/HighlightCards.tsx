import { Card, CardContent } from "@/components/ui/card";

const HighlightCards = () => {
  const highlights = [
    {
      title: "Mais de 10 anos",
      subtitle: "de experiência",
      description: "Tradição e expertise comprovada no mercado de eventos"
    },
    {
      title: "Sul do Brasil",
      subtitle: "é nossa casa",
      description: "Atuação em todo o Rio Grande do Sul, Santa Catarina e Paraná"
    },
    {
      title: "Equipe técnica",
      subtitle: "especializada",
      description: "Profissionais qualificados e equipamentos de última geração"
    },
    {
      title: "Eventos de",
      subtitle: "todos os portes",
      description: "Do pequeno ao grande evento, temos a solução ideal"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-brand-green transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {highlight.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-secondary">
                    {highlight.subtitle}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightCards;