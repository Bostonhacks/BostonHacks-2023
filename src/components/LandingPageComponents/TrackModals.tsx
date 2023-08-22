import React, { useState } from 'react';
import track1 from '../../assets/images/LandingPage/track1.png';
import track2 from '../../assets/images/LandingPage/track2.png';
import track3 from '../../assets/images/LandingPage/track3.png';
import Modal from '@mui/material/Modal';
import test from '../../assets/images/LandingPage/test.svg';

const TrackModals = () => {
  const [track1Open, setTrack1Open] = useState(false);
  const [track2Open, setTrack2Open] = useState(false);
  const [track3Open, setTrack3Open] = useState(false);

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div className="w-[75vw] flex flex-row  items-center justify-around">
        <button
          onClick={() => {
            setTrack1Open(true);
          }}
        >
          <img src={track1} alt="track 1" />
        </button>
        <button
          onClick={() => {
            setTrack2Open(true);
          }}
        >
          <img src={track2} alt="track 2" />
        </button>
        <button
          onClick={() => {
            setTrack3Open(true);
          }}
        >
          <img src={track3} alt="track 3" />
        </button>
      </div>
      <Modal
        open={track1Open}
        onClose={() => {
          setTrack1Open(false);
        }}
      >
        <img
          src={test}
          alt="test"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Modal>
      <Modal
        open={track2Open}
        onClose={() => {
          setTrack2Open(false);
        }}
      >
        <img
          src={test}
          alt="test"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Modal>
      <Modal
        open={track3Open}
        onClose={() => {
          setTrack3Open(false);
        }}
      >
        <img
          src={test}
          alt="test"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Modal>
    </div>
  );
};

export default TrackModals;
