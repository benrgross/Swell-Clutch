import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
import { StoreProvider } from "../utils/GlobalState";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </Provider>
  );
}

export default MyApp;
