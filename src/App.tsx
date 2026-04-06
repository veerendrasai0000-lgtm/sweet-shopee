import React, { useState } from 'react'
type MenuItem = {
  name: string;
  price: string;
  unit?: string;
  image: string;
};

type Category = {
  key: string;
  title: string;
  subtitle: string;
  quantityLabel: string;
  items: MenuItem[];
};

const brandLogo = `data:image/svg+xml;utf8,
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="120" viewBox="0 0 420 120">
  <rect width="420" height="120" rx="28" fill="%23fff8ef"/>
  <rect x="8" y="8" width="404" height="104" rx="22" fill="none" stroke="%238b0000" stroke-width="3"/>
  <circle cx="58" cy="60" r="32" fill="%238b0000"/>
  <text x="58" y="69" text-anchor="middle" font-size="28" font-family="Georgia, serif" font-weight="700" fill="%23fff8ef">SS</text>
  <text x="108" y="50" font-size="30" font-family="Georgia, serif" font-weight="700" fill="%238b0000">Sweet Shopee</text>
  <text x="108" y="78" font-size="16" font-family="Arial, sans-serif" fill="%235a0f0f">Homemade Snacks • Pickles • Sweets</text>
</svg>`;

const makePlaceholderImage = (label: string, category: string): string => {
  const title = encodeURIComponent(label);
  const subtitle = encodeURIComponent(category);
  return `data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='900' height='900' viewBox='0 0 900 900'>\
  <defs>\
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
      <stop offset='0%' stop-color='%23fff8ef'/>\
      <stop offset='100%' stop-color='%23ead7c0'/>\
    </linearGradient>\
  </defs>\
  <rect width='900' height='900' rx='48' fill='url(%23g)'/>\
  <rect x='28' y='28' width='844' height='844' rx='36' fill='none' stroke='%238b0000' stroke-opacity='0.18' stroke-width='3'/>\
  <circle cx='450' cy='320' r='110' fill='%238b0000' fill-opacity='0.08'/>\
  <text x='450' y='325' text-anchor='middle' font-size='26' font-family='Georgia, serif' font-weight='700' fill='%238b0000'>Sweet Shopee</text>\
  <text x='450' y='430' text-anchor='middle' font-size='36' font-family='Georgia, serif' font-weight='700' fill='%235a0f0f'>${title}</text>\
  <text x='450' y='480' text-anchor='middle' font-size='22' font-family='Arial, sans-serif' fill='%238b0000'>${subtitle}</text>\
</svg>`;
};

const categories: Category[] = [
  {
    key: "snacks",
    title: "Snacks",
    subtitle: "Traditional crispy favourites",
    quantityLabel: "Quantity: 1 kg",
    items: [
      { name: "Janthikalu", price: "50 Dhs", image: makePlaceholderImage("Janthikalu", "Snacks") },
      { name: "Murukulu", price: "50 Dhs", image: makePlaceholderImage("Murukulu", "Snacks") },
      { name: "Chakinalu", price: "60 Dhs", image: makePlaceholderImage("Chakinalu", "Snacks") },
      { name: "Chakinalu (Karam)", price: "60 Dhs", image: makePlaceholderImage("Chakinalu (Karam)", "Snacks") },
      { name: "Karapusa", price: "50 Dhs", image: makePlaceholderImage("Karapusa", "Snacks") },
      { name: "Gavvalu (Salt)", price: "50 Dhs", image: makePlaceholderImage("Gavvalu (Salt)", "Snacks") },
      { name: "Bondi (Spicy)", price: "50 Dhs", image: makePlaceholderImage("Bondi (Spicy)", "Snacks") },
      { name: "Garelu / Chekkalu", price: "50 Dhs", image: makePlaceholderImage("Garelu / Chekkalu", "Snacks") },
    ],
  },
  {
    key: "pickles",
    title: "Pickles",
    subtitle: "Bold, rich, home-style flavours",
    quantityLabel: "Quantity: 1 kg",
    items: [
      { name: "Tomato", price: "50 Dhs", image: makePlaceholderImage("Tomato", "Pickles") },
      { name: "Mango", price: "50 Dhs", image: makePlaceholderImage("Mango", "Pickles") },
      { name: "Amla", price: "50 Dhs", image: makePlaceholderImage("Amla", "Pickles") },
      { name: "Lemon", price: "50 Dhs", image: makePlaceholderImage("Lemon", "Pickles") },
      { name: "Ginger", price: "60 Dhs", image: makePlaceholderImage("Ginger", "Pickles") },
      { name: "Garlic", price: "50 Dhs", image: makePlaceholderImage("Garlic", "Pickles") },
      { name: "Pandu Mirapakaya", price: "60 Dhs", image: makePlaceholderImage("Pandu Mirapakaya", "Pickles") },
      { name: "Chicken (Boneless)", price: "70 Dhs", image: makePlaceholderImage("Chicken (Boneless)", "Pickles") },
      { name: "Mutton", price: "120 Dhs", image: makePlaceholderImage("Mutton", "Pickles") },
      { name: "Prawns", price: "120 Dhs", image: makePlaceholderImage("Prawns", "Pickles") },
    ],
  },
  {
    key: "healthy-sweets",
    title: "Healthy Sweets",
    subtitle: "Traditional sweets with a premium touch",
    quantityLabel: "Quantity: 1 kg / Per piece where mentioned",
    items: [
      { name: "Bondi Laddu", price: "50 Dhs", image: makePlaceholderImage("Bondi Laddu", "Healthy Sweets") },
      { name: "Ravva Laddu", price: "50 Dhs", image: makePlaceholderImage("Ravva Laddu", "Healthy Sweets") },
      { name: "Kariyalu", price: "60 Dhs", image: makePlaceholderImage("Kariyalu", "Healthy Sweets") },
      { name: "Gavvalu", price: "50 Dhs", image: makePlaceholderImage("Gavvalu", "Healthy Sweets") },
      { name: "Sunnundalu", price: "60 Dhs", image: makePlaceholderImage("Sunnundalu", "Healthy Sweets") },
      { name: "Ariselu", price: "60 Dhs", image: makePlaceholderImage("Ariselu", "Healthy Sweets") },
      { name: "Burelu", price: "2 Dhs", unit: "Per Piece", image: makePlaceholderImage("Burelu", "Healthy Sweets") },
      { name: "Pooranpolu", price: "3 Dhs", unit: "Per Piece", image: makePlaceholderImage("Pooranpolu", "Healthy Sweets") },
      { name: "Nuvvula Laddu", price: "60 Dhs", image: makePlaceholderImage("Nuvvula Laddu", "Healthy Sweets") },
      { name: "Peanut Laddu", price: "60 Dhs", image: makePlaceholderImage("Peanut Laddu", "Healthy Sweets") },
    ],
  },
];

function BrandLogo({ large = false }: { large?: boolean }) {
  return (
    <img
      src={brandLogo}
      alt="Sweet Shopee logo"
      className={large ? "h-24 w-auto sm:h-28" : "h-14 w-auto sm:h-16"}
    />
  );
}

function ProductCard({ item }: { item: MenuItem }) {
  const orderUrl = useMemo(() => {
    const text = `Hi, I want to order ${item.name} from Sweet Shopee.`;
    return `https://wa.me/971504215933?text=${encodeURIComponent(text)}`;
  }, [item.name]);

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#eadfca] bg-white/60 shadow-[0_10px_30px_rgba(91,15,15,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(91,15,15,0.16)]">
      <div className="relative overflow-hidden">
        <img src={item.image} alt={item.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a1814]/35 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full bg-[#fff8ef]/95 px-3 py-1 text-xs font-semibold text-[#8b0000] shadow-md">
          {item.unit ? item.unit : "Per Kg"}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-[#5a0f0f]">{item.name}</h3>
          <span className="rounded-full bg-[#fff4ec] px-3 py-1 text-sm font-bold text-[#8b0000]">{item.price}</span>
        </div>
        <a
          href={orderUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-2xl bg-[#8b0000] px-4 py-3 text-center text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#6f0000]"
        >
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/45 md:hidden" onClick={onClose}>
      <div className="absolute right-0 top-0 h-full w-72 bg-[#fff8ef] p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-8 flex items-center justify-between">
          <BrandLogo />
          <button type="button" className="rounded-xl border border-[#eadfca] px-3 py-2 text-sm font-medium" onClick={onClose}>
            Close
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-base font-medium text-[#5a0f0f]">
          <a href="#home" onClick={onClose}>Home</a>
          <a href="#menu" onClick={onClose}>Menu</a>
          <a href="#contact" onClick={onClose}>Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default function LuxuryBakeryWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const allItemsCount = categories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#efe7d4] via-[#f7f1e7] to-[#e5dcc3] text-[#5a0f0f]">
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="sticky top-0 z-40 border-b border-[#eadfca] bg-[#f7f1e7]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center">
            <BrandLogo />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#home" className="transition hover:text-[#8b0000]">Home</a>
            <a href="#menu" className="transition hover:text-[#8b0000]">Menu</a>
            <a href="#contact" className="transition hover:text-[#8b0000]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971504215933?text=Hi%2C%20I%20want%20to%20order%20from%20Sweet%20Shopee."
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#8b0000] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 md:inline-block"
            >
              Order Now
            </a>
            <button type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)} className="rounded-xl border border-[#eadfca] bg-white/60 px-3 py-2 text-lg md:hidden">
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#eadfca] bg-white/60 px-4 py-2 text-sm font-medium text-[#8b0000] shadow-sm">
                Premium Homemade Taste in Dubai
              </div>
              <h1 className="font-serif text-5xl font-bold leading-tight text-[#8b0000] sm:text-6xl">Sweet Shopee</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5a0f0f]">
                A luxury-style homemade food website for authentic snacks, rich pickles, and traditional sweets — warm, elegant, and ready for direct WhatsApp orders.
              </p>
            </div>
            <div className="relative rounded-[32px] border border-[#eadfca] bg-white/55 p-5 shadow-[0_24px_60px_rgba(91,15,15,0.12)] backdrop-blur-xl">
              <div className="rounded-[28px] bg-gradient-to-br from-[#fffaf2] to-[#f4eadc] p-6">
                <div className="mb-6 flex justify-center">
                  <BrandLogo large />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    "Homemade recipes",
                    "Warm golden visuals",
                    "WhatsApp ordering",
                    `${allItemsCount} items listed`,
                  ].map((text) => (
                    <div key={text} className="rounded-2xl border border-[#eadfca] bg-white/70 p-4 text-center text-sm font-medium text-[#5a0f0f] shadow-sm">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="px-5 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b0000]">Menu</p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-[#8b0000]">Our Signature Collection</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5a0f0f]">
                All categories are now shown together, with separate sections for Snacks, Pickles, and Healthy Sweets.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {categories.map((category) => (
                <section key={category.key} className="rounded-[32px] border border-[#eadfca] bg-white/45 p-6 shadow-[0_18px_40px_rgba(91,15,15,0.08)] backdrop-blur-xl sm:p-8">
                  <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-[#8b0000]">{category.title}</h3>
                      <p className="mt-2 text-[#5a0f0f]">{category.subtitle}</p>
                    </div>
                    <span className="rounded-full bg-[#fff4ec] px-4 py-2 text-sm font-semibold text-[#8b0000]">{category.quantityLabel}</span>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {category.items.map((item) => (
                      <ProductCard key={`${category.key}-${item.name}`} item={item} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-[#eadfca] bg-white/50 p-8 shadow-[0_18px_40px_rgba(91,15,15,0.08)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b0000]">Contact</p>
              <h2 className="mt-3 font-serif text-4xl font-bold text-[#8b0000]">Let customers reach you fast.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#eadfca] bg-[#fff8ef] p-5 shadow-sm">
                  <p className="text-sm text-[#8b0000]">WhatsApp</p>
                  <p className="mt-1 font-semibold">+971 504215933</p>
                </div>
                <div className="rounded-3xl border border-[#eadfca] bg-[#fff8ef] p-5 shadow-sm">
                  <p className="text-sm text-[#8b0000]">Email</p>
                  <p className="mt-1 font-semibold">sweetshopee09@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-[28px] bg-gradient-to-br from-[#fffaf2] to-[#f3e8d8] p-6 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-[#8b0000]">Menu Summary</h3>
              <div className="mt-6 space-y-3 text-sm">
                <div className="rounded-2xl border border-[#eadfca] bg-white/70 p-4 shadow-sm">Snacks: 8 items</div>
                <div className="rounded-2xl border border-[#eadfca] bg-white/70 p-4 shadow-sm">Pickles: 10 items</div>
                <div className="rounded-2xl border border-[#eadfca] bg-white/70 p-4 shadow-sm">Healthy Sweets: 10 items</div>
                <div className="rounded-2xl border border-[#eadfca] bg-white/70 p-4 shadow-sm font-semibold">Total visible cards: {allItemsCount}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
