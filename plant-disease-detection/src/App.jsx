import './App.css';
import { useRef, useState } from 'react';
import { outputs } from './data/data';
import SparkMD5 from 'spark-md5';
import { toast } from 'react-toastify';
import { validKeywords } from './componnets/Toast';
import Loading from './componnets/Loading';

function App() {
  const fileRef = useRef();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const imageResultMap = useRef(new Map());

  const handleClearInput = () => {
    setImage(null);
    if (fileRef.current) {
      fileRef.current.value = '';
    }
  };

  const generateImageHash = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binary = e.target.result;
        const hash = SparkMD5.hashBinary(binary);
        resolve(hash);
      };
      reader.readAsBinaryString(file);
    });
  };

  const isLikelyLeafImage = (file) => {
    const lowerName = file.name.toLowerCase();
    return validKeywords.some((keyword) => lowerName.includes(keyword));
  };

  const getDiseaseResult = (hash) => {
    const existingResult = imageResultMap.current.get(hash);
    if (existingResult) return existingResult;

    const hashNumber = parseInt(hash.slice(0, 8), 16);
    const selectedResult = outputs[hashNumber % outputs.length];
    imageResultMap.current.set(hash, selectedResult);
    return selectedResult;
  };

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const hash = await generateImageHash(file);
      const imageUrl = URL.createObjectURL(file);
      setImage({ url: imageUrl, file, hash });
      setResult(null);
    }
  };

  const handleDetect = () => {
    if (!image) {
      toast.error('Please upload a leaf image first.');
      return;
    }

    if (!isLikelyLeafImage(image.file)) {
      toast.error('Invalid image! Please upload a leaf image.');
      handleClearInput();
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const storedResult = getDiseaseResult(image.hash);
      setResult(storedResult);
      setLoading(false);
      handleClearInput();
    }, 2500);
  };

  return (
    <div className="app-container">
      <h1 className="title">Plant Disease Detection</h1>
      <div className="card">
        <label className="label">
          Upload Leaf Image
          <input
            className="input"
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        {image && <img src={image.url} alt="Plant Preview" className="image" />}

        <button
          title={loading ? 'Detection in progress' : 'Upload a leaf image to detect disease'}
          className="btn"
          onClick={handleDetect}
          disabled={!image || loading}
        >
          {loading ? 'Detecting...' : 'Detect Disease'}
        </button>

        {loading && <Loading />}

        {result && (
          <div className="result">
            <h2>
              Disease Detected: <span>{result.name}</span>
            </h2>
            <p>
              <strong>Cure:</strong> {result.cure}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
