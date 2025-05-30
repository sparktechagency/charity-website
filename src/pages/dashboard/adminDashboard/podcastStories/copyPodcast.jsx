import { Button, Form, Input, message, Modal, Pagination, Space, Table, Upload } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { closePodcastModalOpenFive, closePodcastModalOpenFour, closePodcastModalOpenOne, closePodcastModalOpenThree, closePodcastModalOpenTwo, podcastModalOpenFive, podcastModalOpenFour, podcastModalOpenOne, podcastModalOpenThree, podcastModalOpenTwo } from "../../../../features/modal/modalSlice";
import { useForm } from "antd/es/form/Form";
import { UploadOutlined } from "@ant-design/icons";
import { InboxOutlined } from '@ant-design/icons';
import { UploadCloud } from "lucide-react";
import TextArea from "antd/es/input/TextArea";
import { useDeleteDashboardPodcastApiMutation, useGetDashboardPodcastApiQuery, usePostDashboardPodcastApiMutation, useSingleGetDashboardPodcastApiQuery, useUpdateDashboardPodcastApiMutation } from "../../../../redux/dashboardFeatures/dashboardPodcastApi";
import CustomLoading from "../../shared/CustomLoading";
import Search from "antd/es/input/Search";
import Swal from "sweetalert2";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FiSearch } from 'react-icons/fi';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  MoreHorizontal,
  Clock,
} from "lucide-react";



const { Dragger } = Upload;

const PodcastStories = () => {
  const [formOne] = useForm()
  const [formTwo] = useForm()
  const [formThree] = useForm()
  const [formFour] = useForm()
  const [formFive] = useForm()
  const [openActionModal, setOpenActionModal] = useState(false)

  const [selectId, setselectId] = useState(null)
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const playerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [ImageFileListHost, setImageFileListHost] = useState([]);
  const [ImageFileListGuest, setImageFileListGuest] = useState([]);
  const [ImageFileListThumbail, setImageFileListThumbail] = useState([]);
  const [mp3FileList, setMp3FileList] = useState([]);
  const [uploadedFileList, setUploadedFileList] = useState([]);
  const [durationTime, setDurationTime] = useState([])

  const dispatch = useDispatch();
  const podcastModalOne = useSelector((state) => state.modal.podcastModalOne);
  const podcastModalTwo = useSelector((state) => state.modal.podcastModalTwo);
  const podcastModalThree = useSelector((state) => state.modal.podcastModalThree);
  const podcastModalFour = useSelector((state) => state.modal.podcastModalFour);
  const podcastModalFive = useSelector((state) => state.modal.podcastModalFive);



  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);




  const [postDashboardPodcastApi] = usePostDashboardPodcastApiMutation() // post
  const { data, isLoading, refetch } = useGetDashboardPodcastApiQuery({ search: searchText, per_page: perPage, page: currentPage }); // get
  const [deleteDashboardPodcastApi] = useDeleteDashboardPodcastApiMutation(); // delete
  const { data: podcastData } = useSingleGetDashboardPodcastApiQuery({ podcast_id: selectId }) // single podcast data
  const [updateDashboardPodcastApi] = useUpdateDashboardPodcastApiMutation(); // update


  const allPodcastData = data?.data?.data
  const singlePodcast = podcastData?.data
  const singlePodcastData = allPodcastData?.find(item => item.id === Number(selectId));
  const [selectedPodcast, setSelectedPodcast] = useState(allPodcastData?.[0] || null);
  const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0);
  const [AudioFileList, setAudioFileList] = useState([]);




  // audio minute and second formate function
  useEffect(() => {
    const durations = [];

    allPodcastData?.forEach((item, index) => {
      const audioUrl = `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${item.mp3}`;
      const audio = new Audio(audioUrl);

      audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = Math.floor(duration % 60);

        const formatted = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} sec`;

        durations[index] = formatted;

        // সব গুলা লোড হলে set করো
        if (durations.filter(Boolean).length === allPodcastData.length) {
          setDurationTime(durations);
        }
      });
    });
  }, [allPodcastData]);







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

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  // upload mp3 file function
  const handleUpload = async ({ file }) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      // simulate upload API
      await new Promise((res) => setTimeout(res, 2000));


      // ✅ Correct structure required by antd Upload
      const uploadedFile = {
        uid: file.uid,
        name: file.name,
        status: 'done',
        url: URL.createObjectURL(file), // required to preview/download
      };

      setUploadedFileList([uploadedFile]); // show only after success
    } catch (err) {
      message.error('Upload failed!');
    } finally {
      setIsUploading(false);
    }
  };



  //  default value show modal three
  useEffect(() => {
    if (singlePodcastData?.photo) {
      const imageObj = {
        uid: '-1',
        name: 'existing_image.jpg',
        status: 'done',
        url: `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${singlePodcastData?.photo}`
        // url: singlePodcastData.photo,
      };

      // First set form values
      formThree.setFieldsValue({
        podcast_title: singlePodcastData.podcast_title,
        host_title: singlePodcastData.host_title,
        guest_title: singlePodcastData.guest_title,
        image: [imageObj], // ✅ use it after defining
      });

      // Then set image file list
      setImageFileListHost([imageObj]);
    }
  }, [singlePodcastData]);


  // default value show modal for Five
  useEffect(() => {

    if (singlePodcast) {
      const guestImage = {
        uid: '-1',
        name: 'guest_profile.jpg',
        status: 'done',
        url: `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${singlePodcast?.guest_profile}`,
      };

      const hostImage = {
        uid: '-2',
        name: 'host_profile.jpg',
        status: 'done',
        url: `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${singlePodcast?.host_profile}`,
      };

      const thumbnailImage = {
        uid: '-3',
        name: 'thumbnail.jpg',
        status: 'done',
        url: `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${singlePodcast?.thumbnail}`,
      };

      const audioFile = {
        uid: '-1',
        name: 'podcast.mp3',
        status: 'done',
        url: `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${singlePodcast?.mp3}`,
      };


      // First set form values
      formFive.setFieldsValue({
        podcast_title: singlePodcast.podcast_title,
        host_title: singlePodcast.host_title,
        guest_title: singlePodcast.guest_title,
        description: singlePodcast.description,
        mp3File: [audioFile],
        image: [guestImage, hostImage, thumbnailImage], // ✅ use it after defining
      });



      setImageFileListGuest([guestImage]);
      setImageFileListHost([hostImage]);
      setImageFileListThumbail([thumbnailImage]);
      setMp3FileList([audioFile])
    }
  }, [singlePodcast]);








  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };



  //======== podcast modal one start =========

  const showPodcastModalOne = () => {
    dispatch(podcastModalOpenOne())
    formFive.resetFields(); // clear previous form values
    setImageFileListHost([]);
    setImageFileListGuest([]);
    setImageFileListThumbail([]);
    setMp3FileList([]);
    setIsEditMode(false);
  };

  const onFinishOne = async (values) => {
    setLoading(true)
    const formData = new FormData();
    const fileObj = values?.mp3File?.originFileObj;
    if (!fileObj) {
      message.error("No file selected!");
      return;
    }


    //======= image file upload =======

    if (ImageFileListHost[0]?.originFileObj) {
      formData.append("host_profile", ImageFileListHost[0].originFileObj);
    }
    if (ImageFileListGuest[0]?.originFileObj) {
      formData.append("guest_profile", ImageFileListGuest[0].originFileObj);
    }
    if (ImageFileListThumbail[0]?.originFileObj) {
      formData.append("thumbnail", ImageFileListThumbail[0].originFileObj);
    }





    formData.append("podcast_title", values.podcast_title)
    formData.append("host_title", values.host_title)
    formData.append("guest_title", values.guest_title)
    formData.append("description", values.description)
    formData.append('mp3', fileObj);

    // console.log(formData.forEach(item => {
    //   console.log(item)
    // }))

    try {
      const res = await postDashboardPodcastApi(formData).unwrap()
      console.log(res)
      if (res?.data) {
        toast.success(res?.message)
        setImageFileListHost([]);
        setImageFileListGuest([]);
        setImageFileListThumbail([]);
        setMp3FileList([]);
        formOne.resetFields()
        dispatch(closePodcastModalOpenOne());
      }
    } catch (errors) {
      if (errors) {
        toast.error(errors?.data?.message)
        console.log(errors?.data?.message)
      }
    }
    finally {
      setLoading(false); // End loading
    }

  }


  const podcastModalOkOne = () => {
    // dispatch(closePodcastModalOpenOne());
    formOne.submit()
  };
  const podcastModalCancelOne = () => {
    setImageFileListHost([]);
    setImageFileListGuest([]);
    setImageFileListThumbail([]);
    setMp3FileList([]);
    formOne.resetFields()
    dispatch(closePodcastModalOpenOne());

  };
  //======== podcast modal one end =========


  // ======= podcast modal five start =========
  const onFinishFive = async (values) => {
    setLoading(true);

    const formData = new FormData();
    const fileObj = values?.mp3File?.originFileObj;


    //======= image file upload =======

    if (ImageFileListHost[0]?.originFileObj) {
      formData.append("host_profile", ImageFileListHost[0].originFileObj);
    }
    if (ImageFileListGuest[0]?.originFileObj) {
      formData.append("guest_profile", ImageFileListGuest[0].originFileObj);
    }
    if (ImageFileListThumbail[0]?.originFileObj) {
      formData.append("thumbnail", ImageFileListThumbail[0].originFileObj);
    }



    formData.append("podcast_title", values.podcast_title)
    formData.append("host_title", values.host_title)
    formData.append("guest_title", values.guest_title)
    formData.append("description", values.description)
    formData.append('mp3', mp3FileList[0]?.originFileObj || fileObj);
    formData.append("_method", "PUT");



    try {
      const res = await updateDashboardPodcastApi({
        updateInfo: formData,
        podcast_id: selectId
      }).unwrap()
      console.log(res)
      if (res?.data) {
        toast.success(res?.message)
        dispatch(closePodcastModalOpenFive());
      }
    } catch (errors) {
      if (errors) {
        console.log(errors)
        toast.error(errors?.data?.message);
      }
    }
    finally {
      setLoading(false);
    }
  }


  const showPodcastModalFive = (id) => {
    setselectId(id)
    dispatch(podcastModalOpenFive())
    setOpenActionModal(false)
  };


  const podcastModalOkFive = () => {
    formFive.submit()
    // dispatch(closePodcastModalOpenFive());

  };

  const podcastModalCancelFive = () => {
    dispatch(closePodcastModalOpenFive());

    setImageFileListHost([]);
    setImageFileListGuest([]);
    setImageFileListThumbail([]);
    setUploadedFileList([]);
    formFive.resetFields()
  };
  // ======= podcast modal five end ===========


  const handleDelete = async (id) => {
    setOpenActionModal(false)
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Deleted this Podcast",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteDashboardPodcastApi({ podcast_id: id }).unwrap();
        if (res?.data) {
          toast.success(res?.message);
          refetch();
        }
      } catch (errors) {
        toast.error(errors.message);
      }
    }
  };


  useEffect(() => {
    refetch(); // Refetch the data when searchText, currentPage, or perPage changes
  }, [searchText, currentPage, perPage, refetch]);





  if (isLoading) return <CustomLoading />

  return <section className="text-[#ffff] ">
    <div className="">
      <div className="">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">Podcast & stories</h2>
          {/* <button
            
            className="bg-[#ffffff3a] text-[#ffff] py-2 px-6 rounded-lg flex items-center gap-3">
            
          </button> */}
          <button onClick={showPodcastModalOne} className=" px-6 rounded-md bg-[#ffff] text-black hover:bg-[#ffffff6e] " style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "16px",
            height: "40px",
            marginLeft: "0px",
          }}>
            Add new Podcast
          </button>
        </div>
        <div>
          <div className="relative w-fit my-8">
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search host title or guest title or description"
              className="bg-transparent border px-4 py-2 pl-10 rounded-md w-[350px]"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>


      {/* ================== podcast all start ========= */}
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
            <div className="space-y-1">
              {allPodcastData?.map((podcast, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPodcast(podcast)}
                  className={`cursor-pointer bg-primary p-4 rounded-lg  ${selectedPodcast?.id === podcast.id ? "ring-2 ring-purple-500" : ""
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
                        <span>Duration: {durationTime[index] || "Loading..."}</span>
                      </div>
                    </div>

                    <button className="flex items-center gap-3">
                      {/* <MoreHorizontal className="h-4 w-4" /> */}
                      <p onClick={() => showPodcastModalFive(podcast?.id)}>Edit</p>
                      <p onClick={() => handleDelete(podcast.id)}>Delete</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ================== podcast all end =========== */}





      {/* modal component */}
      {/* modal one */}
      <Modal
        className="custom-ai-modal"
        centered
        open={podcastModalOne}
        onOk={podcastModalOkOne}
        onCancel={podcastModalCancelOne}
        width={800}
        footer={
          <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
            <button
              className="hover:bg-[#A6ABAC] px-6 rounded"
              onClick={podcastModalCancelOne}
            >
              Cancel
            </button>
            <Button
              onClick={podcastModalOkOne}
              htmlType="submit"
              className="no-hover"
              loading={loading}
            >
              {loading ? "Loading...." : "Post now"}
            </Button>
          </div>
        }
      >
        <div className="">

          <Form form={formOne} onFinish={onFinishOne} style={{ padding: "10px 10px", }}>
            {/* podcast title */}
            <div>
              <p className="text-[#FFFFFF] ">Podcast title</p>
              <Form.Item name="podcast_title"
                rules={[{ required: true, message: 'Please enter the podcast title' }]}
              >
                <Input
                  id="dashboard_podcast"
                  placeholder="Enter title"
                  style={{ padding: "10px" }}
                />
              </Form.Item>
            </div>

            {/* host tile and gest title */}
            <div className="flex items-center justify-between gap-4">
              {/* Host title */}
              <div className="w-full">
                <p className="text-[#FFFFFF] ">Host title</p>
                <Form.Item name="host_title"
                  rules={[{ required: true, message: 'Please enter the host title' }]}
                >
                  <Input
                    id="dashboard_podcast"
                    placeholder="Enter title"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
              </div>


              {/* Gust title */}
              <div className="w-full">
                <p className="text-[#FFFFFF] ">Guest title</p>
                <Form.Item name="guest_title"
                  rules={[{ required: true, message: 'Please enter the guest title' }]}
                >
                  <Input
                    id="dashboard_podcast"
                    placeholder="Enter title"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="flex  flex-col md:flex-row justify-between  gap-4">
              {/* host image upload */}
              <div className="w-[50%] flex justify-center items-center border-2 border-dashed border-[#B6B6BA] rounded-md py-2">
                <Form.Item
                  className="md:col-span-2"
                  name="image"
                  rules={[
                    {
                      required: ImageFileListHost.length === 0,
                      message: "Image required!",
                    },
                  ]}
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListHost}
                    onChange={({ fileList }) => setImageFileListHost(fileList)}
                    // listType="picture-card"
                    // className="w-full"
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className=" text-gray-400" />
                      <span className=" text-[#fff]">Upload guest photo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>

              {/* guest image upload */}
              <div className="w-[50%] flex justify-center items-center border-2 border-dashed border-[#B6B6BA] rounded-md py-2">
                <Form.Item
                  className="md:col-span-2"
                  name="image"
                  rules={[
                    {
                      required: ImageFileListGuest.length === 0,
                      message: "Image required!",
                    },
                  ]}
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListGuest}
                    onChange={({ fileList }) => setImageFileListGuest(fileList)}
                    // listType="picture-card"
                    // className="w-full"
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className=" text-[#fff]">Upload host photo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
            </div>


            {/* mp3 file upload */}
            <div className="pt-6">
              <Form.Item
                name="mp3File"
                valuePropName="file"
                getValueFromEvent={(e) => e && e.fileList[0]}
                rules={[
                  {
                    required: true,
                    message: 'Please upload an MP3 file!',
                  },
                ]}
              >
                <Dragger
                  beforeUpload={() => false} // disable auto upload
                  fileList={uploadedFileList} // only show after success
                  onChange={handleUpload}
                  accept=".mp3"
                  maxCount={1}
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px dashed #888',
                    borderRadius: '8px',
                    padding: '0px 20px',
                  }}
                >
                  {isUploading ? (
                    <div className="flex justify-center mt-2 text-white">
                      <span className="animate-pulse">Uploading...</span>
                    </div>)
                    :
                    <div>
                      <p className="">
                        <InboxOutlined style={{ color: '#fff', fontSize: '32px' }} />
                      </p>
                      <p style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>
                        Upload podcast of drag & drop here.
                      </p>
                      <p style={{ color: '#aaa', marginTop: '0px' }}>
                        Supported format MP3<br />
                        Max file size: 1 GB.
                      </p>
                    </div>
                  }

                </Dragger>
              </Form.Item>
            </div>

            <div className="flex justify-between gap-4 pt-2">
              {/* guest image upload */}
              <div className="w-[50%] h-[110px] flex justify-center items-center border-2 border-dashed border-[#B6B6BA] rounded-md py-2">
                <Form.Item
                  className="md:col-span-2"
                  name="image"
                  rules={[
                    {
                      required: ImageFileListThumbail.length === 0,
                      message: "Image required!",
                    },
                  ]}
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListThumbail}
                    onChange={({ fileList }) => setImageFileListThumbail(fileList)}
                    // listType="picture-card"
                    // className="w-full"
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className=" text-[#fff]">Upload thumbnail.</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>


              <div className="w-[50%]  h-[110px]">
                <Form.Item name="description"
                  rules={[{ required: true, message: 'Please enter the description' }]}
                >
                  <TextArea
                    placeholder="Write a description..." style={{ backgroundColor: "transparent", padding: "10px", border: "1px solid gray", color: "#fff", height: "110px", resize: "none" }}
                    className="custom-textarea"
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>








      {/* modal five */}
      <Modal
        className="custom-ai-modal"
        centered
        open={podcastModalFive}
        onOk={podcastModalOkFive}
        onCancel={podcastModalCancelFive}
        width={800}
        footer={
          <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
            <button
              className="hover:bg-[#A6ABAC] px-6 rounded"
              onClick={podcastModalCancelFive}
            >
              Cancel
            </button>
            <Button
              onClick={podcastModalOkFive}
              htmlType="submit"
              className="no-hover"
              loading={loading}
            >
              {
                loading ? "Loading..." : "Update"
              }
            </Button>
          </div>
        }
      >
        <div className="">

          <Form form={formFive} onFinish={onFinishFive} style={{ padding: "10px 10px", }}>
            {/* podcast title */}
            <div>
              <p className="text-[#FFFFFF] ">Podcast title</p>
              <Form.Item name="podcast_title"
              >
                <Input
                  id="dashboard_podcast"
                  placeholder="Enter title"
                  style={{ padding: "10px" }}
                />
              </Form.Item>
            </div>

            {/* host tile and gest title */}
            <div className="flex items-center justify-between gap-4">
              {/* Host title */}
              <div className="w-full">
                <p className="text-[#FFFFFF] ">Host title</p>
                <Form.Item name="host_title"
                >
                  <Input
                    id="dashboard_podcast"
                    placeholder="Enter title"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
              </div>


              {/* Gust title */}
              <div className="w-full">
                <p className="text-[#FFFFFF] ">Guest title</p>
                <Form.Item name="guest_title"

                >
                  <Input
                    id="dashboard_podcast"
                    placeholder="Enter title"
                    style={{ padding: "10px" }}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="flex  flex-col md:flex-row justify-between  gap-4">
              {/* host image upload */}
              <div className="w-[50%] flex justify-center items-center border-2 border-dashed border-[#B6B6BA] rounded-md py-2">
                <Form.Item
                  className="md:col-span-2"
                  name="host_profile"
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListHost}
                    onChange={({ fileList }) => setImageFileListHost(fileList)}
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className=" text-gray-400" />
                      <span className=" text-[#fff]">Upload guest photo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>

              {/* guest image upload */}
              <div className="w-[50%] flex justify-center items-center border-2 border-dashed border-[#B6B6BA] rounded-md py-2">
                <Form.Item
                  className="md:col-span-2"
                  name="guest_profile"
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListGuest}
                    onChange={({ fileList }) => setImageFileListGuest(fileList)}
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className=" text-[#fff]">Upload host photo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
            </div>


            {/* mp3 file upload */}
            <div className="pt-6">
              <Form.Item
                name="mp3File"
                valuePropName="file"
                getValueFromEvent={(e) => e && e.fileList[0]}

              >
                <Dragger
                  beforeUpload={() => false}
                  fileList={mp3FileList}
                  onChange={handleUpload}
                  accept=".mp3"
                  maxCount={1}
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px dashed #888',
                    borderRadius: '8px',
                    padding: '0px 20px',
                  }}
                >
                  {isUploading ? (
                    <div className="flex justify-center mt-2 text-white">
                      <span className="animate-pulse">Uploading...</span>
                    </div>)
                    :
                    <div>
                      <p className="">
                        <InboxOutlined style={{ color: '#fff', fontSize: '32px' }} />
                      </p>
                      <p style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>
                        Upload podcast of drag & drop here.
                      </p>
                      <p style={{ color: '#aaa', marginTop: '0px' }}>
                        Supported format MP3<br />
                        Max file size: 1 GB.
                      </p>
                    </div>
                  }

                </Dragger>
              </Form.Item>
            </div>

            <div className="flex justify-between gap-4 pt-2">
              {/* thumbail image upload */}
              <div className="w-[50%] h-[110px] flex justify-center items-center border-2 border-dashed border-[#B6B6BA] rounded-md py-2">
                <Form.Item
                  className="md:col-span-2"
                  name="thumbnail"
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListThumbail}
                    onChange={({ fileList }) => setImageFileListThumbail(fileList)}
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className=" text-[#fff]">Upload thumbnail.</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>


              <div className="w-[50%]  h-[110px]">
                <Form.Item name="description"
                >
                  <TextArea
                    placeholder="Write a description..." style={{ backgroundColor: "transparent", padding: "10px", border: "1px solid gray", color: "#fff", height: "110px", resize: "none" }}
                    className="custom-textarea"
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>


      {/* pagination */}
      <div className="flex justify-end pt-4">
        <Pagination
          current={currentPage}
          pageSize={perPage}
          total={data?.data?.total || 0}
          onChange={(page, pageSize) => {
            setCurrentPage(page)
            setPerPage(pageSize)
          }}
        />
      </div>
    </div>
  </section>;
};

export default PodcastStories;