import { Link, Routes, Route, Navigate } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes defined INSIDE Profile.jsx */}
      <Routes>
        <Route index element={<Navigate to="details" replace />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
