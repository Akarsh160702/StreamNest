import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

// Configure AWS SDK
const s3Client = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: "AKIA3OGID5",
    secretAccessKey: "AQJPHYkRu/fMsFa",
  },
});

export const uploadToS3 = async (
  file: File,
  fileName: string
): Promise<string> => {
  const params = {
    Bucket: "stream-nest",
    Key: fileName, // Using the actual file name here
    Body: file,
    ContentType: file.type,
    ACL: "public-read" as "public-read", // Ensure file is public after upload
  };

  try {
    const upload = new Upload({
      client: s3Client,
      params: params,
    });

    const result = await upload.done();
    return result.Location as string; // Return the public URL of the uploaded video
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const listVideosFromS3 = async (): Promise<any[]> => {
  const params = {
    Bucket: "stream-nest",
    Prefix: "", // Specify the folder or prefix if needed
  };

  try {
    const command = new ListObjectsV2Command(params);
    const data = await s3Client.send(command);
    return data.Contents || []; // Contents holds the list of objects
  } catch (error) {
    console.error("Error listing videos:", error);
    throw error;
  }
};
