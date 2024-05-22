import ImageCard from "./ImageCard/ImageCard";
import css from './ImageGallery.module.css'
export default function ImageGallery({ photos }) {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard photos={photo} />
          </li>
        );
      })}
    </ul>
  );
}
