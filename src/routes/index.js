import React, { useEffect,Suspense} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'

const Business = React.lazy(() => import('../pages/Business'));

function AppRouter() {
    return (
        <Routes >
        <Route path="/"  element={
          <Suspense><Business /></Suspense>
       }></Route>
        </Routes>
    );
  }
  
  export default AppRouter;
    