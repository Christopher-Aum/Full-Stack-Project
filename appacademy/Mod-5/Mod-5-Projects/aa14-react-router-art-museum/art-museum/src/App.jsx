import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from "./components/GalleryView";
import harvardArt from "./data/harvardArt";

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element:
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
            </p>
          </>
      },
      {
        path: "*",
        element: <h2>Page Not Found</h2>
      },
      {
        path: "/galleries/:galleryId",
        element: <GalleryView galleries={harvardArt.records}/>
      }
    ]
  }
]);
// console.log(harvardArt);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
