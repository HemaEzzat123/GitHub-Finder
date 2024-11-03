import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import User from "./Pages/User";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <main className="w-[90%] mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
