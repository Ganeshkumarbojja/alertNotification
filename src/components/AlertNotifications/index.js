import {AiFillCheckCircle} from 'react-icons/ai'

import {GrFormClose as Close} from 'react-icons/gr'

import {MdWarning, MdInfo} from 'react-icons/md'

import {RiErrorWarningFill} from 'react-icons/ri'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="app-head">Alert Notifications</h1>
    <Notification>
      <div className="notification-content">
        <div className="icon-content">
          <AiFillCheckCircle className="icon success" />
          <div className="content">
            <h1 className="notification-head success">Success</h1>
            <p className="notification-para">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </div>
      <Close className="close" />
    </Notification>
    <Notification>
      <div className="notification-content">
        <div className="icon-content">
          <RiErrorWarningFill className="icon error" />
          <div className="content">
            <h1 className="notification-head error">Error</h1>
            <p className="notification-para">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </div>
      <Close className="close" />
    </Notification>
    <Notification>
      <div className="notification-content">
        <div className="icon-content">
          <MdWarning className="icon warning" />
          <div className="content">
            <h1 className="notification-head warning">Warning</h1>
            <p className="notification-para">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </div>
      <Close className="close" />
    </Notification>
    <Notification>
      <div className="notification-content">
        <div className="icon-content">
          <MdInfo className="icon info" />
          <div className="content">
            <h1 className="notification-head info">Info</h1>
            <p className="notification-para">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </div>
      <Close className="close" />
    </Notification>
  </div>
)

export default AlertNotifications
