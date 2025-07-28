import SideBar from './assets/components/SideBar';
import NavBar from './assets/components/NavBar';
import MessagesSection from './assets/components/MessagesSection';
import InputBar from './assets/components/InputBar';


function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar (left) */}
      <div className="w-1/4 h-full">
        <SideBar />
      </div>

      {/* Right Pane (vertical layout) */}
      <div className="flex flex-col flex-1 h-full">
        <NavBar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <MessagesSection />
          <InputBar />
        </div>
      </div>
    </div>
  );
}

export default App;
