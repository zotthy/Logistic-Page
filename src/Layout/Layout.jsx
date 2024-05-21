

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// eslint-disable-next-line react/prop-types
function Layout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
export default Layout;