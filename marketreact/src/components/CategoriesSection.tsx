
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

// Mock data for categories
const mockCategories = [
  {
    id: "saude-bem-estar",
    name: "Saúde & Bem Estar",
    imageUrl: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 156
  },
  {
    id: "relax",
    name: "Relax",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 112
  },
  {
    id: "mobilidade",
    name: "Mobilidade",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 98
  },
  {
    id: "baterias",
    name: "Baterias",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 87
  },
  {
    id: "motores",
    name: "Motores Elétricos",
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 76
  },
  {
    id: "carregadores",
    name: "Carregadores",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 64
  },
  {
    id: "carros",
    name: "Carros",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 64
  },
  {
    id: "casa",
    name: "itens para casa",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    count: 64
  }
];

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setCategories(mockCategories);
  }, []);

  return (
    <section className="py-16 bg-amora-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amora-darkBrown mb-8 text-center">Explore por Categorias</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              id={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
