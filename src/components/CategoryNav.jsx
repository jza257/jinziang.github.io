import { useRef, useEffect } from 'react';
import './CategoryNav.css';

export default function CategoryNav({ categories, activeCategory, onCategoryChange }) {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
          navRef.current.classList.add('category-nav--scrolled');
        } else {
          navRef.current.classList.remove('category-nav--scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="category-nav" ref={navRef}>
      <div className="category-nav__inner">
        <div className="category-nav__brand">
          <span className="category-nav__brand-char">内</span>
          <span className="category-nav__brand-divider">·</span>
          <span className="category-nav__brand-char">观</span>
        </div>

        <div className="category-nav__tabs">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              className={`category-nav__tab ${activeCategory === cat.id ? 'category-nav__tab--active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="category-nav__tab-name">{cat.name}</span>
              <span className="category-nav__tab-name-en">{cat.nameEn}</span>
              <span className="category-nav__tab-count">{cat.artworks.length}</span>
              <span className="category-nav__tab-line" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}