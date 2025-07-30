import { useEffect, useState } from "react";
import SideBar from './assets/components/SideBar';
import NavBar from './assets/components/NavBar';
import MessagesSection from './assets/components/MessagesSection';
import InputBar from './assets/components/InputBar';
import { WebSocketProvider } from './assets/components/WebSocketContext';
const API_URL = import.meta.env.VITE_API_URL;
const NAME = import.meta.env.VITE_NAME;
const PASSWORD = import.meta.env.VITE_PASSWORD;

function App() {

  const [user, setUser] = useState(null);
  const [selectedDiscussion, setSelectedDiscussion] = useState("");
  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await fetch(`${API_URL}/authenticate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: NAME,
            password: PASSWORD
          }),
        });

        if (!response.ok) {
          throw new Error("Authentication failed");
        }

        const data = await response.json();
        setUser(data);
        console.log("Authenticated user:", data);
      } catch (error) {
        console.error("Authentication error:", error);
      }
    };

    authenticate(); 
  }, []);

  return (
    user ? (
      <WebSocketProvider user={user}>
        <div className="flex h-screen w-screen overflow-hidden">
          {/* Sidebar*/}
          <div className="w-1/4 h-full">
            <SideBar user={user} setSelectedDiscussion={setSelectedDiscussion} />
          </div>

          {/* Right Pane*/}
          <div className="flex flex-col flex-1 h-full">
            <NavBar discussion={selectedDiscussion} />
            <div className="flex flex-col flex-1 overflow-hidden">
              <MessagesSection discussion={selectedDiscussion} user={user}/>
              <InputBar discussion={selectedDiscussion} user={user} />
            </div>
          </div>
        </div>
      </WebSocketProvider>
    ) : null
  );
}

export default App;
