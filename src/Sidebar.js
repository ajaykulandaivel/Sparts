import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faChartLine,
  faCalendarAlt,
  faCog,
  faSignOutAlt,
  faSearch,
  faBell
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="h-screen bg-violet-800 text-white w-16 flex flex-col items-center py-4">
        <div className="mt-8 mb-8">
          <FontAwesomeIcon icon={faUser} size="1x" />
        </div>
        <div className="mb-8">
          <FontAwesomeIcon icon={faGraduationCap} size="1x" />
        </div>
        <div className="mb-8">
          <FontAwesomeIcon icon={faChartLine} size="1x" />
        </div>
        <div className="mb-8">
          <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
        </div>
        <div className="mb-8">
          <FontAwesomeIcon icon={faCog} size="1x" />
        </div>
        <div className="mt-auto mb-4">
          <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
