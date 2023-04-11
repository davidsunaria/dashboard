import React, { Fragment,useCallback,useState } from 'react';
import { Sidebar, Menu, MenuItem ,useProSidebar} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../styles.scss';


function Business() {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <Fragment>
        <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Sidebar
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      </main>
      </div>
  </Fragment>
  )
}

export default Business;
  