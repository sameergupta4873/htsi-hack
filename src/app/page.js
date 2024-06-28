"use client";
import { useEffect, useState } from "react";
import { useCamera } from "../utils/camera";
import { useWindowSize } from "@tofusoup429/use-window-size";
import LensSharpIcon from "@mui/icons-material/LensSharp";
import LoopIcon from "@mui/icons-material/Loop";
import Typewriter from "typewriter-effect";
import Markdown from 'react-markdown';

let markdown = "This is a Hilti TE 6-CL rotary hammer.  It is a powerful tool used for drilling, hammering, and chiseling concrete, brick, and other hard materials.\n\nHere are some general instructions on how to use a rotary hammer:\n\n1. **Read the manual:** Before using the tool, carefully read the manufacturer's instructions and safety precautions.\n2. **Choose the right bit:** Select a drill bit or chisel that is appropriate for the material you are working with.\n3. **Set the mode:** Rotary hammers have different modes, such as drilling, hammering, and chiseling. Choose the mode that is right for your task.\n4. **Secure the work piece:** Make sure the work piece is securely clamped or supported.\n5. **Start the tool:** Hold the tool firmly and start it slowly.\n6. **Apply pressure:** As the tool rotates, apply gentle pressure to guide the bit.\n7. **Stop the tool:** When you are finished, release the trigger and let the tool come to a complete stop before setting it down.\n\nRemember to always wear safety glasses, ear protection, and gloves when using a rotary hammer. \n"

const FullScreenMobileView = () => {
  const { width, height } = useWindowSize(); // get window width and height as every time screen resized.
  const { captureImage, imageData, switchCameraFacingMode } = useCamera(); // customHook that contains logics
  const [imageDatas, setImageDatas] = useState([]); // capture imageUrls are saved in this state.

  useEffect(() => {
    // whenever imageData changes, which means captureImage is executed, imageUrl is cumulated in the array.
    if (imageData) {
      setImageDatas([...imageDatas, imageData]);
    }
  }, [imageData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "flex-start",
      }}
    >
      {imageDatas.length > 0 && <div className="fixed top-0 left-0 w-[100vw] h-[8vh] shadow-lg bg-white flex justify-start pl-5">
        <img src="/images.png" alt="logo" className="w-[8vh] h-[8vh] object-contain" /> 
      </div>}
      {imageDatas.length <= 0 && (
        <div className="VideoAndCanvas">
          <video width={width} style={{ objectFit: "contain" }} />
          <canvas style={{ opacity: 0 }} />
        </div>
      )}
      {imageDatas.length <= 0 && (
        <div className="absolute top-[35vh] left-[50vw] transform translate-x-[-50%] translate-y-[-50%] w-[100vw] h-[50vh] flex flex-col justify-between items-center">
          <div className="w-[100vw] h-[10vh] px-[10vw] flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-[6rem] h-[6rem] transform -rotate-[135deg]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-[6rem] h-[6rem] transform -rotate-[45deg]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="w-[100vw] h-[10vh] px-[10vw] flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-[6rem] h-[6rem] transform rotate-[135deg]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-[6rem] h-[6rem] transform rotate-[45deg]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      )}
      {imageDatas.length <= 0 && (
        <button
          className={`w-[75px] h-[75px] absolute bottom-[5vh] left-[50vw] transform translate-x-[-50%] translate-y-[-50%] border-4 bg-transparent border-white rounded-full flex justify-center items-center p-1`}
          onClick={captureImage}
        >
          <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>
        </button>
      )}
      {imageDatas.length > 0 && (
        <div id="Images" className="flex items-center w-full h-[26vh] pl-5 pt-32">
          {imageDatas.map(
            (imageData, index) =>
              imageData.length > 10 && (
                <img
                  key={index}
                  src={imageData}
                  width={300}
                  className="w-[70vw] h-[40vh] object-contain"
                  alt="NoImage"
                />
              )
          )}
        </div>
      )}
      {imageDatas.length > 0 && (
        <div className="px-5 mx-5 mt-14 my-5 bg-slate-50 border py-5 rounded-lg">
          <Markdown>{markdown}</Markdown>
        </div>
      )}
    </div>
  );
};

export default FullScreenMobileView;
