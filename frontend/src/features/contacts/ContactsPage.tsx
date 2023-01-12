import styles from './styles.module.css';

function ContactsPage(): JSX.Element {
  return (
    <div className={styles.contact}>
      <h2>Связаться с нами</h2>
      <span>instagram: @wearejurgensons</span>
      <br />
      <span>email: wearejurgensons@gmail.com</span>
      <br />
      <span>telegram: @wearejurgensons</span>
    </div>
  );
}

export default ContactsPage;
