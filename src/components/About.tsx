import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-gradient">EquipePampa</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos uma empresa gaúcha especializada em produção de eventos, 
              oferecendo soluções completas para transformar sua ideia em realidade.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa História</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fundada há mais de uma década, a EquipePampa nasceu da paixão pela música 
                  e pela técnica, unindo conhecimento especializado com a tradição gaúcha 
                  de fazer as coisas bem feitas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao longo dos anos, evoluímos de uma pequena empresa de som para uma 
                  referência completa em produção de eventos, sempre mantendo nossos 
                  valores de qualidade, pontualidade e comprometimento.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Nossos Valores</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Excelência técnica em cada projeto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Comprometimento com prazos e qualidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Inovação constante em equipamentos e técnicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Relacionamento próximo e duradouro com clientes</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Eventos Realizados</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Estados Atendidos</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Suporte Técnico</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-lg p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4">Nossa Estrutura</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Contamos com um parque de equipamentos moderno e constantemente atualizado, 
                equipe técnica especializada e parceiros estratégicos que nos permitem 
                atender eventos de qualquer porte com a mesma dedicação e qualidade que 
                nos tornaram referência no Sul do Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;