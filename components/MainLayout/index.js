import Header from '../Header';
import Toolbar from '../Toolbar';
import MobileToolbar from '../MobileToolbar';
import Breadcrumb from '../Breadcrumb';
import Footer from '../Footer';

import styles from './mainlayout.module.css';

const Layout = (props) => {
    return (
        <div className={styles.wrap}>
            <MobileToolbar />
            <Header />
            <main>
                <Toolbar />
                <Breadcrumb path={props.path} />
                <div className={styles.main}>
                    {props.children}
                </div>
                <Breadcrumb path={props.path} />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;