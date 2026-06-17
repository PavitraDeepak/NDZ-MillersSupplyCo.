import { useEffect, useRef } from 'react';
import { LogOut, X } from 'lucide-react';

function LogoutDialog({ isOpen, onConfirm, onCancel }) {
  const dialogRef = useRef(null);
  const cancelBtnRef = useRef(null);

  // Trap focus + ESC key handling
  useEffect(() => {
    if (isOpen) {
      cancelBtnRef.current?.focus();
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onCancel();
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="logout-dialog-title"
        className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-[400px] p-0 overflow-hidden animate-[scaleIn_250ms_ease-out]"
      >
        {/* Close button */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center pt-8 pb-6 px-6">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-5 ring-4 ring-red-100/60">
            <LogOut size={28} className="text-red-500" />
          </div>

          <h2
            id="logout-dialog-title"
            className="text-xl font-bold text-gray-900 mb-2"
          >
            Log Out
          </h2>
          <p className="text-gray-500 text-sm text-center leading-relaxed">
            Are you sure you want to log out? You will need to sign in again to
            access your account.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            ref={cancelBtnRef}
            onClick={onCancel}
            className="flex-1 h-11 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 active:scale-[0.98] transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 h-11 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 active:scale-[0.98] transition-all shadow-lg shadow-red-200 cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutDialog;
