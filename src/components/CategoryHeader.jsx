import { useEffect, useRef } from 'react';
import './CategoryHeader.css';

export default function CategoryHeader({ category }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('category-header--visible');
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, [category.id]);

  return (
    <header className="category-header" ref={headerRef}>
      <div className="category-header__bg">
        <img
          src={category.cover}
          alt=""
          className="category-header__bg-img"
          loading="eager"
        />
        <div className="category-header__bg-overlay" />
      </div>

      <div className="category-header__content">
        <div className="category-header__index">
          <span className="category-header__index-num">
            {String(category.id === 'painting' ? 1 : category.id === 'printmaking' ? 2 : category.id === 'digital' ? 3 : 4).padStart(2, '0')}
          </span>
        </div>

        <h2 className="category-header__title">
          <span className="category-header__title-zh">{category.name}</span>
          <span className="category-header__title-en">{category.nameEn}</span>
        </h2>

        <p className="category-header__desc">{category.description}</p>

        <div className="category-header__meta">
          <span className="category-header__count">{category.artworks.length} 件作品</span>
          <span className="category-header__divider">·</span>
          <span className="category-header__period">
            {category.artworks.reduce((min, a) => Math.min(min, parseInt(a.year)), 9999)}—{category.artworks.reduce((max, a) => Math.max(max, parseInt(a.year)), 0)}
          </span>
        </div>
      </div>

      <div className="category-header__scroll-hint">
        <div className="category-header__scroll-line" />
      </div>
    </header>
  );
}