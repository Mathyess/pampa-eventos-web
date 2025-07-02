const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">EquipePampa</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformando ideias em eventos inesquecíveis há mais de 10 anos. 
              Sua parceira completa em produção de eventos no Sul do Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Montagem de Estruturas</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Locação de Equipamentos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Recursos Humanos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Organização Geral</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(51) 99999-9999</li>
              <li>contato@equipepampa.com.br</li>
              <li>Porto Alegre, RS</li>
              <li className="text-primary">Atendimento 24h para emergências</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 EquipePampa. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;