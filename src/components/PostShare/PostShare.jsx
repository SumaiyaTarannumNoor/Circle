import React, { useState, useRef } from 'react';
import './PostShare.css';
import ProfileImage from '../../img/img1.jpg';
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes, UilMicrophone } from '@iconscout/react-unicons';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const PostShare = () => {
  const [image, setImage] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const toggleSpeechRecognition = () => {
    if (!SpeechRecognition) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true; // Set to true for continuous recognition
      recognitionRef.current.interimResults = false; // Set to true if you want interim results

      recognitionRef.current.onstart = () => {
        console.log('Speech recognition started');
      };

      recognitionRef.current.onresult = (event) => {
        const lastResultIndex = event.results.length - 1;
        const lastResult = event.results[lastResultIndex];
        const transcript = lastResult[0].transcript;
        console.log('Transcript:', transcript);
        setTranscript((prev) => `${prev} ${transcript}`);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      recognitionRef.current.onend = () => {
        if (isListening) {
          recognitionRef.current.start(); // Restart recognition if it's still supposed to be listening
        }
        console.log('Speech recognition ended');
      };
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input
          type="text"
          placeholder="Wanna say something???"
          className="w-[500px] h-[300px]"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />
        <div className="PostOptions">
          <div className="Options" style={{ color: 'var(--photo)' }} onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="Options" style={{ color: 'var(--video)' }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="Options" style={{ color: 'var(--location)' }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="Options" style={{ color: 'var(--schedule)' }}>
            <UilSchedule />
            Schedule
          </div>
          <div className="Options" style={{ color: 'var(--schedule)' }} onClick={toggleSpeechRecognition}>
            <UilMicrophone />
            {isListening ? 'Stop' : 'Speak'}
          </div>
          <div className="Options">
            <button className="button share-button">Share</button>
          </div>
          <div style={{ display: 'none' }}>
            <input type="file" name="MyImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="PreviewImage">
            <img src={image.image} alt="" />
            <UilTimes onClick={() => setImage(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
