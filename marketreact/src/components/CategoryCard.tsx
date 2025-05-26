
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
  count: number;
}

const CategoryCard = ({ id, name, imageUrl, count }: CategoryCardProps) => {
  return (
    <Link to={`/produtos/categoria/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amora-darkBrown/80 to-transparent flex items-end p-4">
            <div className="text-white">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm">{count} produtos</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
