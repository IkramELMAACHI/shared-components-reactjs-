// import { useState } from "react";
import "./App.css";
import { Button } from "@startupsquare/ds";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="p-10">
      <div className="relative flex text-blue-gray-500 flex-col justify-center overflow-hidden bg-red-50 py-20 sm:py-12 rounded-xl shadow-lg">
        <div className="flex space-x-20 px-16 py-10">
          <div className="flex flex-col space-y-8 w-1/2 text-left">
            <div className="flex space-x-8">
              {["Project & Tasks", "Chat", "Goals", "Views"].map((tab) => {
                return (
                  <span
                    className={`${
                      tab === "Project & Tasks"
                        ? "border-red-400"
                        : "border-transparent"
                    } border-b-2 font-medium py-1 text-blue-gray-800 text-md capitalize`}
                  >
                    {tab}
                  </span>
                );
              })}
            </div>
            <h2 className="text-blue-gray-700 text-4xl font-bold">
              Simplify work and get more done.
            </h2>
            <p className="text-blue-gray-500">
              Plan, track, and manage any type of work with project management
              that flexes to your team's needs.
            </p>
            <div className="flex">
              <Button intent="danger">Get Started</Button>
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <video
              autoPlay={true}
              className="lazy loaded"
              loop={true}
              height="650"
              muted={true}
              playsInline={true}
              poster="https://clickup.com/images/poster-images/videos/main/views.png"
              width="980"
            >
              <source
                data-src="https://clickup.com/videos/main/views.mp4"
                type="video/mp4"
                src="https://clickup.com/videos/main/views.mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
