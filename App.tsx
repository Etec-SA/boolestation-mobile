import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routes";
import Forms from "./pages/Forms/Forms";
import cache from "./cache";

export default function App() {
  const [page, setPage] = useState<'Register' | 'Routes'>('Register');

  function changePage(pageName: typeof page) {
    setPage(pageName);
  }

  useEffect(() => {
    const checkToken = () => {
      const token = cache.getItem('token');
      if (token) {
        setPage('Routes');
      }
    };

    checkToken();
  }, []);

  return (
    <>
      {page === 'Register' ? <Forms redirectToApp={changePage} /> : null}
      {page === 'Routes' ? (
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      ) : null}
    </>
  );
}
