import styles from "./contacts.module.scss";
import layoutStyles from "../command-layout.module.scss";
import EmailIcon from "../../../assets/email.svg?react";
import GithubIcon from "../../../assets/github.svg?react";
import PhoneIcon from "../../../assets/phone.svg?react";
import TelegrIcon from "../../../assets/telegr.svg?react";
import VkIcon from "../../../assets/vk.svg?react";
import WhatsappIcon from "../../../assets/whatsapp.svg?react";

function Contacts() {
  return (
    <div className={layoutStyles.wrapper}>
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <EmailIcon className={styles.icon} />{" "}
          <a
            className={styles.link}
            href="mailto:flydecisive@yandex.ru"
            target="_blank"
          >
            flydecisive@yandex.ru
          </a>
        </li>
        <li className={styles.contact}>
          <GithubIcon className={styles.icon} />{" "}
          <a
            className={styles.link}
            href="https://github.com/flydecisive"
            target="_blank"
          >
            https://github.com/flydecisive
          </a>
        </li>
        <li className={styles.contact}>
          <PhoneIcon className={styles.icon} />{" "}
          <a className={styles.link} href="tel:89044262217" target="_blank">
            89044262217
          </a>
        </li>
        <li className={styles.contact}>
          <TelegrIcon className={styles.icon} />{" "}
          <a
            className={styles.link}
            href="https://t.me/flydecisive_original"
            target="_blank"
          >
            https://t.me/flydecisive_original
          </a>
        </li>
        <li className={styles.contact}>
          <VkIcon className={styles.icon} />{" "}
          <a
            className={styles.link}
            href="https://vk.com/flydecisive"
            target="_blank"
          >
            https://vk.com/flydecisive
          </a>
        </li>
        <li className={styles.contact}>
          <WhatsappIcon className={styles.icon} />{" "}
          <a
            className={styles.link}
            href="https://wa.me/7044272217"
            target="_blank"
          >
            89044262217
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
