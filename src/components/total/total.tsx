import { useSelector } from "react-redux";
import Card from "../card/card";
import styles from "./total.module.css";
import type { TServiceWithCount } from "../../utils/types";
import Button from "../button/button";

function Total() {
  const { selectedServices } = useSelector((store: any) => store.order);

  function calculateTotalPrice(services: TServiceWithCount[]): number {
    let total = 0;
    services.forEach((service: TServiceWithCount) => {
      total += service.count * service.price;
    });
    return total;
  }

  function handlerButtonClick() {
    // Логика оформления заказа
  }

  return (
    <section>
      <Card>
        {selectedServices.length > 0 ? (
          <>
            {selectedServices.map((service: TServiceWithCount) => {
              return (
                <>
                  <div className={styles.lineTotal}>
                    <span>{service.name}</span>
                    <span className={styles.count}>{service.count} шт.</span>
                    <span className={styles.totalPriceService}>
                      {service.price * service.count} ₽
                    </span>
                  </div>
                  <hr />
                </>
              );
            })}

            <div className={styles.totalPriceServices}>
              <h2>Итого</h2>
              <span className={styles.totalPriceServicesValue}>
                {calculateTotalPrice(selectedServices)} ₽
              </span>
            </div>
          </>
        ) : (
          <p className={styles.textDefault}>Корзина пуста!</p>
        )}
      </Card>

      {selectedServices.length > 0 && (
        <div className={styles.containerButton}>
          <Button
            styleType="order"
            extraClass={styles.buttonCreateOrder}
            onClick={handlerButtonClick}
          >
            Оформить заказ
          </Button>
        </div>
      )}
    </section>
  );
}

export default Total;
