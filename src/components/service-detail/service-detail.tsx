import type { FC } from "react";
import Card from "../card/card";
import styles from "./service-detail.module.css";
import type { TService } from "../../utils/types";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { ADD_SERVICE } from "../../services/actions/order";

type TServiceDetail = {
  service: TService;
};

const ServiceDetail: FC<TServiceDetail> = ({ service }) => {
  const dispatch = useDispatch();

  function handlerButtonClick() {
    dispatch({
      type: ADD_SERVICE,
      service: service,
    });
  }

  return (
    <Card extraClass={styles.container}>
      <h3 className={styles.name}>{service.name}</h3>
      <p>Цена: {service.price} ₽</p>
      <Button styleType="add" type="button" onClick={handlerButtonClick}>
        Добавить
      </Button>
    </Card>
  );
};

export default ServiceDetail;
