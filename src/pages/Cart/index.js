import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-skechers-burns-brantley-masculino/06/EUZ-1320-006/EUZ-1320-006_detalhe2.jpg?ims=326x"
                alt="product"
              />
            </td>
            <td>
              <strong>Black Sneaker</strong>
              <span>$99.00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#FFF" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#FFF" />
                </button>
              </div>
            </td>
            <td>
              <strong>$198.00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#FFF" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finish</button>

        <Total>
          <span>TOTAL</span>
          <strong>$198.00</strong>
        </Total>
      </footer>
    </Container>
  );
}
