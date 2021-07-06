import React from "react";
import { Link } from "react-router-dom";

import settingScss from '../_setting.scss';

const settingLinks = [
  {
    name: 'Accounts',
    link: '/home',
    icon: 'fa-bank'
  }, {
    name: 'Contacts',
    link: '/setting/contact',
    icon: 'fa-address-book'
  }, {
    name: 'Configuration',
    link: '/config',
    icon: 'fa-gears',
    disabled: true
  },{
    name: 'Backup',
    link: '/backup',
    icon: 'fa-download',
    disabled: true
  }, {
    name: 'Import',
    link: '/import',
    icon: 'fa-upload',
    disabled: true
  }, {
    name: 'Theme',
    link: '/theme',
    icon: 'fa-paint-brush',
    disabled: true
  }
];

const Dashboard = () => {
  return (
    <>
      <h2 className="col-12">Settings</h2>
      {
        settingLinks.map(setting => (
          <Link to={setting.link}
            className={`${settingScss.settingItem} ${setting.disabled ? settingScss.iconDisabled : ''} col-12 col-sm-6 col-md-4`}
          >
            <div className={`col-12 ${settingScss.itemContainer}`}>
              <span className={`${settingScss.iconContainer}`}>
                <i className={`fa fa-2x ${setting.icon}`}/>
              </span>
              <span>{setting.name}</span>
            </div>
          </Link>
        ))
      }
    </>
  );
};

export default Dashboard;