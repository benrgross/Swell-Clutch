import React from "react";
import Locate from "./Locate";

function AuthLayout({ children }) {
  return (
    <div>
      <>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
            <Locate />
          </main>
        </div>
      </>
    </div>
  );
}

export default AuthLayout;
