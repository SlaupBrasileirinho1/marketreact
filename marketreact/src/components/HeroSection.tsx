import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-amora-beige overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amora-darkBrown mb-6">
              Descubra produtos únicos no <span className="text-amora-brown">Amora Marketplace</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              Uma plataforma completa para comprar e vender produtos exclusivos, conectando vendedores e compradores em um só lugar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                className="bg-amora-brown hover:bg-amora-darkBrown text-white px-8 py-6 text-lg"
                onClick={() => navigate('/manage-products')}
              >
                Explorar Produtos
              </Button>
              <Button 
                variant="outline" 
                className="border-amora-brown text-amora-brown hover:bg-amora-brown hover:text-white px-8 py-6 text-lg"
                onClick={() => navigate('/create-product')}
              >
                Vender Produtos
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/f18f9b01-cd87-4287-954e-57e0288c0554.png" 
              alt="Amora Marketplace" 
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amora-light to-transparent"></div>
    </section>
  );
};

export default HeroSection;
