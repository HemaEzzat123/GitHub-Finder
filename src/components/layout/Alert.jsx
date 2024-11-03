import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
function Alert() {
  const { alert, dispatch } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 flex-none mt-0.5 stroke-current"
          >
            <circle cx="12" cy="12" r="12" fill="#FECDD3" />
            <path
              stroke="#B91C1C"
              strokeWidth="2"
              d="M8 8l8 8M16 8l-8 8"
            ></path>
          </svg>
        )}

        <p className="flex-1 text-base font-semibold leading-7 text-gray-900">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
