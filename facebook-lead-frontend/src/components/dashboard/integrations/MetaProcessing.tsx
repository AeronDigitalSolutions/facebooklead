import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/dashbaord/metaProcessing.module.css";

const STEPS = [
  "Authenticating with Meta",
  "Verifying permissions",
  "Fetching business assets",
  "Preparing account setup",
];

export default function MetaProcessing() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            navigate("/dashboard/integrations/meta/assets");
          }, 800);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.spinner}></div>

        <h2>Connecting your Meta account</h2>
        <p>Please wait while we securely connect your account.</p>

        <div className={styles.steps}>
          {STEPS.map((step, index) => (
            <div
              key={step}
              className={`${styles.step} ${
                index <= currentStep ? styles.active : ""
              }`}
            >
              {index <= currentStep ? "✔" : "○"} {step}
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Do not close or refresh this page.
        </p>
      </div>
    </div>
  );
}
