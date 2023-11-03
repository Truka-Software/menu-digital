import { BsFillClockFill } from 'react-icons/bs';
import { FaMotorcycle } from 'react-icons/fa';

import styles from './styles.module.css';
import { getPaymentMethodIcon } from './utils';

export interface OrderInfoProps {
  clientName: string;
  clientPhone: string;
  clientAdress?: string;
  deliveryTax: string;
  deliveryTime: string;
  paymentMethod: string;
}

export default function OrderInfo({
  clientName,
  clientPhone,
  clientAdress,
  deliveryTax,
  deliveryTime,
  paymentMethod,
}: OrderInfoProps) {
  const PaymentMethodIcon = getPaymentMethodIcon(paymentMethod);

  return (
    <div className={styles.orderInfoWrapper}>
      <div className={styles.orderInfoContent}>
        <p>Pedido</p>
        <div className={styles.orderInfoItems} />
      </div>
      <div className={styles.orderInfoContactWrapper}>
        <p>Informações de contato</p>
        <div className={styles.orderInfoContacts}>
          <div className={styles.orderInfoContact}>
            <p>Nome</p>
            <p>{clientName}</p>
          </div>
          <div className={styles.orderInfoContact}>
            <p>Telefone</p>
            <p>{clientPhone}</p>
          </div>
        </div>
      </div>
      <div className={styles.orderInfoDeliveryWrapper}>
        {clientAdress ? (
          <>
            <p>Informações da entrega</p>
            <div>
              <p>Endereço</p>
              <p>{clientAdress}</p>
            </div>
          </>
        ) : (
          <>
            <p>Endereço para retirada</p>
            <h2>Endereço do estabelecimento</h2>
          </>
        )}
      </div>
      <div className={styles.orderInfoCompanyDelivery}>
        <div>
          <p>Taxa de entrega</p>
          <div>
            <FaMotorcycle size={24} />
            <p>{deliveryTax}</p>
          </div>
        </div>
        <div>
          <p>Tempo de espera</p>
          <div>
            <BsFillClockFill size={20} />
            <p>{deliveryTime}</p>
          </div>
        </div>
      </div>
      <div className={styles.orderInfoPaymentMethod}>
        <p>Forma de pagamento</p>
        <div>
          <PaymentMethodIcon size={24} />
          <p>{paymentMethod}</p>
        </div>
      </div>
    </div>
  );
}
