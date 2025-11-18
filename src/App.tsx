import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Homepage from "./pages/Homepage";
import AppLayout from "./components/AppLayout";
import NotFoundPage from "./pages/NotFoundPage";
import Students from "./pages/Students";
import Department from "./pages/Department";
import Courses from "./pages/Courses";
import CreateStudent from "./components/CreateStudent";
import Registrations from "./pages/Registrations";
import CreateDepartment from "./components/CreateDepartment";
import CreateCourse from "./components/CreateCourse";
import CreateRegistration from "./components/CreateRegistration";
import EditStudent from "./components/EditStudent";
import EditDepartment from "./components/EditDepartment";
import EditCourse from "./components/EditCourse";
import EditRegistration from "./components/EditRegistration";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/add-student" element={<CreateStudent />} />
            <Route path="/students/edit/:id" element={<EditStudent />} />
            <Route path="/departments" element={<Department />} />
            <Route
              path="/departments/add-department"
              element={<CreateDepartment />}
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/add-course" element={<CreateCourse />} />
            <Route path="/registrations" element={<Registrations />} />
            <Route
              path="/registrations/add-registration"
              element={<CreateRegistration />}
            />
            <Route path="/departments/edit/:id" element={<EditDepartment />} />
            <Route path="/courses/edit/:id" element={<EditCourse />} />
            <Route
              path="/registrations/edit/:studentID/:courseID"
              element={<EditRegistration />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
