import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__seal">
          <span>内观</span>
        </div>
        <div className="footer__divider" />
        <p className="footer__text">
          每一笔，都是与自我的对话<br />
          每一画，都是心灵的印记
        </p>
        <div className="footer__line" />
        <p className="footer__copyright">
          内观画廊 · 在线艺术空间
        </p>
      </div>
    </footer>
  );
}