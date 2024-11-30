import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#F5F5F5',
  },
  main: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#FFFFFF',
    color: '#1F1F1F',
  },
};

export default Layout;
