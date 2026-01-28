import { NavLink, useNavigate, Outlet } from "react-router-dom";
import styles from "../styles/dashboard.module.css";
import { FaRegCircleDot } from "react-icons/fa6";
import { MdDownloadForOffline, MdOutlineBorderClear, MdFormatAlignJustify } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineForm } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";
// import { MdKeyboardArrowDown } from "react-icons/md";
import imgp from '../../src/assets/home/image-1.png'



export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className={styles.wrapper}>
      {/* SIDEBAR */}
      <aside
        className={styles.sidebar}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* TOP CONTENT */}
        <div>
          <div className={styles.logo}>LeadFlow</div>

        <nav className={styles.menu}>
          {/* <NavLink
            to="/dashboard"
           
          >
            <FaRegCircleDot /> Dashboard
          </NavLink> */}
          <nav className={styles.menu}>
            <div className={styles.item} onClick={() => navigate("/dashboard")}>
              Dashboard
            </div>

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
            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/add-accounts")}
            >
              Add Accounts
            </div>

            <div className={styles.section}>Ad Accounts</div>

          <NavLink
            to="/dashboard/leads"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <IoPersonSharp /> Leads
          </NavLink>
            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/campaigns")}
            >
              Campaigns
            </div>

          <NavLink
            to="/dashboard/campaigns"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <MdOutlineBorderClear /> Campaigns
          </NavLink>
            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/leads")}
            >
              Leads
            </div>

            <div
              className={styles.subItem}
              onClick={() => navigate("/dashboard/email-leads")}
            >
              Email Leads
            </div>

            <div className={styles.section}>Forms</div>

          <NavLink
            to="/dashboard/form"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <AiOutlineForm /> Form Builder
          </NavLink>
            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/form")}
            >
              Form Builder
            </div>

          <NavLink
            to="/dashboard/forms"
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
          >
            <MdFormatAlignJustify /> Form List
          </NavLink>
            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/forms")}
            >
              Form List
            </div>

          <div className={styles.section}>Google Ads</div>
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


            <div className={styles.userBox}>
      <img
        src={imgp}
        alt="user"
        className={styles.avatar}
      />

      <div className={styles.userInfo}>
        <span className={styles.userName}>John Doe</span>
        <span className={styles.userEmail}>john@leadflow.io</span>
      </div>
            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/google/accounts")}
            >
              Google Accounts
            </div>

            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/google/campaigns")}
            >
              Google Campaigns
            </div>

            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/google/leads")}
            >
              Google Leads
            </div>

      {/* <MdKeyboardArrowDown className={styles.arrow} /> */}
    </div>
        </nav>
            <div className={styles.section}>Email</div>

            <div
              className={styles.item}
              onClick={() => navigate("/email/connect")}
            >
              Email Connection
            </div>

            <div
              className={styles.item}
              onClick={() => navigate("/email/accounts")}
            >
              Email Accounts
            </div>

            <div
              className={styles.item}
              onClick={() => navigate("/email/inbox")}
            >
              Inbox
            </div>

            <div className={styles.section}>Instagram</div>

            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/instagram/connect")}
            >
              Connect Instagram
            </div>

            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/instagram/accounts")}
            >
              Instagram Accounts
            </div>

            <div
              className={styles.item}
              onClick={() => navigate("/dashboard/instagram/inbox")}
            >
              Instagram Inbox
            </div>
          </nav>
        </div>

        {/* 🔴 LOGOUT BUTTON */}
        <div
          style={{
            padding: "16px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "10px",
              background: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      {/* CHILD ROUTES */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
