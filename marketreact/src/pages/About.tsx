
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-amora-light">
        {/* Hero Section */}
        <section className="bg-amora-beige py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-amora-darkBrown mb-6">Sobre a Amora Marketplace</h1>
              <p className="text-xl text-gray-700">
                Conectando vendedores e compradores em uma plataforma inovadora e confiável.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/f18f9b01-cd87-4287-954e-57e0288c0554.png" 
                  alt="Amora Logo"
                  className="mx-auto w-72 h-72 object-contain" 
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-amora-darkBrown mb-6">Nossa História</h2>
                <p className="text-gray-700 mb-4">
                  A Amora Marketplace nasceu em 2023 com uma missão clara: revolucionar o comércio eletrônico, 
                  criando um espaço onde pequenos e médios empreendedores pudessem vender seus produtos de forma 
                  simples e eficiente, alcançando um público maior.
                </p>
                <p className="text-gray-700 mb-4">
                  Fundada por um grupo de empreendedores apaixonados por tecnologia e inovação, a Amora rapidamente 
                  se destacou no mercado por sua interface intuitiva, segurança nas transações e excelente experiência 
                  tanto para vendedores quanto para compradores.
                </p>
                <p className="text-gray-700">
                  Hoje, contamos com milhares de vendedores ativos e uma comunidade engajada de compradores que valorizam 
                  a diversidade de produtos e a qualidade do atendimento que oferecemos.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-amora-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-amora-darkBrown mb-6 text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-amora-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amora-darkBrown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amora-brown mb-2">Comunidade</h3>
                <p className="text-gray-600">
                  Acreditamos no poder da comunidade e no impacto positivo que podemos gerar juntos. 
                  Valorizamos relações transparentes e duradouras.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-amora-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amora-darkBrown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amora-brown mb-2">Confiança</h3>
                <p className="text-gray-600">
                  A confiança é a base de todas as nossas relações. Trabalhamos continuamente 
                  para garantir a segurança e a satisfação de nossos usuários.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-amora-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amora-darkBrown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amora-brown mb-2">Inovação</h3>
                <p className="text-gray-600">
                  Estamos sempre em busca de novas maneiras de melhorar nossa plataforma 
                  e oferecer as melhores soluções para nossos usuários.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-amora-darkBrown mb-6 text-center">Nossa Equipe</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Conheça as pessoas apaixonadas que trabalham diariamente para tornar a Amora Marketplace 
              a melhor plataforma para você.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 relative">
                  <img 
                    src="https://randomuser.me/api/portraits/men/1.jpg" 
                    alt="Carlos Mendes" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-amora-brown">Carlos Mendes</h3>
                <p className="text-gray-600">CEO & Fundador</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 relative">
                  <img 
                    src="https://randomuser.me/api/portraits/women/1.jpg" 
                    alt="Ana Oliveira" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-amora-brown">Ana Oliveira</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4 relative">
                  <img 
                    src="https://randomuser.me/api/portraits/men/2.jpg" 
                    alt="Roberto Alves" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-amora-brown">Roberto Alves</h3>
                <p className="text-gray-600">Diretor de Marketing</p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 relative">
                  <img 
                    src="https://randomuser.me/api/portraits/women/2.jpg" 
                    alt="Carla Santos" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-amora-brown">Carla Santos</h3>
                <p className="text-gray-600">Diretora de Operações</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
