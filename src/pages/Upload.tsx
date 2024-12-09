import React, { useState } from "react";
import { Upload as UploadIcon } from "lucide-react";
import { uploadToS3 } from "../services/s3Service";

const Upload: React.FC = ({
  onUploadSuccess,
}: {
  onUploadSuccess?: () => void;
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;
      const url = await uploadToS3(file, fileName);
      setUploadedUrl(url);

      // Trigger video list update in Browse after upload
      if (onUploadSuccess) {
        onUploadSuccess();
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Upload Your Video</h1>
      <div
        className={`max-w-xl mx-auto border-2 border-dashed rounded-lg p-12 text-center ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop your video file here, or click to select a file
        </p>
        <input
          type="file"
          className="hidden"
          onChange={handleChange}
          accept="video/*"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Select File
        </label>
        {file && (
          <p className="mt-4 text-sm text-gray-600">
            Selected file: {file.name}
          </p>
        )}
      </div>
      {file && (
        <div className="mt-8 text-center">
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 disabled:opacity-50"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Video"}
          </button>
        </div>
      )}
      {uploadedUrl && (
        <div className="mt-8 text-center">
          <p className="text-green-600 font-semibold">Upload successful!</p>
          <p className="mt-2">
            Your video is available at:{" "}
            <a
              href={uploadedUrl}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {uploadedUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Upload;
