import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main class="container">{children}</main>
    </>
  );
}
