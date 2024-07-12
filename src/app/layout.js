import "./styles/globals.css";
import Navbar from './Components/navbar';
import styles from './styles/Layout.module.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
          <div className={styles.main}>
          <Navbar></Navbar>
            {children}
          </div>
      </body>
    </html>
  );
}