import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import NotFound from "./pages/404";
import NotAuthorized from "./pages/403";
import { AppConfig } from "./AppConfig";
import { Suspense } from "react";
import AuthGuard from "./guard/AuthGuard";
import DashboardEmployee from "./layout/employee/DashboardEmployee";
import Sales from "./pages/employee/sales/Sales";
import Dashboard from "./pages/employee/dashboard/Dashboard";
import LoadingIndicator from "./common/loading";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App scroll-smooth md:scroll-auto">
      {loading && <LoadingIndicator />}

      <BrowserRouter basename={AppConfig.routerBase}>
        <Suspense>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/layout-guard-roles" element={<NotAuthorized />} />

            <Route path="/" element={<Navigate replace to="/admin/sales" />} />

            <Route
              path="/admin/sales"
              element={
                <AuthGuard>
                  <DashboardEmployee>
                    <Sales />
                  </DashboardEmployee>
                </AuthGuard>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <AuthGuard>
                  <DashboardEmployee>
                    <Dashboard />
                  </DashboardEmployee>
                </AuthGuard>
              }
            />
            {/* <Route
              path="/account"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Account />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/product"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Product />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/feedback"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Feedback />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/order"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Order />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/category-blog"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <CategoryBlog />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/category-product"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <CategoryProduct />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/contact"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Contact />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/banner"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Banner />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/blog"
              element={
                <AuthGuard>
                  <DashBoardLayout>
                    <Blog />
                  </DashBoardLayout>
                </AuthGuard>
              }
            />
            <Route
              path="/login"
              element={
                <GuestGuard>
                  <Login />
                </GuestGuard>
              }
            />
            <Route
              path="/register"
              element={
                <GuestGuard>
                  <Register />
                </GuestGuard>
              }
            /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
