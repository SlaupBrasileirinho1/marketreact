import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  seller: string;
  description?: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // This is a mock product. In a real application, you would fetch this data from your API
  const product: Product = {
    id: Number(id),
    name: "Product Name",
    price: 99.99,
    imageUrl: "https://example.com/image.jpg",
    seller: "Seller Name",
    description: "Detailed product description goes here..."
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      seller: product.seller,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-amora-darkBrown">{product.name}</h1>
          <p className="text-gray-600">Vendido por: {product.seller}</p>
          <p className="text-2xl font-semibold">R$ {product.price.toFixed(2)}</p>
          <p className="text-gray-700">{product.description}</p>
          <Button className="w-full bg-amora-brown hover:bg-amora-darkBrown" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
