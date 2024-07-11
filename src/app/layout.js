import "./styles/globals.css";
import Navbar from './Components/navbar';
import styles from './styles/Layout.module.css';


export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <div className={styles.container}>
          <Navbar/>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}