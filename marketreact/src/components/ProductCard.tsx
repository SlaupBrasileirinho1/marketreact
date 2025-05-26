
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  seller: string;
}

const ProductCard = ({ id, name, price, imageUrl, seller }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <Link to={`/produtos/${id}`}>
          <h3 className="font-medium text-lg text-amora-darkBrown truncate hover:text-amora-brown transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1">Vendido por: {seller}</p>
        <p className="font-semibold text-lg mt-2">
          R$ {price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-amora-brown hover:bg-amora-darkBrown">
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
