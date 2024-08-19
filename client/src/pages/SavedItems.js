import React from "react";
import ProductList from "../components/ProductList";

const SavedItems = () => {
  return (
    <div className="container">
      <section className="saved-items-container">
        <h3 className="title">Saved items</h3>
        <p>Check out your saved items for future use.</p>
      </section>

      <div className="tareas">
        <ul>
          <li>
            <input type="checkbox" id="tarea-1" />
            <label for="tarea-1">
              <h2 className="label-item">
                Brown bead Lisa Bag <span>$15.99 | 5 items in stock</span>
              </h2>
            </label>
          </li>

          <li>
            <input type="checkbox" id="tarea-2" />
            <label for="tarea-2">
              <h2 className="label-item">
                Cowrie Earrings <span> $25.99 | 50 items in stock</span>
              </h2>
            </label>
          </li>

          <li>
            <input type="checkbox" id="tarea-3" />
            <label for="tarea-3">
              <h2 className="label-item">
                Letty Bag<span>$25.99 | 20 items in stock</span>
              </h2>
            </label>
          </li>

          <li>
            <input type="checkbox" id="tarea-4" />
            <label for="tarea-4">
              <h2 className="label-item">
                Mira Bag<span>$15.99 | 30 items in stock</span>
              </h2>
            </label>
          </li>

          <li>
            <input type="checkbox" id="tarea-5" />
            <label for="tarea-5">
              <h2 className="label-item">
                Betty Pearls<span>$25.99 | 40 items in stock</span>
              </h2>
            </label>
          </li>
        </ul>
      </div>

      <ProductList numberOfProductsToLoad={4} from={23} to={29} />

      <br />
      <br />
    </div>
  );
};

export default SavedItems;
