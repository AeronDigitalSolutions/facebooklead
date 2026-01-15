import { useEffect, useState, useRef } from "react";
import { fetchMailboxes } from "../../../api/email";
import {
  fetchFolderEmails,
  syncFolder,
  fetchEmailById,
  replyToEmail,
  sendNewEmail,
} from "../../../api/inbox";
import { verifyEmail } from "../../../api/emailVerifier";
import styles from "../../../styles/dashbaord/inbox.module.css";

const FOLDERS = ["Inbox", "Sent", "Spam", "Trash"];

const SPAM_KEYWORDS = [
  "free",
  "win",
  "urgent",
  "offer",
  "guaranteed",
  "click here",
  "limited time",
  "act now",
];

export default function InboxPage() {
  const [mailboxes, setMailboxes] = useState<any[]>([]);
  const [mailboxId, setMailboxId] = useState("");
  const [folder, setFolder] = useState("Inbox");
  const [emails, setEmails] = useState<any[]>([]);
  const [activeEmail, setActiveEmail] = useState<any>(null);

  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);

  const [showCompose, setShowCompose] = useState(false);
  const [composeTo, setComposeTo] = useState("");
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");

  const [verifyResult, setVerifyResult] = useState<any>(null);
  const [verifying, setVerifying] = useState(false);

  const [spamScore, setSpamScore] = useState(0);
  const [spamLevel, setSpamLevel] = useState<
    "low" | "medium" | "high" | null
  >(null);

  const verifyTimeout = useRef<any>(null);

  /* =======================
     INITIAL LOAD
  ======================= */
  useEffect(() => {
    fetchMailboxes().then((res) => setMailboxes(res.data));
  }, []);

  /* =======================
     LOAD EMAILS
  ======================= */
  const loadEmails = async () => {
    if (!mailboxId) return;
    const res = await fetchFolderEmails(mailboxId, folder);
    setEmails(res.data);
  };

  useEffect(() => {
    loadEmails();
  }, [mailboxId, folder]);

  /* =======================
     OPEN EMAIL
  ======================= */
  const openEmail = async (id: string) => {
    const res = await fetchEmailById(id);
    setActiveEmail(res.data);
    setShowCompose(false);
  };

  /* =======================
     SEND REPLY
  ======================= */
  const sendReply = async () => {
    if (!reply) return;
    setSending(true);
    await replyToEmail(activeEmail._id, reply);
    setReply("");
    setSending(false);
  };

  /* =======================
     EMAIL VERIFICATION (FIXED)
  ======================= */
  const handleVerifyEmail = (email: string) => {
    setComposeTo(email);

    if (verifyTimeout.current) clearTimeout(verifyTimeout.current);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ❌ Invalid format → immediate fail
    if (!emailRegex.test(email)) {
      setVerifyResult({
        status: "invalid",
        reasons: ["Invalid email format"],
      });
      setVerifying(false);
      return;
    }

    setVerifying(true);

    verifyTimeout.current = setTimeout(async () => {
      try {
        const res = await verifyEmail(email);
        setVerifyResult({
          status: res.data.status,
          reasons: res.data.reasons || [],
        });
      } catch {
        setVerifyResult({
          status: "invalid",
          reasons: ["Verification failed"],
        });
      } finally {
        setVerifying(false);
      }
    }, 600);
  };

  /* =======================
     SPAM RISK CALCULATION
  ======================= */
  useEffect(() => {
    let score = 0;

    if (verifyResult?.status === "risky") score += 25;

    if (/^(info|admin|support|sales|contact)@/i.test(composeTo)) {
      score += 15;
    }

    const subjectLower = composeSubject.toLowerCase();
    SPAM_KEYWORDS.forEach((word) => {
      if (subjectLower.includes(word)) score += 20;
    });

    if (
      composeSubject &&
      composeSubject === composeSubject.toUpperCase() &&
      composeSubject.length > 5
    ) {
      score += 10;
    }

    const bodyLower = composeBody.toLowerCase();
    SPAM_KEYWORDS.forEach((word) => {
      if (bodyLower.includes(word)) score += 20;
    });

    const linkCount = (composeBody.match(/https?:\/\//g) || []).length;
    if (linkCount > 3) score += 10;

    setSpamScore(score);

    if (score <= 20) setSpamLevel("low");
    else if (score <= 50) setSpamLevel("medium");
    else setSpamLevel("high");
  }, [composeTo, composeSubject, composeBody, verifyResult]);

  /* =======================
     SEND NEW EMAIL
  ======================= */
  const sendCompose = async () => {
    if (!composeTo || !composeSubject) return;

    if (
      verifyResult?.status === "invalid" ||
      verifyResult?.status === "not_exist"
    ) {
      alert("Invalid or non-existent email address");
      return;
    }

    if (spamLevel === "high") {
      const confirmSend = confirm(
        "⚠️ High spam risk detected. Are you sure you want to send?"
      );
      if (!confirmSend) return;
    }

    setSending(true);
    await sendNewEmail(mailboxId, composeTo, composeSubject, composeBody);

    setComposeTo("");
    setComposeSubject("");
    setComposeBody("");
    setVerifyResult(null);
    setSpamScore(0);
    setSpamLevel(null);
    setShowCompose(false);
    setSending(false);
  };

  return (
    <div className={styles.hostingerLayout}>
      {/* =======================
         SIDEBAR
      ======================= */}
      <aside className={styles.sidebar}>
        <button
          className={styles.newMessage}
          onClick={() => {
            setShowCompose(true);
            setActiveEmail(null);
          }}
          disabled={!mailboxId}
        >
          ✎ New message
        </button>

        {FOLDERS.map((f) => (
          <div
            key={f}
            className={folder === f ? styles.activeFolder : styles.folder}
            onClick={() => {
              setFolder(f);
              setActiveEmail(null);
              setShowCompose(false);
            }}
          >
            {f}
          </div>
        ))}
      </aside>

      {/* =======================
         MAIN
      ======================= */}
      <main className={styles.main}>
        {/* 🔍 TOP BAR (RESTORED) */}
        <div className={styles.topBar}>
          <input placeholder="Search mail" />
          <select onChange={(e) => setMailboxId(e.target.value)}>
            <option value="">Select mailbox</option>
            {mailboxes.map((m) => (
              <option key={m._id} value={m._id}>
                {m.email}
              </option>
            ))}
          </select>
          <button onClick={() => syncFolder(mailboxId, folder)}>⟳ Sync</button>
        </div>

        {/* 📩 MAIL LIST */}
        {!activeEmail && !showCompose && (
          <div className={styles.mailList}>
            {emails.map((e) => (
              <div
                key={e._id}
                className={styles.mailRow}
                onClick={() => openEmail(e._id)}
              >
                <input type="checkbox" />
                <div className={styles.mailText}>
                  <div className={styles.sender}>
                    {folder === "Sent" ? e.to : e.from}
                  </div>
                  <div className={styles.subject}>{e.subject}</div>
                </div>
                <div className={styles.date}>
                  {new Date(e.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ✍️ COMPOSE */}
        {showCompose && (
          <div className={styles.compose}>
            <input
              placeholder="To"
              value={composeTo}
              onChange={(e) => handleVerifyEmail(e.target.value)}
            />

            {verifying && <div className={styles.verifyBox}>Checking email…</div>}

            {verifyResult && !verifying && (
              <div
                className={`${styles.verifyBox} ${styles[verifyResult.status]}`}
              >
                {verifyResult.status.toUpperCase()}
                {verifyResult.reasons?.length > 0 &&
                  ` — ${verifyResult.reasons.join(", ")}`}
              </div>
            )}

            {spamLevel && (
              <div
                className={`${styles.spamBox} ${styles["spam" + spamLevel.charAt(0).toUpperCase() + spamLevel.slice(1)]}`}
              >
                Spam Risk: {spamLevel.toUpperCase()} ({spamScore})
              </div>
            )}

            <input
              placeholder="Subject"
              value={composeSubject}
              onChange={(e) => setComposeSubject(e.target.value)}
            />

            <textarea
              placeholder="Message"
              value={composeBody}
              onChange={(e) => setComposeBody(e.target.value)}
            />

            <button onClick={sendCompose} disabled={sending}>
              Send
            </button>
          </div>
        )}

        {/* 📖 READ EMAIL */}
        {activeEmail && (
          <div className={styles.openMail}>
            <h2>{activeEmail.subject}</h2>
            <p className={styles.openFrom}>{activeEmail.from}</p>

            <div
              className={styles.openBody}
              dangerouslySetInnerHTML={{
                __html: activeEmail.bodyHtml || activeEmail.bodyText,
              }}
            />

            <textarea
              placeholder="Reply…"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />

            <button onClick={sendReply} disabled={sending}>
              Send reply
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
