import { useState, type ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import Buttom from "./Components/Buttom";
import Card from "./Components/Card";
import { ProductsList } from "./Data/ProductsList";
import Modal from "./Components/UI/Model";
import { formInputsList } from "./Data/formInputsList";
import Input from "./Components/UI/Input";
import type { IProduct } from "./Interfaces/IProduct";
import ErrorMessage from "./Components/UI/ErorrMessage";
import { productValidation } from "./Validation";
import Select from "./Components/UI/Select";
import { categories } from "./Data/categories";

function App() {
  const defaultProductObj = {
    id: uuid(),
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // State to manage the modal visibility
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [Products, setProducts] = useState<IProduct[]>(ProductsList);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Functions to handle form submission
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });

    const { title, description, price, imageURL } = product;

    const validationErrors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    setErrors(validationErrors);
  };

  const submitHandler = () => {
    const { title, description, price, imageURL } = product;

    const validationErrors = productValidation({
      title,
      description,
      price,
      imageURL,
    });

    setErrors(validationErrors);

    // If there are no errors, you can proceed to add the product logic here
    if (Object.values(validationErrors).every((err) => !err)) {
      // Add product logic here
      setProduct(defaultProductObj);
      setIsOpen(false);
      setProducts((prevProducts) => [
        { 
          ...product,
          id: uuid(),
           category: selectedCategory
           },
        ...prevProducts,
      ]);
    }
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setIsOpen(false);
  };

  // Variable to show input of products
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  return (
    <>
      <Buttom className="bg-amber-300 " width="w-fit" onClick={openModal}>
        Add Product{" "}
      </Buttom>
      {/* Removed count as it is undefined */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {Products.map((product) => {
            const id = product.id ?? uuid();

            return (
              <Card key={id} {...product} id={id} />
            );
          })}

        {/* ADD PRODUCT MODAL */}
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="ADD A NEW PRODUCT"
        >
          <form className="space-y-3" onSubmit={submitHandler}>
            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            {renderFormInputList}

            <div className="flex items-center space-x-3">
              <Buttom
                className="bg-indigo-700 hover:bg-indigo-800"
                type="submit"
              >
                Submit
              </Buttom>
              <Buttom
                type="button"
                className="bg-[#f5f5fa] hover:bg-gray-300 !text-black"
                onClick={onCancel}
              >
                Cancel
              </Buttom>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default App;
