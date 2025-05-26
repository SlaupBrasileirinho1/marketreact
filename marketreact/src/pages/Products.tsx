
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Mock data for products - com os novos produtos
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
    imageUrl: "https://images.unsplash.com/photo-1619641805634-b867f535071f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "EV Parts"
  },
  {
    id: 5,
    name: "Motor Elétrico 4000W",
    price: 2499.90,
    imageUrl: "https://images.unsplash.com/photo-1635348729202-1e3d118591a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "MotorEletric"
  },
  {
    id: 6,
    name: "Patinete Elétrico",
    price: 1899.90,
    imageUrl: "https://images.unsplash.com/photo-1698321202675-2f746ed0c533?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seller: "MoveEletric"
  },
  {
    id: 7,
    name: "Controlador 60A",
    price: 749.90,
    imageUrl: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
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

const categories = [
  { id: "todos", name: "Todos" },
  { id: "saude-bem-estar", name: "Saúde & Bem Estar" },
  { id: "relax", name: "Relax" },
  { id: "mobilidade", name: "Mobilidade" },
  { id: "baterias", name: "Baterias" },
  { id: "motores", name: "Motores Elétricos" },
  { id: "Casa ", name: "itens para Casa " },
  { id: "carros", name: "Carros Elétricos" },
  { id: "Pets ", name: "bem estar para Pets" },
];

const Products = () => {
  const [products, setProducts] = useState(mockProducts);  // Initialize with mockProducts
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [sortBy, setSortBy] = useState("relevance");

  // Filter and sort products
  useEffect(() => {
    let filteredProducts = [...mockProducts];

    // Apply search filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price_asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setProducts(filteredProducts);
  }, [searchTerm, selectedCategory, sortBy]);

  // Update the handleSearch function
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Add handleFilter function
  const handleFilter = () => {
    // This will trigger the useEffect above
    // You can add additional filtering logic here if needed
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-amora-light">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-amora-darkBrown mb-8">Produtos</h1>
          
          {/* Search and Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:flex-1">
                <Input 
                  placeholder="Buscar produtos..." 
                  value={searchTerm}
                  onChange={handleSearch}
                  className="border-amora-brown"
                />
              </div>
              <div className="w-full md:w-48">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-amora-brown">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-amora-brown">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevância</SelectItem>
                    <SelectItem value="price_asc">Preço: Menor para Maior</SelectItem>
                    <SelectItem value="price_desc">Preço: Maior para Menor</SelectItem>
                    <SelectItem value="newest">Mais Recentes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-amora-brown hover:bg-amora-darkBrown" onClick={handleFilter}>
                Filtrar
              </Button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-amora-brown text-amora-brown hover:bg-amora-brown hover:text-white">
                Anterior
              </Button>
              <Button variant="outline" className="border-amora-brown bg-amora-brown text-white">
                1
              </Button>
              <Button variant="outline" className="border-amora-brown text-amora-brown hover:bg-amora-brown hover:text-white">
                2
              </Button>
              <Button variant="outline" className="border-amora-brown text-amora-brown hover:bg-amora-brown hover:text-white">
                3
              </Button>
              <Button variant="outline" className="border-amora-brown text-amora-brown hover:bg-amora-brown hover:text-white">
                Próxima
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
