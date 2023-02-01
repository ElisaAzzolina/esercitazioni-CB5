import "./../styles/globals.scss";
import MainLayout from "./../layouts/mainLayout/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
