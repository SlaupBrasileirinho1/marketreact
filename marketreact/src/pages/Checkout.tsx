import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleConfirmPurchase = () => {
    // In a real app, here you would send order data to backend
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amora-darkBrown mb-4">Pedido Confirmado!</h1>
        <p>Obrigado pela sua compra, {name}! Seu pedido está sendo processado.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amora-darkBrown mb-8">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Itens no Carrinho</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center mb-4">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Vendido por: {item.seller}</p>
                    <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantidade:</label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="w-16 border border-gray-300 rounded px-2 py-1"
                      />
                      <Button variant="destructive" className="ml-4" onClick={() => removeFromCart(item.id)}>
                        Remover
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-lg">Total: R$ {totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Informações para o Pedido</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleConfirmPurchase(); }}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-medium">Nome Completo</label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-1 font-medium">Endereço</label>
                <Input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block mb-1 font-medium">Método de Pagamento</label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1"
                >
                  <option value="credit_card">Cartão de Crédito</option>
                  <option value="boleto">Boleto</option>
                  <option value="pix">PIX</option>
                </select>
              </div>
              <Button type="submit" className="bg-amora-brown hover:bg-amora-darkBrown w-full">
                Confirmar Compra
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
