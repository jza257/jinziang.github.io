import { useState, useRef, useEffect } from 'react';
import './ArtworkCard.css';

export default function ArtworkCard({ artwork, index, onOpenLightbox }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNarrative, setShowNarrative] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      className={`artwork-card ${isVisible ? 'artwork-card--visible' : ''} ${showNarrative ? 'artwork-card--narrative-open' : ''}`}
      ref={cardRef}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* 画作图片容器 - 保持原始宽高比 */}
      <div
        className="artwork-card__image-wrapper"
        onClick={() => onOpenLightbox(artwork)}
      >
        {/* 加载占位 */}
        {!isLoaded && (
          <div className="artwork-card__placeholder">
            <div className="artwork-card__placeholder-shimmer" />
          </div>
        )}

        <img
          src={artwork.filename}
          alt={artwork.title}
          className={`artwork-card__image ${isLoaded ? 'artwork-card__image--loaded' : ''}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />

        {/* 悬停遮罩 */}
        <div className="artwork-card__hover-overlay">
          <span className="artwork-card__view-hint">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
            </svg>
          </span>
        </div>
      </div>

      {/* 画作信息 */}
      <div className="artwork-card__info">
        <div className="artwork-card__info-top">
          <h3 className="artwork-card__title">{artwork.title}</h3>
          <div className="artwork-card__meta">
            <span className="artwork-card__year">{artwork.year}</span>
            {artwork.medium && (
              <>
                <span className="artwork-card__meta-dot">·</span>
                <span className="artwork-card__medium">{artwork.medium}</span>
              </>
            )}
          </div>
        </div>

        <p className="artwork-card__description">{artwork.description}</p>

        {/* 互动叙述按钮 */}
        <button
          className="artwork-card__narrative-btn"
          onClick={(e) => {
            e.stopPropagation();
            setShowNarrative(!showNarrative);
          }}
          aria-expanded={showNarrative}
        >
          <span className="artwork-card__narrative-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d={showNarrative
                  ? "M2 2L12 12M12 2L2 12"
                  : "M7 1V13M1 7H13"}
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </span>
          <span className="artwork-card__narrative-label">
            {showNarrative ? '收起叙述' : '阅读叙述'}
          </span>
        </button>

        {/* 互动叙述面板 */}
        <div className={`artwork-card__narrative ${showNarrative ? 'artwork-card__narrative--open' : ''}`}>
          <div className="artwork-card__narrative-inner">
            <div className="artwork-card__narrative-quote-mark">"</div>
            <p className="artwork-card__narrative-text">{artwork.narrative}</p>
            <div className="artwork-card__narrative-line" />
          </div>
        </div>
      </div>
    </article>
  );
}