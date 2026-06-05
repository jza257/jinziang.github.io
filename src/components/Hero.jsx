import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero({ onEnter, className = '' }) {
  const [phase, setPhase] = useState(0); // 0: 初始, 1: 标题显现, 2: 副标题, 3: 可进入

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setPhase(3), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className={`hero ${phase >= 3 ? 'hero--ready' : ''} ${className}`}>
      {/* 水墨纹理背景 */}
      <div className="hero__ink-bg">
        <div className="hero__ink-blob hero__ink-blob--1" />
        <div className="hero__ink-blob hero__ink-blob--2" />
        <div className="hero__ink-blob hero__ink-blob--3" />
      </div>

      {/* 装饰性线条 */}
      <div className="hero__deco-line hero__deco-line--left" />
      <div className="hero__deco-line hero__deco-line--right" />

      {/* 主内容 */}
      <div className="hero__content">
        <h1 className={`hero__title ${phase >= 1 ? 'hero__title--visible' : ''}`}>
          <span className="hero__title-line hero__title-line--1">内</span>
          <span className="hero__title-line hero__title-line--2">观</span>
        </h1>

        <div className={`hero__subtitle ${phase >= 2 ? 'hero__subtitle--visible' : ''}`}>
          <span className="hero__subtitle-line" />
          <p className="hero__subtitle-text">金子昂作品</p>
          <span className="hero__subtitle-line" />
        </div>

        <p className={`hero__desc ${phase >= 2 ? 'hero__desc--visible' : ''}`}>
          我在现实边缘捡拾碎片<br />
          拼凑成你看到的梦
        </p>

        <button
          className={`hero__enter-btn ${phase >= 3 ? 'hero__enter-btn--visible' : ''}`}
          onClick={onEnter}
          aria-label="进入画廊"
        >
          <span className="hero__enter-text">进入画廊</span>
          <span className="hero__enter-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4L10 16M10 16L16 10M10 16L4 10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
        </button>
      </div>

      {/* 底部装饰 */}
      <div className={`hero__bottom-deco ${phase >= 3 ? 'hero__bottom-deco--visible' : ''}`}>
        <span className="hero__scroll-hint">向下探索</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}