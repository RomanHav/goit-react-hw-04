import ImageCard from "./ImageCard/ImageCard";

export default function ImageGallery({ photos }) {
  return (
    <ul>
      {photos.map((photo) => {
        <li key={photo.id}>
          <ImageCard photos={photo} />
        </li>;
      })}
    </ul>
  );
}