import React from 'react';
import { FaBell } from 'react-icons/fa';

interface Props {
  openQuestions: number;
  newTopics: number;
}

const NoticeBell: React.FC<Props> = ({ openQuestions, newTopics }) => {
  return (
    <div className="relative">
      <FaBell className="text-gray-600 w-8 h-8" />
      { newTopics > 0 && <div className="absolute top-0 -left-3 flex items-center justify-center h-5 w-5 bg-blue-500 text-white rounded-full text-xs">
        {newTopics}
      </div> }
      { openQuestions > 0 && <div className="absolute top-0 -right-3 flex items-center justify-center h-5 w-5 bg-red-500 text-white rounded-full text-xs">
        {openQuestions}
      </div> }
    </div>
  );
};

export default NoticeBell;