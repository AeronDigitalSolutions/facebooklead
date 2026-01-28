import { useNavigate } from "react-router-dom";
import styles from "../../styles/dashbaord/addaccounts.module.css";
import meta from '../../assets/home/images-removebg-preview.png'
import { IoShieldCheckmark } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import meta_right from '../../assets/home/download.png'
import { FaMessage } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function AddAccounts() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Connect Meta Account</h1>
        <p>
          Securely connect your Facebook, Instagram & WhatsApp to start capturing
          and converting leads.
        </p>
      </div>


      
 <div className={styles.meta_banner}>
      <div className={styles.meta_left}>
        <div ><IoShieldCheckmark  className={styles.shield_icon}/></div>
        <span className={styles.meta_text}>
          <strong>Trusted with Meta authentication</strong>
          <span className="dot">•</span>
          LeadFlow is a verified business partner of Meta
        </span>
      </div>

      <div className={styles.meta_right}>
        <img src={meta} alt="meta" />
      </div>
    </div>
     

      <div className={styles.grid}>
        {/* LEFT CONTENT */}
        {/* <h1> Connect you Meta Accounts</h1> */}
        <div className={styles.info}>
           <h1> Connect you Meta Accounts</h1>
           <p>Login secrurly to start caputuring leads from facebooks, instagram ,and whatsapp.</p>

           <div className={styles.box}>
          <h3>What will happen?</h3>

          <ul>
            <li> You’ll login with your Meta account</li>
            <li> Grant permission to access business assets</li>
            <li> Select which Pages & Ad Accounts to connect</li>
          </ul>
          </div>

          <div className={styles.box_Add}>
            <div className={styles.display_meta}>
            <h4>We will access</h4>
            <ul>
              <li>Facebook Pages</li>
              <li>Instagram Business Account</li>
              <li>Ad Accounts</li>
              <li>Lead Forms & Messages</li>
            </ul>
            </div>
            <div className={styles.boxLight}>
            <h4>We will NOT access:</h4>
           
             <RxCross1 className={styles.cross}/>Personal messages<br></br>
              <RxCross1 className={styles.cross}/>Personal posts<br></br>
             <RxCross1 className={styles.cross}/> Private data
           
          </div>
          </div>

  

          {/* <p className={styles.time}>⏱ Takes about 2 minutes</p> */}
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <div className={styles.status}><img src={meta_right} alt="meta_right"/>
            <span className={styles.dot}></span>
            Meta account not connected
          </div>

          <button
            className={styles.connectBtn}
            onClick={() => navigate("/dashboard/integrations/meta")}
          >
            Continue with Meta
          </button>

          <p className={styles.note}>
            You can disconnect your Meta account anytime from settings.
          </p>
        </div>
      </div>


       <p className={styles.time}>
        <p className={styles.add_bottom}>
           <FaMessage style={{color:'grey'}} /> <span>NEED HELP ?</span>Contact Our Support if you need any assitance 
        </p>
        <div className={styles.support}>Contact Support <MdKeyboardArrowRight /></div>
       </p>
    </div>
  );
}
