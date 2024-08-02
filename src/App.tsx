import { useRoutes } from "react-router-dom";
import routes from "@/routes";
import Navbar from "@/components/custom/NavBar/Navbar";
import BaseContainer from "@/components/custom/Container/BaseContainer";
import { Suspense } from "react";
function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Navbar />
      <BaseContainer>
        <Suspense fallback={<div>載入中...</div>}>{element}</Suspense>
      </BaseContainer>
    </>
  );
}

export default App;
