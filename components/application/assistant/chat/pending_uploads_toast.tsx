import React, { useState } from 'react';

interface PendingUpload {
  audioBlob: Blob;
}

interface Props {
  pendingUploads: PendingUpload[];
}

const PendingUploadsToast: React.FC<Props> = ({ pendingUploads }) => {
  const [pendingUploadsExpanded, setPendingUploadsExpanded] = useState(false);

  if (pendingUploads.length === 0) {
    return null;
  }

  return (
    <div
      className={`toast bg-info rounded-md z-20 ${pendingUploadsExpanded ? "h-1/3" : "h-16"}`}
      onClick={() => setPendingUploadsExpanded(!pendingUploadsExpanded)}
    >
        <div className="toast-header">Pending uploads</div>
        <div className="flex flex-col overflow-auto">
        {pendingUploads.map((uploadData, i) => (
            <audio
            key={i} // Consider using a unique ID for the key if available
            controls
            src={URL.createObjectURL(uploadData.audioBlob)}
            className='h-8 min-h-8 w-11/12 pb-1'
            />
        ))}
        </div>
    </div>
  );
}

export default PendingUploadsToast;
