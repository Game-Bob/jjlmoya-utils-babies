export type Lifestyle = 'saving' | 'balanced' | 'premium';
export type Feeding = 'breast' | 'formula' | 'mixed';
export type Childcare = 'home' | 'public' | 'private';

export interface BudgetItem {
  id: string;
  labelKey: string;
  category: 'before' | 'monthly' | 'milestones';
  basePrice: Record<Lifestyle, number>;
  isSecondHand: boolean;
  isWishlist: boolean;
  userPrice?: number;
}

export const DEFAULT_ITEMS: BudgetItem[] = [
  { id: 'nursery', labelKey: 'itemNursery', category: 'before', basePrice: { saving: 100, balanced: 500, premium: 1500 }, isSecondHand: false, isWishlist: false },
  { id: 'stroller', labelKey: 'itemStroller', category: 'before', basePrice: { saving: 200, balanced: 800, premium: 1500 }, isSecondHand: false, isWishlist: false },
  { id: 'hospital', labelKey: 'itemHospitalBag', category: 'before', basePrice: { saving: 30, balanced: 100, premium: 300 }, isSecondHand: false, isWishlist: false },
  { id: 'diapers', labelKey: 'itemDiapers', category: 'monthly', basePrice: { saving: 30, balanced: 50, premium: 80 }, isSecondHand: false, isWishlist: false },
  { id: 'pharmacy', labelKey: 'itemPharmacy', category: 'monthly', basePrice: { saving: 10, balanced: 30, premium: 60 }, isSecondHand: false, isWishlist: false },
  { id: 'daycare', labelKey: 'itemDaycare', category: 'monthly', basePrice: { saving: 0, balanced: 200, premium: 500 }, isSecondHand: false, isWishlist: false },
  { id: 'solidFood', labelKey: 'itemSolidFood', category: 'milestones', basePrice: { saving: 50, balanced: 150, premium: 400 }, isSecondHand: false, isWishlist: false },
  { id: 'clothesNext', labelKey: 'itemClothes', category: 'milestones', basePrice: { saving: 50, balanced: 150, premium: 300 }, isSecondHand: false, isWishlist: false },
  { id: 'highChair', labelKey: 'itemHighChair', category: 'milestones', basePrice: { saving: 20, balanced: 80, premium: 250 }, isSecondHand: false, isWishlist: false },
];

export function calculateItemPrice(item: BudgetItem, lifestyle: Lifestyle): number {
  if (item.isSecondHand || item.isWishlist) return 0;
  return item.userPrice !== undefined ? item.userPrice : item.basePrice[lifestyle];
}

export interface UserData {
  lifestyle: Lifestyle;
  feeding: Feeding;
  childcare: Childcare;
  items: BudgetItem[];
  diaperCalc: {
    price: number;
    units: number;
  };
}

export function getMonthExpense(userData: UserData, month: number): number {
  let total = 0;
  const { lifestyle, feeding, childcare, items } = userData;

  if (month === 0) {
    items.filter(i => i.category === 'before').forEach(i => {
      total += calculateItemPrice(i, lifestyle);
    });
  }

  if (month === 6) {
    items.filter(i => i.category === 'milestones').forEach(i => {
      total += calculateItemPrice(i, lifestyle);
    });
  }

  items.filter(i => i.category === 'monthly').forEach(i => {
    if (i.id === 'daycare' && childcare === 'home') return;
    total += calculateItemPrice(i, lifestyle);
  });

  if (feeding === 'formula') total += (lifestyle === 'premium' ? 100 : 60);
  if (feeding === 'mixed') total += (lifestyle === 'premium' ? 50 : 30);

  return total;
}
