import './Footer.css'

function Footer() {
    return (
        <footer className="footer-main">
            <div className="left">
                <a href="https://www.facebook.com" target="_blank"><img src="/images/fb.png" alt="Facebook logo"></img></a>
                <a href="https://x.com" target="_blank"><img src="/images/tw.png" alt="X logo"></img></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="/images/ig.png" alt="Instagram logo"></img></a>
            </div>
            <div>
                <img src="/images/logo.png" alt="Footer logo"></img>
            </div>
            <div>
                <p>
                    Desenvolvido por guimazito
                </p>
            </div>
        </footer>
    )
}

export default Footer