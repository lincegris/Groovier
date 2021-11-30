import Menu from "../Components/Menu/Menu";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import Buy from "../Pages/BuyPage";
import Checkout from "../Pages/Checkout";
import Detail from "../Pages/DetailPage";
import FAQ from "../Pages/FAQPage";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import ProductsPage from "../Pages/ProductsPage";
import SignIn from "../Pages/SigninPage";
import Travel from "../Pages/TravelPage";
import NotFound from "../Pages/NotFound";
import Footer from "../Components/Footer";
import AuthContext from "../Context/AuthContext";


export default function Public() {
    return (
        <>
            <Menu />        
            <Container>
                <AuthContext.Consumer>
                    {context =>
                        <Routes>
                            <Route path="/buy" element={< Buy />} />
                            <Route path="/checkout/:id" element={< Checkout />} />
                            <Route path="/product/:id" element={< Detail />} />
                            <Route path="/faq" element={< FAQ />} />
                            <Route path="/login" element={< Login />} />
                            <Route path="/products" element={< ProductsPage/>} />
                            <Route path="/signin" element={< SignIn />} />
                            <Route path="/travel" element={< Travel />} />
                            <Route path="/" exact index element={< HomePage />} />
                            <Route path="*" element={<NotFound />}/>
                        </Routes>
                    }
                </AuthContext.Consumer>
            </Container>
            <Footer/>
        </>
    );
  };