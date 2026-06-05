import { useEffect, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ artwork, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!artwork) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__backdrop" />

      <div className="lightbox__container" onClick={(e) => e.stopPropagation()}>
        {/* 关闭按钮 */}
        <button className="lightbox__close" onClick={onClose} aria-label="关闭">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {/* 导航按钮 */}
        {hasPrev && (
          <button className="lightbox__nav lightbox__nav--prev" onClick={onPrev} aria-label="上一幅">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        )}

        {hasNext && (
          <button className="lightbox__nav lightbox__nav--next" onClick={onNext} aria-label="下一幅">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        )}

        {/* 图片区域 - 保持原始宽高比 */}
        <div className="lightbox__image-area">
          <img
            src={artwork.filename}
            alt={artwork.title}
            className="lightbox__image"
          />
        </div>

        {/* 信息面板 */}
        <div className="lightbox__info">
          <div className="lightbox__info-inner">
            <h3 className="lightbox__title">{artwork.title}</h3>

            <div className="lightbox__meta">
              {artwork.year && <span className="lightbox__year">{artwork.year}</span>}
              {artwork.medium && (
                <>
                  <span className="lightbox__meta-dot">·</span>
                  <span className="lightbox__medium">{artwork.medium}</span>
                </>
              )}
            </div>

            <div className="lightbox__divider" />

            <p className="lightbox__description">{artwork.description}</p>

            <div className="lightbox__narrative-section">
              <div className="lightbox__narrative-label">叙述</div>
              <p className="lightbox__narrative-text">{artwork.narrative}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}