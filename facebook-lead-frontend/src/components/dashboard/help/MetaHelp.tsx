import styles from "../../../styles/dashbaord/metaHelp.module.css";

const FAQS = [
  {
    q: "Why does LeadFlow need access to my Meta account?",
    a: "We need access to fetch leads, messages, and campaign insights so our AI can help you convert customers efficiently.",
  },
  {
    q: "Will LeadFlow post or run ads on my behalf?",
    a: "No. LeadFlow never posts, messages, or runs ads without your explicit action or approval.",
  },
  {
    q: "What data does LeadFlow NOT access?",
    a: "We do not access personal messages, personal posts, or any private user data.",
  },
  {
    q: "Can I disconnect Meta anytime?",
    a: "Yes. You can disconnect Meta from the Integration Settings page at any time.",
  },
  {
    q: "What if my Meta connection fails?",
    a: "You can retry the connection or visit the Meta Error page for recovery options.",
  },
];

export default function MetaHelp() {
  return (
    <div className={styles.wrapper}>
      <h1>Meta Integration Help</h1>
      <p className={styles.subtitle}>
        Everything you need to know about connecting your Meta account.
      </p>

      <div className={styles.faqList}>
        {FAQS.map((f, i) => (
          <div key={i} className={styles.faq}>
            <h4>{f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      <div className={styles.contact}>
        <h3>Need more help?</h3>
        <p>
          Contact our support team or review Meta permissions from your Meta
          Business Manager.
        </p>
      </div>
    </div>
  );
}
