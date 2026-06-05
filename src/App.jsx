import { useState, useCallback, useRef, useEffect } from 'react';
import galleryData from './data/galleryData';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import CategoryHeader from './components/CategoryHeader';
import GalleryGrid from './components/GalleryGrid';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showHero, setShowHero] = useState(true);
  const [heroLeaving, setHeroLeaving] = useState(false);
  const [activeCategory, setActiveCategory] = useState(galleryData.categories[0].id);
  const [lightboxArtwork, setLightboxArtwork] = useState(null);
  const mainRef = useRef(null);

  // 进入画廊
  const handleEnterGallery = useCallback(() => {
    setHeroLeaving(true);
    setTimeout(() => {
      setShowHero(false);
    }, 1000);
  }, []);

  // 切换分类
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    // 滚动到画廊顶部
    if (mainRef.current) {
      const headerEl = mainRef.current.querySelector('.category-header');
      if (headerEl) {
        headerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  // 获取当前分类
  const currentCategory = galleryData.categories.find(c => c.id === activeCategory);

  // 打开灯箱
  const handleOpenLightbox = useCallback((artwork) => {
    setLightboxArtwork(artwork);
  }, []);

  // 关闭灯箱
  const handleCloseLightbox = useCallback(() => {
    setLightboxArtwork(null);
  }, []);

  // 灯箱导航
  const handlePrevLightbox = useCallback(() => {
    if (!lightboxArtwork || !currentCategory) return;
    const currentIndex = currentCategory.artworks.findIndex(a => a.id === lightboxArtwork.id);
    if (currentIndex > 0) {
      setLightboxArtwork(currentCategory.artworks[currentIndex - 1]);
    }
  }, [lightboxArtwork, currentCategory]);

  const handleNextLightbox = useCallback(() => {
    if (!lightboxArtwork || !currentCategory) return;
    const currentIndex = currentCategory.artworks.findIndex(a => a.id === lightboxArtwork.id);
    if (currentIndex < currentCategory.artworks.length - 1) {
      setLightboxArtwork(currentCategory.artworks[currentIndex + 1]);
    }
  }, [lightboxArtwork, currentCategory]);

  // 灯箱导航可用性
  const hasPrev = currentCategory && lightboxArtwork
    ? currentCategory.artworks.findIndex(a => a.id === lightboxArtwork.id) > 0
    : false;
  const hasNext = currentCategory && lightboxArtwork
    ? currentCategory.artworks.findIndex(a => a.id === lightboxArtwork.id) < currentCategory.artworks.length - 1
    : false;

  // 页面滚动时隐藏hero
  useEffect(() => {
    if (!showHero) return;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleEnterGallery();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showHero, handleEnterGallery]);

  return (
    <div className="app">
      {/* 首页沉浸式入口 */}
      {showHero && (
        <Hero
          onEnter={handleEnterGallery}
          className={heroLeaving ? 'leaving' : ''}
        />
      )}

      {/* 主画廊区域 */}
      <main className={`app__main ${!showHero ? 'app__main--visible' : ''}`} ref={mainRef}>
        {/* 分类导航 */}
        <CategoryNav
          categories={galleryData.categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* 分类头部 */}
        {currentCategory && (
          <CategoryHeader category={currentCategory} />
        )}

        {/* 画廊网格 */}
        {currentCategory && (
          <GalleryGrid
            artworks={currentCategory.artworks}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {/* 页脚 */}
        <Footer />
      </main>

      {/* 灯箱 */}
      {lightboxArtwork && (
        <Lightbox
          artwork={lightboxArtwork}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      )}
    </div>
  );
}

export default App;