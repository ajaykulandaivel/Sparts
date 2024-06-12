import React from 'react'
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
import StudentManagement from './StudentManagement';
function Spart() {
  return (
    <div class="bg-purple-100 h-screen flex justify-center items-center relative">
     <div class="bg-purple-600 w-4/5 h-4/5 absolute rounded-3xl">
     <div className=" text-white w-16 h-16 flex flex-col rounded-3xl items-center py-9">
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
        <div className="mt-auto mb-8 py-48">
          <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
        </div>
    </div>
    <div className="w-3/4 h-3/4 bg-white rounded-[40px] flex items-center justify-end">
    </div>
      </div>
   </div>
  )
}

export default Spart;