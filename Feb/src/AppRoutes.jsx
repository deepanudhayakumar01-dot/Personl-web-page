import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Navbar";
import Wait from "./Wait";

import RoseDay from "./days/RoseDay";
import ProposeDay from "./days/ProposeDay";
import ChocolateDay from "./days/ChocolateDay";
import TeddyDay from "./days/TeddyDay";
import PromiseDay from "./days/PromiseDay";
import HugDay from "./days/HugDay";
import KissDay from "./days/KissDay";
import ValentineDay from "./days/ValentineDay";
import Footer from "./Footer";

/* ----------------------------------
   Route Guard (Future Days → Wait)
----------------------------------- */
function ProtectedDay({ unlockDate, children }) {
  const today = new Date().getDate();
  const day = Number(unlockDate);

  if (!day || isNaN(day)) {
    return <Wait unlockDate={7} />;
  }

  if (today < day) {
    return <Wait unlockDate={day} />;
  }

  return children;
}

/* ----------------------------------
   App Routes
----------------------------------- */
function AppRoutes() {
  const location = useLocation();

  const today = new Date();
  const isFeb14 = today.getMonth() === 1 && today.getDate() === 14;

  /* 🔥 FEB 14 OVERRIDE — ONLY VALENTINE PAGE */
  if (isFeb14) {
    return (
      <>
        <Navbar />

        <AnimatePresence mode="wait">
          <motion.div
            key="valentine"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            <Routes>
              <Route path="*" element={<ValentineDay />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </>
    );
  }

  /* NORMAL DAYS (FEB 7–13) */
  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route
              path="/rose"
              element={
                <ProtectedDay unlockDate={7}>
                  <RoseDay />
                </ProtectedDay>
              }
            />
            <Route
              path="/propose"
              element={
                <ProtectedDay unlockDate={8}>
                  <ProposeDay />
                </ProtectedDay>
              }
            />
            <Route
              path="/chocolate"
              element={
                <ProtectedDay unlockDate={9}>
                  <ChocolateDay />
                </ProtectedDay>
              }
            />
            <Route
              path="/teddy"
              element={
                <ProtectedDay unlockDate={10}>
                  <TeddyDay />
                </ProtectedDay>
              }
            />
            <Route
              path="/promise"
              element={
                <ProtectedDay unlockDate={11}>
                  <PromiseDay />
                </ProtectedDay>
              }
            />
            <Route
              path="/hug"
              element={
                <ProtectedDay unlockDate={12}>
                  <HugDay />
                </ProtectedDay>
              }
            />
            <Route
              path="/kiss"
              element={
                <ProtectedDay unlockDate={13}>
                  <KissDay />
                </ProtectedDay>
              }
            />

            <Route path="*" element={<Navigate to="/rose" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer/>
    </>
  );
}

export default AppRoutes;
