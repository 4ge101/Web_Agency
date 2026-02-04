import { useEffect, useState } from "react";
import "../styles/alert.css";

const Alert = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // show alert when page loads
  }, []);

  if (!show) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <h1>Welcome To Akesha Agency</h1>
        <p>Hi myself sami and iam founder and developer of this Agency. The page is not Completed fully so dont email.</p>

        <div className="alert-actions">
          <button
            className="cancel-btn"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
