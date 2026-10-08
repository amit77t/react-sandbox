
import './App.css'
import ProductCard from './components/ProductCard';

function App() {
  return (
    <main className="storefront">
      <header className="storefront-header">
        <span className="eyebrow">Curated tech</span>
        <h1 className="storefront-title">Products worth loving.</h1>
        <p className="storefront-intro">
          Thoughtful tech for your everyday. Find your next favorite.
        </p>
      </header>

      <section className="product-grid" aria-label="Available products">
        <ProductCard
          name="Wireless Headphones"
          description="Lose yourself in rich sound with comfortable, noise-cancelling audio."
          price={2499}
          rating="4.5"
          category="Audio"
          icon="🎧"
        />
        <ProductCard
          name="Smart Watch"
          description="Keep your health goals and daily essentials right on your wrist."
          price={3499}
          rating="3.9"
          category="Wearables"
          icon="⌚"
        />
        <ProductCard
          name="Gaming Mouse"
          description="Make every move count with precise tracking and a responsive feel."
          price={1499}
          rating="4.7"
          category="Gaming"
          icon="🖱️"
        />
      </section>
    </main>
  );
}

export default App
