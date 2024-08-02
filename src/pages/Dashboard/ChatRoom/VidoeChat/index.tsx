// import { io } from "socket.io-client";
// import { useRef, useEffect, useState } from "react";
// import { FiVideo, FiVideoOff, FiMic, FiMicOff } from "react-icons/fi";

// const configuration = {
//   iceServers: [
//     {
//       urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
//     },
//   ],
//   iceCandidatePoolSize: 10,
// };
// const socket = io("http://localhost:3001", { transports: ["websocket"] });

// let pc;
// let localStream;
// let startButton;
// let hangupButton;
// let muteAudButton;
// let remoteVideo;
// let localVideo;
// socket.on("message", (e) => {
//   if (!localStream) {
//     console.log("not ready yet");
//     return;
//   }
//   switch (e.type) {
//     case "offer":
//       handleOffer(e);
//       break;
//     case "answer":
//       handleAnswer(e);
//       break;
//     case "candidate":
//       handleCandidate(e);
//       break;
//     case "ready":
//       // A second tab joined. This tab will initiate a call unless in a call already.
//       if (pc) {
//         console.log("already in call, ignoring");
//         return;
//       }
//       makeCall();
//       break;
//     case "bye":
//       if (pc) {
//         hangup();
//       }
//       break;
//     default:
//       console.log("unhandled", e);
//       break;
//   }
// });

// async function makeCall() {
//   try {
//     pc = new RTCPeerConnection(configuration);
//     pc.onicecandidate = (e) => {
//       const message = {
//         type: "candidate",
//         candidate: null,
//       };
//       if (e.candidate) {
//         message.candidate = e.candidate.candidate;
//         message.sdpMid = e.candidate.sdpMid;
//         message.sdpMLineIndex = e.candidate.sdpMLineIndex;
//       }
//       socket.emit("message", message);
//     };
//     pc.ontrack = (e) => (remoteVideo.current.srcObject = e.streams[0]);
//     localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
//     const offer = await pc.createOffer();
//     socket.emit("message", { type: "offer", sdp: offer.sdp });
//     await pc.setLocalDescription(offer);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function handleOffer(offer) {
//   if (pc) {
//     console.error("existing peerconnection");
//     return;
//   }
//   try {
//     pc = new RTCPeerConnection(configuration);
//     pc.onicecandidate = (e) => {
//       const message = {
//         type: "candidate",
//         candidate: null,
//       };
//       if (e.candidate) {
//         message.candidate = e.candidate.candidate;
//         message.sdpMid = e.candidate.sdpMid;
//         message.sdpMLineIndex = e.candidate.sdpMLineIndex;
//       }
//       socket.emit("message", message);
//     };
//     pc.ontrack = (e) => (remoteVideo.current.srcObject = e.streams[0]);
//     localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
//     await pc.setRemoteDescription(offer);

//     const answer = await pc.createAnswer();
//     socket.emit("message", { type: "answer", sdp: answer.sdp });
//     await pc.setLocalDescription(answer);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function handleAnswer(answer) {
//   if (!pc) {
//     console.error("no peerconnection");
//     return;
//   }
//   try {
//     await pc.setRemoteDescription(answer);
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function handleCandidate(candidate) {
//   try {
//     if (!pc) {
//       console.error("no peerconnection");
//       return;
//     }
//     if (!candidate) {
//       await pc.addIceCandidate(null);
//     } else {
//       await pc.addIceCandidate(candidate);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
// async function hangup() {
//   if (pc) {
//     pc.close();
//     pc = null;
//   }
//   localStream.getTracks().forEach((track) => track.stop());
//   localStream = null;
//   startButton.current.disabled = false;
//   hangupButton.current.disabled = true;
//   muteAudButton.current.disabled = true;
// }

// function App() {
//   startButton = useRef(null);
//   hangupButton = useRef(null);
//   muteAudButton = useRef(null);
//   localVideo = useRef(null);
//   remoteVideo = useRef(null);
//   useEffect(() => {
//     hangupButton.current.disabled = true;
//     muteAudButton.current.disabled = true;
//   }, []);
//   const [audiostate, setAudio] = useState(false);

//   const startB = async () => {
//     try {
//       localStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: { echoCancellation: true },
//       });
//       localVideo.current.srcObject = localStream;
//     } catch (err) {
//       console.log(err);
//     }

//     startButton.current.disabled = true;
//     hangupButton.current.disabled = false;
//     muteAudButton.current.disabled = false;

//     socket.emit("message", { type: "ready" });
//   };

//   const hangB = async () => {
//     hangup();
//     socket.emit("message", { type: "bye" });
//   };

//   function muteAudio() {
//     if (audiostate) {
//       localVideo.current.muted = true;
//       setAudio(false);
//     } else {
//       localVideo.current.muted = false;
//       setAudio(true);
//     }
//   }

//   return (
//     <>
//       <main className="container  ">
//         <div className="video bg-main">
//           {/* <video
//             ref={localVideo}
//             className="video-item"
//             autoPlay
//             playsInline
//             src=" "
//           ></video> */}
//           <video
//             ref={remoteVideo}
//             className="video-item"
//             autoPlay
//             playsInline
//             src=" "
//           ></video>
//         </div>

//         <div className="btn">
//           <button
//             className="btn-item btn-start"
//             ref={startButton}
//             onClick={startB}
//           >
//             <FiVideo />
//           </button>
//           <button
//             className="btn-item btn-end"
//             ref={hangupButton}
//             onClick={hangB}
//           >
//             <FiVideoOff />
//           </button>
//           <button
//             className="btn-item btn-start"
//             ref={muteAudButton}
//             onClick={muteAudio}
//           >
//             {audiostate ? <FiMic /> : <FiMicOff />}
//           </button>
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;

// import React, { useEffect, useRef, useState } from "react";
// import { BiCamera, BiMicrophone, BiPowerOff, BiUser } from "react-icons/bi";
// import io from "socket.io-client";
// import Peer from "simple-peer";
// import { attendants } from "@/DummyData";

// const socket = io("http://localhost:3001");

// const VideoApp = () => {
//   const [cameraOn, setCameraOn] = useState<boolean>(true);
//   const [isAudioOn, setIsAudioOn] = useState<boolean>(true);
//   const [stream, setStream] = useState<MediaStream | null>(null);
//   const [peers, setPeers] = useState<Peer.Instance[]>([]);
//   const userVideo = useRef<HTMLVideoElement>(null);
//   const peersRef = useRef<{ peerID: string; peer: Peer.Instance }[]>([]);

//   const handleToggleAudio = () => {
//     if (stream) {
//       const audioTracks = stream.getAudioTracks();
//       audioTracks.forEach((track) => {
//         track.enabled = !track.enabled;
//       });
//       setIsAudioOn(!isAudioOn);
//       socket.emit("toggle-audio", socket.id, !isAudioOn);
//     }
//   };

//   const handleToggleVideo = () => {
//     if (stream) {
//       const videoTracks = stream.getVideoTracks();
//       videoTracks.forEach((track) => {
//         track.enabled = !track.enabled;
//       });
//       setCameraOn(!cameraOn);
//       socket.emit("toggle-video", socket.id, !cameraOn);
//     }
//   };

//   const btnClass =
//     "shadow-lg rounded-full bg-deep-gray-50 text-white dark:bg-white dark:text-deep-gray-50 p-2";

//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         setStream(stream);
//         if (userVideo.current) {
//           userVideo.current.srcObject = stream;
//         }

//         const roomId = "my-room";
//         socket.emit("join-room", roomId, socket.id);

//         socket.on("user-connected", (userId) => {
//           if (socket.id) {
//             const peer = createPeer(userId, socket.id, stream);
//             peersRef.current.push({ peerID: userId, peer });
//             console.log(peersRef);
//             setPeers((users) => [...users, peer]);
//           }
//         });

//         socket.on("receiving-signal", (payload) => {
//           const peer = addPeer(payload.signal, payload.callerID, stream);
//           peersRef.current.push({ peerID: payload.callerID, peer });
//           setPeers((users) => [...users, peer]);
//         });

//         socket.on("user-disconnected", (userId) => {
//           const peerObj = peersRef.current.find((p) => p.peerID === userId);
//           if (peerObj) {
//             peerObj.peer.destroy();
//           }
//           const remainingPeers = peersRef.current.filter(
//             (p) => p.peerID !== userId
//           );
//           peersRef.current = remainingPeers;
//           setPeers(remainingPeers.map((p) => p.peer));
//         });
//       });
//     console.log(peersRef);
//   }, [isAudioOn]);

//   const createPeer = (
//     userToSignal: string,
//     callerID: string,
//     stream: MediaStream
//   ) => {
//     const peer = new Peer({
//       initiator: true,
//       trickle: false,
//       stream,
//     });

//     peer.on("signal", (signal) => {
//       socket.emit("sending-signal", { userToSignal, callerID, signal });
//     });

//     return peer;
//   };

//   const addPeer = (
//     incomingSignal: string,
//     callerID: string,
//     stream: MediaStream
//   ) => {
//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream,
//     });

//     peer.on("signal", (signal) => {
//       socket.emit("returning-signal", { signal, callerID });
//     });

//     peer.signal(incomingSignal);

//     return peer;
//   };

//   return (
//     <div className="flex gap-8 pt-4 md:pt-0">
//       <div className="w-full md:w-10/12 mx-auto flex flex-col-reverse items-center gap-4">
//         <div className="w-full md:w-8/12 bg-neutral-100 dark:bg-deep-gray-50 rounded-3xl p-5">
//           <div className="flex flex-col gap-8">
//             <div className="flex justify-between items-center text-sm border-b dark:border-b-neutral-600">
//               <p>Online</p>
//               <div className="flex items-center gap-1">
//                 <BiUser size={20} />
//                 20 People
//               </div>
//             </div>
//             <ul
//               className="list-none overflow-x-scroll1 scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-gray-100
//               dark:scrollbar-thumb-deep-gray-50 dark:scrollbar-track-deep-grey-100 gap- flex items-center"
//             >
//               {attendants.map((attendant, index) => (
//                 <li
//                   key={index}
//                   className="capitalize rounded cursor-pointer -mx-1"
//                 >
//                   <img
//                     src={attendant.img}
//                     className="w-[40px] h-[40px] rounded-full"
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="w-full md:p-2 flex flex-col gap-4 md:py-4">
//           <div className="w-full h-[50vh] md:h-[400px] flex flex-col gap-4 bg-neutral-100 dark:bg-deep-gray-50 rounded-lg">
//             <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4">
//               <video
//                 muted
//                 ref={userVideo}
//                 autoPlay
//                 playsInline
//                 className="object- rounded-lg"
//               />
//             </div>
//             {peers.map((peer, index) => (
//               <Video key={index} peer={peer} />
//             ))}
//           </div>
//           <div className="flex gap-4 justify-around p-2 opacity-95 dark:bg-deep-gray-50 w-8/12 md:w-1/4 mx-auto rounded-full">
//             <button className={btnClass}>
//               <BiMicrophone onClick={handleToggleAudio} size={23} />
//             </button>
//             <button onClick={handleToggleVideo} className={btnClass}>
//               <BiCamera size={23} />
//             </button>
//             <button className="rounded-full bg-deep-red-100 text-white p-2">
//               <BiPowerOff size={23} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Video = ({ peer }: { peer: Peer.Instance }) => {
//   const ref = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     peer.on("stream", (stream) => {
//       if (ref.current) {
//         ref.current.srcObject = stream;
//       }
//     });
//   }, [peer]);

//   return (
//     <video
//       ref={ref}
//       autoPlay
//       playsInline
//       className="w-full h-full rounded-lg"
//     />
//   );
// };

// export default VideoApp;
