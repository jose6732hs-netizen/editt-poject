import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">Intercâmbio Brasil</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#educacional" className="text-sm font-medium hover:text-primary transition-colors">Educacional</a>
            <a href="#profissional" className="text-sm font-medium hover:text-primary transition-colors">Profissional</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre Nós</a>
          </div>
          <Button>Fale Conosco</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
                Transforme seu futuro com um <span className="text-primary">Intercâmbio</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto lg:mx-0">
                Experiências educacionais e profissionais internacionais que abrem portas para o mundo. Estude, trabalhe e cresça globalmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="lg" className="gap-2">
                  Ver Programas <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <Globe className="w-full h-full text-primary/20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                    alt="Estudantes em intercâmbio" 
                    className="rounded-xl shadow-2xl object-cover w-4/5 h-4/5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section id="educacional" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <GraduationCap className="h-4 w-4" /> Intercâmbio Educacional
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Expanda seus horizontes acadêmicos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cursos de idiomas, graduação, pós-graduação e especializações nas melhores instituições do mundo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cursos de Idiomas", desc: "Aprenda um novo idioma vivendo a cultura local em países como Inglaterra, EUA e Canadá." },
              { title: "Graduação Exterior", desc: "Inicie sua jornada acadêmica em universidades renomadas com suporte completo no processo." },
              { title: "Pós e Mestrado", desc: "Especialize-se internacionalmente e impulsione seu currículo com títulos globais." }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section id="profissional" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
                alt="Profissionais em ambiente internacional" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="flex-1 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Briefcase className="h-4 w-4" /> Intercâmbio Profissional
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Carreira Global: Estágios e Experiências de Trabalho
              </h2>
              <p className="text-lg text-muted-foreground">
                Desenvolva competências internacionais, aprenda novas metodologias de trabalho e crie um networking global que transformará sua carreira.
              </p>
              <ul className="space-y-4">
                {[
                  "Estágios remunerados em empresas multinacionais",
                  "Programas de Trainee Internacional",
                  "Experiência prática em mercados competitivos",
                  "Certificações profissionais reconhecidas"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-4">Explorar Oportunidades</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Pronto para começar sua jornada?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nossos consultores estão prontos para ajudar você a escolher o programa ideal para seus objetivos educacionais e profissionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary font-bold">
              Agendar Consultoria Grátis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-bold">Intercâmbio Brasil</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Intercâmbio Educacional e Profissional. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Termos</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacidade</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
