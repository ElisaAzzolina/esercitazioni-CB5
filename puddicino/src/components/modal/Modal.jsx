import "./index.css";

const Modal = ({ children, setModalEnabled }) => {
  const onHandleModal = () => setModalEnabled(false);
  return (
    <div className="Modal">
      <div className="content">{children}</div>
      <div className="overlay" onClick={onHandleModal}></div>
    </div>
  );
};

export default Modal;
