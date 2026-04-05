export interface BrandSize {
  label: string;
  age: number;
  height: number;
  weight: number;
  chest: number;
  waist: number;
}

export interface Brand {
  id: string;
  name: string;
  fit: string;
  sizes: BrandSize[];
}

export function findBestSize(brand: Brand, height: number, weight: number): BrandSize {
  let best = brand.sizes[0]!;
  let diff = Infinity;
  brand.sizes.forEach((s) => {
    const d = Math.abs(s.height - height) + Math.abs(s.weight - weight) * 8;
    if (d < diff) {
      diff = d;
      best = s;
    }
  });
  return best;
}

export function toImperialHeight(cm: number): string {
  return (cm / 2.54).toFixed(1);
}

export function toImperialWeight(kg: number): string {
  return (kg * 2.20462).toFixed(1);
}

export function buildShareUrl(height: number, weight: number, brandId: string): string {
  const params = new URLSearchParams();
  params.set('h', height.toString());
  params.set('w', weight.toString());
  params.set('b', brandId);
  return `${window.location.pathname}?${params.toString()}`;
}
