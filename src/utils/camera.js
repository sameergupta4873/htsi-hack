import { useEffect, useState } from 'react';

export const useCamera = () => {
    const [videoDem, setVideoDem] = useState({ w: 0, h: 0 });
    const [cameraFacingMode, setCameraFacingMode] = useState('environment');
    const [imageData, setImageData] = useState('');
    let video;
    let canvas;

    useEffect(() => {
        try {
            // Find video and canvas elements by tagNames
            video = document.getElementsByTagName('video')[0];
            canvas = document.getElementsByTagName('canvas')[0];
            let constraint = {
                video: {
                    width: { ideal: 4096 },
                    height: { ideal: 2160 },
                    facingMode: cameraFacingMode
                },
                audio: false
            };
            navigator.mediaDevices.getUserMedia(constraint).then((stream) => {
                video.setAttribute('playsinline', 'true');
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    // Get position of video tag
                    let { clientLeft, clientTop, videoWidth, videoHeight } = video;
                    setVideoDem({ w: videoWidth, h: videoHeight });
                    // Align canvas position with video position
                    canvas.style.position = 'absolute';
                    canvas.style.left = clientLeft + 'px';
                    canvas.style.top = clientTop + 'px';
                    canvas.setAttribute('width', videoWidth.toString());
                    canvas.setAttribute('height', videoHeight.toString());
                    video.play();
                };
            }).catch((e) => {
                console.log(e);
                alert(e);
            });
        } catch (e) {
            alert('error1: ' + e);
            console.log(e);
        }
    }, [cameraFacingMode]);

    const switchCameraFacingMode = () => {
        setCameraFacingMode(old => (old === 'environment') ? 'user' : 'environment');
    };

    const captureImage = async () => {
        // Take photo
        try {
            let video = document.getElementsByTagName('video')[0];
            let canvas = document.getElementsByTagName('canvas')[0];
            let context = canvas.getContext('2d');
            context?.drawImage(video, 0, 0, videoDem.w, videoDem.h);
            let imageData1 = canvas.toDataURL('image/png', 1.0);
            //console.log('imageData', imageData);
            setImageData(imageData1);
            return imageData1;
        } catch (e) {
            console.log(e);
            alert('Error in Capturing Image: ' + e);
            return '';
        }
    };

    return { cameraFacingMode, switchCameraFacingMode, imageData, captureImage };
};
