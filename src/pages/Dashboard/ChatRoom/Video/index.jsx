import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { FiVideo, FiVideoOff, FiMic, FiMicOff } from "react-icons/fi";
// import VideoMp from "@/assets/Uploading Files to MongoDB With GridFS (Node.js App).mp4";

// WebRTC configuration
const configuration = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Initialize RTC Connection between client and server
const socket = io("http://localhost:3001", {
  transports: ["websocket"],
});

let peerConnection = null;
let deviceLocalStream = null;

const VideoApp = () => {
  const [streams, setStreams] = useState([]);
  const deviceLocalVideoRef = useRef(null);

  useEffect(() => {
    socket.on("message", (event) => {
      if (!deviceLocalStream) {
        console.log("not ready yet");
        return;
      }

      switch (event.type) {
        case "offer":
          handleOffer(event);
          break;
        case "answer":
          handleAnswer(event);
          break;
        case "candidate":
          handleCandidate(event);
          break;
        case "ready":
          makeCall();
          break;
        case "end":
          if (peerConnection) {
            hangup();
          }
          break;
        default:
          console.log("unhandled:", event);
          break;
      }
    });

    return () => {
      socket.off("message");
    };
  }, [deviceLocalStream]);

  //Host Call Function
  // THIS FUNCTION ADDS A USER TO THE CALL ON THE CLIENT SIDE
  const makeCall = async () => {
    try {
      peerConnection = new RTCPeerConnection(configuration); // Create New User Connection on the client
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          const message = {
            type: "candidate",
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
          };
          socket.emit("message", message);
        }
      };
      peerConnection.ontrack = (event) => {
        const newStream = event.streams[0];
        setStreams((prevStreams) => {
          // Avoid adding duplicate streams
          if (!prevStreams.find((stream) => stream.id === newStream.id)) {
            return [...prevStreams, newStream];
          }
          return prevStreams;
        });
      };

      if (deviceLocalStream) {
        deviceLocalStream.getTracks().forEach((track) => {
          peerConnection.addTrack(track, deviceLocalStream);
        });
      }
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      socket.emit("message", { type: "offer", sdp: offer.sdp });
    } catch (error) {
      console.error("Error creating call:", error);
    }
  };

  // Join Call function
  // THIS FUNCTION ADDS A USER TO THE CALL ON THE SERVER SIDE AND TRANSMIT MESSAGES BETWEEN USERS ON THE CALL
  const handleOffer = async (offer) => {
    try {
      peerConnection = new RTCPeerConnection(configuration); // Create New User Connection on the server
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          const message = {
            type: "candidate",
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid, //Seassion Description Protocol Media Id
            sdpMLineIndex: event.candidate.sdpMLineIndex, // Seassion Description Protocol Media Line Index
          };
          socket.emit("message", message);
        }
      };
      // Get Peer Remote Streams
      peerConnection.ontrack = (event) => {
        const newStream = event.streams[0];
        setStreams((prevStreams) => {
          // Avoid adding duplicate streams
          if (!prevStreams.find((stream) => stream.id === newStream.id)) {
            return [...prevStreams, newStream];
          }
          return prevStreams;
        });
      };
      // Get and Add Current User Local Stream to the Peer Remote Stream
      if (deviceLocalStream) {
        deviceLocalStream.getTracks().forEach((track) => {
          peerConnection.addTrack(track, deviceLocalStream);
        });
      }
      await peerConnection.setRemoteDescription(offer);
      const answer = await peerConnection.createAnswer();
      socket.emit("message", { type: "answer", sdp: answer.sdp });
      await peerConnection.setLocalDescription(answer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswer = async (answer) => {
    if (!peerConnection) {
      console.log("No one has joined the meeting");
      return;
    }
    try {
      await peerConnection.setRemoteDescription(answer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCandidate = async (candidate) => {
    try {
      if (!peerConnection) {
        console.log("No one has joined the meeting");
        return;
      }
      if (candidate.candidate) {
        await peerConnection.addIceCandidate(candidate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hangup = async () => {
    if (peerConnection) {
      peerConnection.close();
      peerConnection = null;
    }
    if (deviceLocalStream) {
      deviceLocalStream.getTracks().forEach((track) => track.stop());
      deviceLocalStream = null;
    }
    socket.emit("message", { type: "end" });
  };
  const startCall = async () => {
    try {
      // Attempt to use the front camera by default, if available
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDeviceId =
        devices.find(
          (device) =>
            device.kind === "videoinput" && device.label.includes("front")
        )?.deviceId ||
        devices.find((device) => device.kind === "videoinput")?.deviceId;
      const audioDeviceId = devices.find(
        (device) => device.kind === "audioinput"
      )?.deviceId;

      // Request media from the selected devices
      deviceLocalStream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: videoDeviceId },
        audio: { deviceId: audioDeviceId, echoCancellation: true },
      });

      if (deviceLocalVideoRef.current) {
        deviceLocalVideoRef.current.srcObject = deviceLocalStream;
      }
      socket.emit("message", { type: "ready" });
    } catch (error) {
      console.log(error);
      if (error.name === "NotAllowedError") {
        alert(
          "Permission denied. Please enable access to the camera and microphone."
        );
      } else if (error.name === "NotFoundError") {
        alert(
          "No camera or microphone found. Please connect a camera and/or microphone."
        );
      } else if (error.name === "NotReadableError") {
        alert(
          "Unable to access camera and/or microphone. It may be in use by another application."
        );
      } else {
        alert(
          "Unable to access camera and/or microphone. Please check permissions and device settings."
        );
      }
    }
  };

  // const startCall = async () => {
  //   try {
  //     // Attempt to use the front camera by default, if available
  //     const devices = await navigator.mediaDevices.enumerateDevices();
  //     const videoDeviceId =
  //       devices.find(
  //         (device) =>
  //           device.kind === "videoinput" && device.label.includes("front")
  //       )?.deviceId ||
  //       devices.find((device) => device.kind === "videoinput")?.deviceId;
  //     const audioDeviceId = devices.find(
  //       (device) => device.kind === "audioinput"
  //     )?.deviceId;

  //     // Request media from the selected devices
  //     deviceLocalStream = await navigator.mediaDevices.getUserMedia({
  //       video: { deviceId: videoDeviceId },
  //       audio: { deviceId: audioDeviceId, echoCancellation: true },
  //     });

  //     if (deviceLocalVideoRef.current) {
  //       deviceLocalVideoRef.current.srcObject = deviceLocalStream;
  //     }
  //     socket.emit("message", { type: "ready" });
  //   } catch (error) {
  //     console.log(error);
  //     alert(
  //       "Unable to access camera and/or microphone. Please check permissions and device settings."
  //     );
  //   }
  // };

  // const startCall = async () => {
  //   try {
  //     deviceLocalStream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: { echoCancellation: true },
  //     });
  //     if (deviceLocalVideoRef.current) {
  //       deviceLocalVideoRef.current.srcObject = deviceLocalStream;
  //     }
  //     socket.emit("message", { type: "ready" });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const endCall = async () => {
    hangup();
  };

  const muteMicrophone = () => {
    if (deviceLocalStream) {
      const audioTracks = deviceLocalStream.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks[0].enabled = !audioTracks[0].enabled;
      }
    }
  };

  const focusOnPeer = (peerStream) => {
    if (peerStream) {
      deviceLocalVideoRef.current.srcObject = peerStream; // View peer boldly

      const index = streams.indexOf(peerStream); // Switch current user position with peer
      streams[index] = deviceLocalStream;
      setStreams([...streams]);

      // Stop other streams
      // peerConnection.getRemoteStreams().forEach((stream) => {
      //   if (stream.id!== peerStream.id) {
      //     peerConnection.removeTrack(stream.getTracks()[0]);
      //   }
      // });
    }
  };

  // w-full h-full grid grid-col-2 md:grid-cols-4 gap-2
  return (
    <div className="flex gap-8 pt-4 md:pt-0">
      <div className="w-full md:w-10/12 mx-auto flex flex-col items-center gap-4">
        <div className="w-full md:p-2 flex flex-col gap-4 md:py-4">
          <div
            className="w-full min-h-[80vh] md:h-[400px] flex flex-col 
          bg-neutral-100 border dark:border-0 dark:bg-deep-gray-50 rounded p-2"
          >
            <div className="h-full overflow-y-hidden grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              <div className="col-span-2 flex flex-col gap-8">
                <video
                  ref={deviceLocalVideoRef}
                  autoPlay
                  playsInline
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <div className="h-[300px] md:h-full pb-2 overflow-auto col-span-2 md:col-span-1 grid grid-cols-2 gap-2 scrollbar-thin scrollbar-thumb-deep-grey-100 scrollbar-track-transparent scroll-smooth">
                {streams.map((stream, index) => (
                  <VideoComponent
                    key={index}
                    stream={stream}
                    onclick={() => focusOnPeer(stream)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <button
            onClick={startCall}
            className="bg-red-500 rounded p-2 text-white"
          >
            <FiVideo />
          </button>
          <button onClick={endCall}>
            <FiVideoOff />
          </button>
          <button onClick={muteMicrophone}>
            {deviceLocalStream?.getAudioTracks()[0]?.enabled ? (
              <FiMic />
            ) : (
              <FiMicOff />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoComponent = ({ stream, onclick }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="rounded"
      onClick={onclick}
    />
  );
};

export default VideoApp;
