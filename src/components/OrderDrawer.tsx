import React from 'react';
import { X, Trash2, Plus, Minus, Phone, ShoppingBag, Send } from 'lucide-react';
import { CartItem } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  const orderSummaryText = cartItems
    .map(
      (c) =>
        `• ${c.item.name}${c.selectedOption ? ` (${c.selectedOption})` : ''} x${c.quantity} - ₹${c.item.price * c.quantity}`
    )
    .join('\n');

  const whatsappMessage = encodeURIComponent(
    `Hello Yamama Shawaya! I would like to place a takeaway order:\n\n${orderSummaryText}\n\n*Estimated Total: ₹${totalAmount}*\n\nPlease confirm availability.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111218] border-l border-zinc-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Your Takeaway Order</h3>
                <p className="text-xs text-zinc-400">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600 mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-white">Your bag is empty</h4>
                <p className="text-xs text-zinc-400 max-w-xs mt-1">
                  Add Shawaya chicken, Al Faham, rice combos or Bene Tibi mojitos to prepare your order.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-zinc-400 pb-2">
                  <span>Selected Dishes</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:text-red-300 transition-colors font-medium"
                  >
                    Clear All
                  </button>
                </div>

                {cartItems.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">
                        {cartItem.item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        {cartItem.selectedOption && (
                          <span className="text-[11px] font-semibold text-red-400 bg-red-950/60 px-1.5 py-0.5 rounded border border-red-900/40">
                            {cartItem.selectedOption}
                          </span>
                        )}
                        <span className="text-xs text-zinc-400 tabular-nums">
                          ₹{cartItem.item.price} each
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, -1)}
                          className="p-1 text-zinc-400 hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.id, 1)}
                          className="p-1 text-zinc-400 hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(cartItem.id)}
                        className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer & Order Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-[#0c0d10] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-400">Estimated Total</p>
                  <p className="text-2xl font-black text-white tabular-nums">
                    <span className="text-red-500 mr-0.5">₹</span>
                    {totalAmount}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-zinc-500">Pay at restaurant</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Call directly to place order */}
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-950/60 border border-red-500/40"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Kitchen to Order: {RESTAURANT_INFO.phone}</span>
                </a>

                {/* WhatsApp Quick Link */}
                <a
                  href={`https://wa.me/919747362102?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 rounded-xl border border-emerald-800/60 transition-all"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Send Order via WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
