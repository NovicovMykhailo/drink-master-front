import { Suspense, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

// components
import { LayoutSpiner } from '../Spinner/LayoutSpinner';
import MainContainer from './MainContainer/MainContainer';
import Header from 'components/SharedLayout/Header/Header';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import UserBar from './UserBar/UserBar';
import Footer from 'components/SharedLayout/Footer/Footer';
import NavBarFooter from './NavBar/NavBarFooter';
import Socials from './Socials/Socials';
import ModalAuth from 'components/Modal/ModalAuth';
import Modal from '../Modal/Modal';
import ModalCard from 'components/Modal/ModalCard';
import ModalTermsCard from 'components/Modal/ModalTermsCard';
import ModalPolicyCard from 'components/Modal/ModalPolicyCard';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import BurgerMenuIcon from './BurgerMenu/BurgerMenuIcon';
import SubscribeForm from './SubscribeForm/SubscribeForm';
// hooks
import useAuth from 'hooks/useAuth';
// styles
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const [modalAuthActive, setModalauthActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [policyModal, setPolicyModal] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [isDesctop, setIsDesctop] = useState(true); //визначає ширину екрану
  const [burgerMenuActive, setBurgerMenuActive] = useState(false); //чи активне burger menu

  // useEffect для слідкування за зміною роута
  useEffect(() => {
    setBurgerMenuActive(false);
  }, [location]);

  // useEffect(()=>{

  // })

  //слідкує за шириною екрану і її зміни
  useEffect(() => {
    const handleWindowResize = () => {
      setIsDesctop(window.innerWidth >= 1440);

      if (window.innerWidth >= 1440) {
        setBurgerMenuActive(false);
      }
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return isLoggedIn ? (
    <MainContainer>
      {modalAuthActive && <ModalAuth active={modalAuthActive} setActive={setModalauthActive} />}
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <ModalCard closePopup={setModalauthActive} />
        </Modal>
      )}
      {policyModal && (
        <Modal active={policyModal} setActive={setPolicyModal}>
          <ModalPolicyCard onMount={policyModal} />
        </Modal>
      )}
      {termsModal && (
        <Modal active={termsModal} setActive={setTermsModal}>
          <ModalTermsCard onMount={termsModal} />
        </Modal>
      )}
      {isDesctop ? (
        <Header>
          <Logo />
          <NavBar />
          <UserBar toggleModal={setModalauthActive} />
        </Header>
      ) : (
        <Header>
          <Logo />
          <UserBar toggleModal={setModalauthActive} />
          <BurgerMenuIcon onClick={() => setBurgerMenuActive(!burgerMenuActive)} active={burgerMenuActive} />
          <BurgerMenu burgerMenuActive={burgerMenuActive} />
        </Header>
      )} 

      <main className={css.mainFrame}>
        <Suspense fallback={<LayoutSpiner/>}>
          <Outlet />
        </Suspense>
      </main>
      
      <Footer>
        <div className={css.footerUpperContainer}>
          <div className={css.leftSideBar}>
            <div>
                 <Logo />
            <Socials />
            </div>
            <NavBarFooter />
             </div>
          <SubscribeForm />
        </div>
        <div className={css.footerBottomContainer}>
          <Link className={css.links} to={"https://drink-master-back-end.onrender.com/api-docs/"} target="blank">©2023 Drink Master. All rights reserved.</Link>
          <div className={css.rightSide}>
            <Link className={css.links} onClick={() => setPolicyModal(true)}>
              Privacy Policy
            </Link>
            <Link className={css.links} onClick={() => setTermsModal(true)}>
              Terms of Service
            </Link>
          </div>
        </div>
      </Footer>
    </MainContainer>
  ) : (
  

  <main className={css.mainStyles}>
    <Suspense fallback={<LayoutSpiner />}>
      <Outlet />
    </Suspense>
  </main>
);
};