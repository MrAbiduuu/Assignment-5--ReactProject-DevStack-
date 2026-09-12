import { Suspense } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Technologies from "./Components/Technologies";
import type { dataTypes } from "./Types/Types";
import Footer from "./Components/Footer";

const TechFetch = async (): Promise<dataTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const TechPromise = TechFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies TechPromise={TechPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
