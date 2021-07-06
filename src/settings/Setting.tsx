import React from "react";
import { useLocation } from 'react-router-dom';

import SettingRoute from './setting.route';
import settingScss from './_setting.scss';

const Setting = () => {
  console.log(useLocation().pathname);
  return (
    <div className={`page-container row mx-0 ${settingScss.settings}`}>
      <SettingRoute/>
    </div>
  );
};

export default Setting;