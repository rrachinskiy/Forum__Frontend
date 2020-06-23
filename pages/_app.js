import '../styles/reset.css';
import '../styles/default.css';
import Layout from '../components/MainLayout'

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)