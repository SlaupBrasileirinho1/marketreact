
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: "Massageador Terapêutico",
    price: 279.90,
    imageUrl: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "Relax Tech"
  },
  {
    id: 2,
    name: "Difusor de Aromas",
    price: 149.90,
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "Bem Estar & Co"
  },
  {
    id: 3,
    name: "Kit Yoga Premium",
    price: 199.90,
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "Saúde Zen"
  },
  {
    id: 4,
    name: "Bateria Lítio 48V",
    price: 3189.90,
    imageUrl: "https://images.unsplash.com/photo-1606997133071-b3c3acc68d79?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "EV Parts"
  },
  {
    id: 5,
    name: "Motor Elétrico 4000W",
    price: 2499.90,
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9a6cbbbab5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "MotorEletric"
  },
  {
    id: 6,
    name: "Patinete Elétrico",
    price: 1899.90,
    imageUrl: "https://images.unsplash.com/photo-1575884619826-0be11c72f30a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "MoveEletric"
  },
  {
    id: 7,
    name: "Controlador 60A",
    price: 749.90,
    imageUrl: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "EV Controls"
  },
  {
    id: 8,
    name: "Cadeira de Massagem",
    price: 4899.90,
    imageUrl: "https://images.unsplash.com/photo-1545158535-c3f82c6b0f50?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "RelaxShop"
  },
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setProducts(mockProducts);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-amora-darkBrown">Produtos em Destaque</h2>
          <Button variant="outline" className="border-amora-brown text-amora-brown hover:bg-amora-brown hover:text-white">
            Ver Todos
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              seller={product.seller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
