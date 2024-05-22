import { useState } from "react";
import ImageModal from "../../ImageModal/ImageModal";
import css from './ImageCard.module.css'

export default function ImageCard({ photos }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function openModal() {
    setIsOpenModal(true);
  }
  function closeModal() {
    setIsOpenModal(false);
  }
  return (
    <div>
      <img
        className={css.imageItem}
        src={photos.urls.small}
        alt={photos.alt_description}
        onClick={openModal}
      />
      <ImageModal
        photo={photos}
        modalIsOpen={isOpenModal}
        modalIsClosed={closeModal}
        
      />
    </div>
  );
}
