import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

// Layouts
import HomeLayout from "./layout/Home";
import DashboardLayout from "./layout/Admin";

// Pages
// import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";

import Overview from "./pages/Dashboard/Overview";
import Events from "./pages/Dashboard/Events";
import CreateEvent from "./pages/Dashboard/Create_Edit_Event";
import Attendants from "./pages/Dashboard/Attendants";
import Profile from "./pages/Dashboard/Profile";
import EditProfile from "./pages/Dashboard/Profile_Settings";
// import VideoChat from "./pages/Dashboard/ChatRoom/VidoeChat";

import VideoApp from "./pages/Dashboard/ChatRoom/Video/index";
// import VideoChat from "./pages/Dashboard/ChatRoom/VidoeChat";
import Event_Details from "./pages/Dashboard/Events/Event_Details";
import Chats from "./pages/Dashboard/Chats/Chats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: routes.home, element: <VideoApp /> },
      // { path: routes.home, element: <Home /> },
      { path: routes.signup, element: <SignUp /> },
      { path: routes.signin, element: <SignIn /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: routes.dashboard, element: <Overview /> },
      { path: routes.events, element: <Events /> },
      { path: routes.events_details, element: <Event_Details /> },
      { path: routes.createEvent, element: <CreateEvent /> },
      { path: `${routes.attendants}/:id`, element: <Attendants /> },
      { path: routes.profile, element: <Profile /> },
      { path: routes.chats, element: <Chats /> },
      { path: routes.edit_profile, element: <EditProfile /> },
      { path: routes.videChat, element: <VideoApp /> },
    ],
  },
]);

export default router;
