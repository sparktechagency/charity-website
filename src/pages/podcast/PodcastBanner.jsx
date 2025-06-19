import React, { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { imgUrl } from './../../helper/imgUrl';
import { FaPlay, FaPause } from 'react-icons/fa';
import ReactPlayer from "react-player";

const PodcastBanner = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axiosPublic.get("/get-podcast");
        console.log(res)
        if (res.status === 200) {
          setAudios(res.data?.data?.data || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosPublic]);

  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayClick = (index) => {
    if (playingIndex === index) {
      setPlaying(!playing); // toggle play/pause
    } else {
      setPlayingIndex(index);
      setPlaying(true);
      setPlayed(0);
    }
  };

  const handleProgress = ({ played }) => setPlayed(played);
  const handleDuration = (dur) => setDuration(dur);
  const handleSeek = (e) => {
    const value = parseFloat(e.target.value);
    playerRef.current.seekTo(value);
  };

  const handleNext = () => {
    const nextIndex = (playingIndex + 1) % audios.length;
    setPlayingIndex(nextIndex);
    setPlaying(true);
    setPlayed(0);
  };

  const handlePrev = () => {
    const prevIndex = (playingIndex - 1 + audios.length) % audios.length;
    setPlayingIndex(prevIndex);
    setPlaying(true);
    setPlayed(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="pt-20">
      <div className="relative bg-[url('/podcastBg.png')] bg-cover bg-center">
        <div className="text-white pt-9 pb-6 text-center">
          <h1 className="text-4xl lg:text-5xl text-[#7c8067] font-bold">
            EmpowerINFINITY Podcast:
            <span className="text-[#7c8067] lg:text-6xl text-3xl"> Healing,</span>
            <br />
            <span className="text-[#7c8067] lg:text-6xl text-3xl"> Help & </span>
            <span className="text-[#7c8067] lg:text-6xl text-3xl"> Growth</span>
          </h1>
          <p className="mt-6 text-lg lg:text-2xl text-[#ECEBEA]">
            Real Stories • Real Strength • Real Change
          </p>
        </div>

        {playingIndex !== null && audios[playingIndex] && (
          <div className="max-w-2xl mx-auto p-6 lg:p-10 border border-[#2c3333] shadow-md bg-[#1B2324]">
            <div className="flex justify-between flex-col md:flex-row gap-6">
              <div>
                <img
                  src={`${imgUrl}/${audios[playingIndex]?.thumbnail}`}
                  alt="Podcast Cover"
                  className="w-40 h-40 rounded-lg"
                />
              </div>

              <div className="flex-1 w-full">
                <p className="text-[#A6ABAC] text-xs font-semibold">
                  {formatDate(audios[playingIndex]?.created_at)}
                </p>
                <h2 className="text-xl lg:text-2xl text-[#E9EBEB] mt-2">
                  {audios[playingIndex]?.podcast_title}
                </h2>
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>{formatTime(played * duration)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={played}
                  onChange={handleSeek}
                  className="w-full"
                />
                <ReactPlayer
                  ref={playerRef}
                  url={`${imgUrl}/${audios[playingIndex]?.mp3}`}
                  playing={playing}
                  onProgress={handleProgress}
                  onDuration={handleDuration}
                  height={0}
                  width={0}
                  controls={false}
                />
                <div className="flex items-center justify-center gap-6 mt-4">
                  <button onClick={handlePrev} className="w-8 h-8 text-[#A6ABAC]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4394 4.10169C11.0963 3.93389 10.6875 3.97617 10.3861 4.21066L1.38606 11.2107C1.14247 11.4001 1 11.6914 1 12C1 12.3086 1.14247 12.5999 1.38606 12.7894L10.3861 19.7894C10.6875 20.0238 11.0963 20.0661 11.4394 19.8983C11.7824 19.7305 12 19.3819 12 19V5.00001C12 4.61807 11.7824 4.2695 11.4394 4.10169ZM10 7.04465V16.9554L3.62882 12L10 7.04465Z" fill="#A6ABAC" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4394 4.10169C22.0963 3.93389 21.6875 3.97617 21.3861 4.21066L12.3861 11.2107C12.1425 11.4001 12 11.6914 12 12C12 12.3086 12.1425 12.5999 12.3861 12.7894L21.3861 19.7894C21.6875 20.0238 22.0963 20.0661 22.4394 19.8983C22.7824 19.7305 23 19.3819 23 19V5.00001C23 4.61807 22.7824 4.2695 22.4394 4.10169ZM21 7.04465V16.9554L14.6288 12L21 7.04465Z" fill="#A6ABAC" />
                  </svg>
                  </button>
                  <button className=" w-10 h-10 rounded-full flex items-center justify-center  bg-[#263234]  " onClick={() => setPlaying(!playing)}>
                    {playing ? <FaPause /> : <FaPlay />}
                  </button>
                  <button onClick={handleNext} className="w-8 h-8 text-[#A6ABAC]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5606 4.10169C12.9037 3.93389 13.3125 3.97617 13.6139 4.21066L22.6139 11.2107C22.8575 11.4001 23 11.6914 23 12C23 12.3086 22.8575 12.5999 22.6139 12.7894L13.6139 19.7894C13.3125 20.0238 12.9037 20.0661 12.5606 19.8983C12.2176 19.7305 12 19.3819 12 19V5.00001C12 4.61807 12.2176 4.2695 12.5606 4.10169ZM14 7.04465V16.9554L20.3712 12L14 7.04465Z" fill="#A6ABAC" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.56065 4.10169C1.90375 3.93389 2.31246 3.97617 2.61394 4.21066L11.6139 11.2107C11.8575 11.4001 12 11.6914 12 12C12 12.3086 11.8575 12.5999 11.6139 12.7894L2.61394 19.7894C2.31246 20.0238 1.90375 20.0661 1.56065 19.8983C1.21755 19.7305 1 19.3819 1 19V5.00001C1 4.61807 1.21755 4.2695 1.56065 4.10169ZM3 7.04465V16.9554L9.37118 12L3 7.04465Z" fill="#A6ABAC" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-4">{audios[playingIndex]?.description}</p>
            <span className="text-xl text-white font-semibold mb-3">Host & Guest</span>
            <div className="flex items-center gap-16 mb-4 mt-4">
              <div className="text-center">
                <img
                  src={`${imgUrl}/${audios[playingIndex]?.host_profile}`}
                  className="w-16 h-16 object-cover rounded-full"
                  alt="Host"
                />
                <p className="text-[#A6ABAC] font-medium leading-6 text-[16px]">
                  {audios[playingIndex]?.host_title}
                </p>
                <span className="text-sm text-[#A6ABAC]">Host</span>
              </div>
              <div className="text-center">
                <img
                  src={`${imgUrl}/${audios[playingIndex]?.guest_profile}`}
                  className="w-16 h-16 object-cover rounded-full"
                  alt="Guest"
                />
                <p className="text-[#A6ABAC] font-medium leading-6 text-[16px]">
                  {audios[playingIndex]?.guest_title}
                </p>
                <span className="text-sm text-[#A6ABAC]">Guest</span>
              </div>
            </div>
          </div>
        )}

        {/* Episode List */}
        <div className="max-w-2xl mx-auto mt-6">
          <div className="bg-[#1E2A30] p-4 lg:p-6 h-60 lg:h-[40vh] overflow-y-auto custom-scrollbar">
            {audios.map((audio, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-700 cursor-pointer"
                onClick={() => handlePlayClick(index)}
              >
                <div className="flex gap-4">
                  <img
                    src={`${imgUrl}/${audio?.thumbnail}`}
                    className="w-12 h-12 rounded"
                    alt="audio"
                  />
                  <div>
                    <h2 className="text-[#E9EBEB] font-semibold text-sm">
                      {audio?.podcast_title}
                    </h2>
                    <p className="text-[#A6ABAC] text-xs mt-1">
                      {/* {audio?.duration ? formatTime(audio.duration) : "00:00"} */}
                    </p>
                  </div>
                </div>
                <p className="text-[#A6ABAC] text-xs">{formatDate(audio?.created_at)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastBanner;
