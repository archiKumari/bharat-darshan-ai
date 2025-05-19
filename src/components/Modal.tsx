type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children?: React.ReactNode;
  };
  
  export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">{title}</h2>
          {children}
        </div>
      </div>
    );
  }
  