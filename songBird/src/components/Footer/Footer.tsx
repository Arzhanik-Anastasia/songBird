import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
          <img src="./assets/image/rss.svg" alt="logo RS-School" width="60" height="60" />
        </a>
        <p>Arzhanik Anastasia ©</p>
        <a href="https://github.com/Arzhanik-Anastasia" target="_blank" rel="noreferrer">
          <img src="./assets/image/github.png" alt="logo github" width="60" height="60" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
