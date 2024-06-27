"use client";
import { useEffect, useState } from 'react';
import { useCamera } from '../utils/camera';
import { useWindowSize } from '@tofusoup429/use-window-size';
import LensSharpIcon from '@mui/icons-material/LensSharp';
import LoopIcon from '@mui/icons-material/Loop';

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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "flex-start" }}>
            <div className="VideoAndCanvas">
                <video width={width} style={{ objectFit: 'contain' }} />
                <canvas style={{ opacity: 0 }} />
            </div>
            <LensSharpIcon
                id="CaptureImageButton"
                fontSize="large"
                color="secondary"
                style={{ width: '75px', height: "75px", position: 'absolute', top: height * 0.9, left: width * 0.5, transform: "translate(-50%, -50%)" }}
                onClick={captureImage}
            />
            <LoopIcon
                id="SwitchCameraButton"
                fontSize="large"
                color="secondary"
                style={{ position: 'absolute', top: '40px', left: '40px', transform: "translate(-50%, -50%)" }}
                onClick={switchCameraFacingMode}
            />
            {imageDatas.length > 0 &&
                <div id="Images" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: 'wrap', margin: '1%', padding: '1%' }}>
                    {
                        imageDatas.map((imageData, index) => (
                            imageData.length > 10 && <img key={index} src={imageData} width={width * 0.45} alt='NoImage' />
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default FullScreenMobileView;
