import { UseFormRegisterReturn } from 'react-hook-form';
import { MdOutlineSearchOff } from 'react-icons/md';

import CheckboxInput from '@/components/CheckboxInput';
import Spinner from '@/components/Spinner';

import { ItemReturn } from '@/types/item';

import { priceToBrazilCurrency } from '@/utils/priceToBrazilCurrency';

import styles from './styles.module.css';

export interface SearchItemsListProps {
  filteredItems: ItemReturn[];
  register: UseFormRegisterReturn;
  gettingProducts: boolean;
}

export default function SearchItemsList({
  filteredItems,
  register,
  gettingProducts,
}: SearchItemsListProps) {
  return (
    <div className={styles.searchItemsList}>
      {gettingProducts ? (
        <div className={styles.searchingItems}>
          <p>Buscando itens</p>
          <Spinner size={32} color="#000" />
        </div>
      ) : null}

      {!gettingProducts &&
        (filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <CheckboxInput
              text={`${item.name} - ${priceToBrazilCurrency(
                Number(item.price)
              )}`}
              id={item.id}
              register={register}
              key={`${item.id}-label`}
            />
          ))
        ) : (
          <div className={styles.noProductsFound}>
            <MdOutlineSearchOff size={28} />
            <p>Nenhum item encontrado</p>
          </div>
        ))}
    </div>
  );
}
