import { useEffect, useState } from 'react'
import NoInternet from './components/Common/NoInternet';
import Home from './pages/Home';
function App() {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    function changeStatus() {
      setStatus(navigator.onLine);
    }
    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);
    return () => {
      window.removeEventListener("online", changeStatus);
      window.removeEventListener("offline", changeStatus);
    };
  }, []);

  return (
    <>
      {status ? (
        <Home />
      ) : (
        <NoInternet/>
      )}
    </>
  );
}

export default App;