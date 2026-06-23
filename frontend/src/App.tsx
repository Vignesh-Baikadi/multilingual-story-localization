import {BrowserRouter, Routes, Route,} from "react-router-dom";

import StoryUploadPage from "./pages/StoryUploadPage";
import StoryLibraryPage from "./pages/StoryLibraryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<StoryUploadPage />}/>
        <Route path="/library"element={<StoryLibraryPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;