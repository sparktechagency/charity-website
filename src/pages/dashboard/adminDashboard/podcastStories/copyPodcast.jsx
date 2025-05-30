
import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  MoreHorizontal,
  Clock,
} from "lucide-react";
import {
  useGetDashboardPodcastApiQuery,
} from "../../../../redux/dashboardFeatures/dashboardPodcastApi";

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const skipInterval = 15; // seconds to skip forward/backward

  const { data, isLoading } = useGetDashboardPodcastApiQuery();
  const allPodcastData = data?.data?.data || [];
  const [selectedPodcast, setSelectedPodcast] = useState(allPodcastData?.[0] || null);
  const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0);

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update current time as audio plays
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Update duration when metadata is loaded
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Handle seeking
  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Skip forward
  const handleSkipForward = () => {
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + skipInterval,
      duration
    );
    setCurrentTime(audioRef.current.currentTime);
  };

  // Skip backward
  const handleSkipBackward = () => {
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - skipInterval,
      0
    );
    setCurrentTime(audioRef.current.currentTime);
  };

  // Go to next podcast
  const goToNextPodcast = () => {
    if (currentPodcastIndex < allPodcastData.length - 1) {
      const nextIndex = currentPodcastIndex + 1;
      setCurrentPodcastIndex(nextIndex);
      setSelectedPodcast(allPodcastData[nextIndex]);
    }
  };

  // Go to previous podcast
  const goToPreviousPodcast = () => {
    if (currentPodcastIndex > 0) {
      const prevIndex = currentPodcastIndex - 1;
      setCurrentPodcastIndex(prevIndex);
      setSelectedPodcast(allPodcastData[prevIndex]);
    }
  };

  // When selected podcast changes
  useEffect(() => {
    if (selectedPodcast && audioRef.current) {
      // Find the current index of the selected podcast
      const index = allPodcastData.findIndex(p => p.id === selectedPodcast.id);
      setCurrentPodcastIndex(index);

      // Reset player state
      setIsPlaying(false);
      setCurrentTime(0);

      // Load new audio source
      audioRef.current.load();
    }
  }, [selectedPodcast]);

  // Auto-play when new podcast is loaded (if was playing before)
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [selectedPodcast]);




  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };


  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (isLoading) {
    return <p className="text-white p-4">Loading...</p>;
  }

  return (
    <div className=" text-white p-4">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false);
          goToNextPodcast();
        }}
      >
        {selectedPodcast && (
          <source
            src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/${selectedPodcast.mp3}`}
            type="audio/mpeg"
          />
        )}
        Your browser does not support the audio element.
      </audio>

      <div className="flex flex-col gap-6">
        {/* Left: Podcast Player */}
        <div className="w-[600px]">
          {selectedPodcast && (
            <>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/${selectedPodcast.thumbnail}`}
                    alt="Podcast"
                    className="w-[200px] h-[200px] rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {selectedPodcast.podcast_title
                      .toLowerCase()
                      .split(' ')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')}
                  </h1>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={goToPreviousPodcast}
                      className="p-2 rounded-full hover:bg-gray-800"
                      disabled={currentPodcastIndex === 0}
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button
                      onClick={togglePlayPause}
                      className=" text-black rounded-full h-12 w-12 flex items-center justify-center "
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </button>
                    <button
                      onClick={goToNextPodcast}
                      className="p-2 rounded-full hover:bg-gray-800"
                      disabled={currentPodcastIndex === allPodcastData.length - 1}
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-gray-400 ml-auto">
                      {formatTime(duration - currentTime)} sec left
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-700 h-1 rounded-full cursor-pointer"
                    onClick={handleSeek}
                  >
                    <div
                      className="bg-white h-1 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="py-4">{selectedPodcast?.description}</p>
              </div>

              {/* Host & Guest Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Host & Guest</h3>
                <div className="flex gap-6">
                  {[
                    {
                      name: selectedPodcast.host_title,
                      role: "Host",
                      fallback: selectedPodcast.host_title?.[0]?.toUpperCase(),
                      image: selectedPodcast.host_profile,
                    },
                    {
                      name: selectedPodcast.guest_title,
                      role: "Guest",
                      fallback: selectedPodcast.guest_title?.[0]?.toUpperCase(),
                      image: selectedPodcast.guest_profile,
                    },
                  ].map((person, idx) => (
                    <div className="flex items-center gap-3" key={idx}>
                      {person.image ? (
                        <img
                          src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/${person.image}`}
                          alt={person.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                          {person.fallback}
                        </div>
                      )}
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-gray-400 text-sm">{person.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right: Episode List */}
        <div className="">
          <h3 className="text-lg font-semibold py-2">Episodes</h3>
          <div className="space-y-3">
            {allPodcastData.map((podcast, index) => (
              <div
                key={podcast.id}
                onClick={() => setSelectedPodcast(podcast)}
                className={`cursor-pointer bg-gray-800 p-4 rounded-lg  ${selectedPodcast?.id === podcast.id ? "ring-2 ring-purple-500" : ""
                  }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/${podcast.thumbnail}`}
                    alt="Episode"
                    className="w-[80px] h-[70px] rounded bg-gradient-to-br from-purple-500 to-pink-500 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-6">
                      <h4 className="font-medium text-white text-sm mb-1">{podcast.podcast_title
                        .toLowerCase()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}</h4>
                      <p>{formatDate(podcast?.created_at)}</p>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock className="h-3 w-3" />
                      <span>Duration: {formatTime(duration)} sec</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-full">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}