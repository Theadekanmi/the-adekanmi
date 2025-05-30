"use client"; 
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function PopupComponent() {
  return (
    <Popup 
      trigger={
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Open Popup
        </button>
      } 
      modal
    >
    {close => (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <button className="absolute top-2 right-4 text-gray-500 dark:text-gray-300" onClick={close}>×</button>

        <h2 className="text-2xl font-bold dark:text-white">Welcome!</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
         “Great design is more than how it looks — it's how it works, feels, and flows. Code is my language, design is my voice. I build digital experiences that speak, solve, and scale.”
        </p>

        <div className="mt-6 flex justify-center gap-4">
          
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={close}>
            Close
          </button>
        </div>
      </div>
    )}
    </Popup>
  );
}
