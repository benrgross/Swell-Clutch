import React from "react";

function AuthLayout({ children }) {
  return (
    <div>
      <>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </div>
      </>
    </div>
  );
}

export default AuthLayout;
