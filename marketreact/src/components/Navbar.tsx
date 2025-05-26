
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f18f9b01-cd87-4287-954e-57e0288c0554.png" 
              alt="Amora Logo" 
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amora-brown hover:text-amora-darkBrown font-medium transition-colors">
              Home
            </Link>
            <Link to="/produtos" className="text-amora-brown hover:text-amora-darkBrown font-medium transition-colors">
              Produtos
            </Link>
            <Link to="/contato" className="text-amora-brown hover:text-amora-darkBrown font-medium transition-colors">
              Contato
            </Link>
            <Link to="/sobre" className="text-amora-brown hover:text-amora-darkBrown font-medium transition-colors">
              Sobre
            </Link>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-amora-darkBrown">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            
            <button 
              className="md:hidden text-amora-darkBrown" 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link 
              to="/" 
              className="block text-amora-brown hover:text-amora-darkBrown font-medium transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/produtos"
              className="block text-amora-brown hover:text-amora-darkBrown font-medium transition-colors"
              onClick={toggleMenu}
            >
              Produtos
            </Link>
            <Link 
              to="/contato"
              className="block text-amora-brown hover:text-amora-darkBrown font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contato
            </Link>
            <Link 
              to="/sobre"
              className="block text-amora-brown hover:text-amora-darkBrown font-medium transition-colors"
              onClick={toggleMenu}
            >
              Sobre
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
