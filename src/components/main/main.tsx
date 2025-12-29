import { services } from "../../utils/data";
import styles from "./main.module.css";
import ServiceDetail from "../service-detail/service-detail";
import Total from "../total/total";

function Main() {
  return (
    <main className={styles.main}>
      <section>
        <h1 className={styles.title}>Дополнительные услуги</h1>
        <div className={styles.container}>
          <section>
            <div className={styles.services}>
              {services.map((service) => {
                return <ServiceDetail key={service.id} service={service} />;
              })}
            </div>
          </section>

          <Total />
        </div>
      </section>
    </main>
  );
}

export default Main;
