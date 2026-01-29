import { NavLink, useNavigate, Outlet } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdDownloadForOffline, MdOutlineBorderClear, MdFormatAlignJustify } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineForm } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import imgp from '../../src/assets/home/image-1.png'



export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>LeadFlow</div>

        <nav className={styles.menu}>
          {/* <NavLink
            to="/dashboard"
           
          >
            <FaRegCircleDot /> Dashboard
          </NavLink> */}

          <div className={styles.item} 
          onClick={() => navigate("/dashboard")}> 
          <FaRegCircleDot style={{ color: '#9ca3af' }} /> Dashboard </div>


          <NavLink
            to="/dashboard/add-accounts"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <MdDownloadForOffline /> Add Accounts
          </NavLink>

          <NavLink
            to="/dashboard/leads"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <IoPersonSharp /> Leads
          </NavLink>

          <NavLink
            to="/dashboard/campaigns"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <MdOutlineBorderClear /> Campaigns
          </NavLink>

          <div className={styles.section}>Forms</div>

          <NavLink
            to="/dashboard/form"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <AiOutlineForm /> Form Builder
          </NavLink>

          <NavLink
            to="/dashboard/forms"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <MdFormatAlignJustify /> Form List
          </NavLink>

          <div className={styles.section}>Google Ads</div>

          <NavLink
            to="/dashboard/google/accounts"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <BiSolidUserAccount /> Google Accounts
          </NavLink>

          <NavLink
            to="/dashboard/google/campaigns"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <SlNotebook /> Google Campaigns
          </NavLink>

          <NavLink
            to="/dashboard/google/leads"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            Google Leads
          </NavLink>


        </nav>
      </aside>

      {/* CONTENT */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
