import { useEffect, useState } from "react";
import ImageModal from "../../ImageModal/ImageModal";
import css from "./ImageCard.module.css";

export default function ImageCard({ photos }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    isOpenModal
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [isOpenModal]);
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
