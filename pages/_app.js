import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
import { StoreProvider } from "../utils/GlobalState";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </StoreProvider>
  );
}

export default MyApp;
