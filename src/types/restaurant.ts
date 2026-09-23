export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'popular' | 'mojito' | 'other';
  description: string;
  image?: string;
  options?: ('Full' | 'Half' | 'Quarter')[];
  tag?: string;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  selectedOption?: 'Full' | 'Half' | 'Quarter';
  quantity: number;
}
