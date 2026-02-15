import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { deleteProduct, updateProduct } from "../queries";

export function ProductRow({
  product,
  onUpdateProductFormInputMissing,
  reloadProducts,
}) {
  const [showUpdateProductForm, setShowUpdateProductForm] = useState(false);
  const [newProductName, setNewProductName] = useState(product.name);
  const [newProductDescription, setNewProductDescription] = useState(
    product.description,
  );
  const [newProductCode, setNewProductCode] = useState(product.code);
  const [newProductCategory, setNewProductCategory] = useState(
    product.category,
  );
  const [newProductPrice, setNewProductPrice] = useState(product.price);
  const [newProductStocked, setNewProductStocked] = useState(product.stocked);
  // POTENTIAL ERROR HERE
  const [newProductImage, setNewProductImage] = useState<File | null>(null);
  const [
    showProductDeleteConfirmationMessage,
    setShowProductDeleteConfirmationMessage,
  ] = useState(false);

  const handleUpdateProductFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (
        newProductName &&
        newProductDescription &&
        newProductCode &&
        newProductCategory &&
        newProductPrice
      ) {
        await updateProduct(
          product.id,
          newProductName,
          newProductDescription,
          newProductCode,
          newProductPrice,
          newProductCategory,
          newProductImage,
        );
        setShowUpdateProductForm(false);
        await reloadProducts();
      } else {
        onUpdateProductFormInputMissing();
      }
    } catch (err) {
      //
    }
  };

  const updateFormRef = useRef<HTMLFormElement | null>(null);

  const handleOutsideClickWhenUpdateFormOn = (e: MouseEvent) => {
    if (
      updateFormRef.current &&
      !updateFormRef.current.contains(e.target as Node)
    ) {
      if (showUpdateProductForm) setShowUpdateProductForm(false);
    }
  };

  useEffect(() => {
    if (showUpdateProductForm) {
      document.body.addEventListener(
        "mousedown",
        handleOutsideClickWhenUpdateFormOn,
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClickWhenUpdateFormOn,
      );
    };
  }, [showUpdateProductForm]);

  return (
    <div className="flex justify-between px-2.5 py-3 border border-gray-400 my-5">
      {showUpdateProductForm && (
        <form
          ref={updateFormRef}
          onSubmit={handleUpdateProductFormSubmit}
          className="absolute flex flex-col gap-6 bg-gray-100 z-10 w-[320px] left-[50%] -translate-x-[50%] py-2.5 px-2.5 border border-gray-300 top-5"
        >
          <Input
            className="border border-gray-400 pl-2 py-2"
            placeholder="Name"
            value={newProductName}
            onChange={setNewProductName}
          />
          <Input
            className="border border-gray-400 pl-2 py-2"
            placeholder="Description"
            value={newProductDescription}
            onChange={setNewProductDescription}
          />
          <Input
            className="border border-gray-400 pl-2 py-2"
            placeholder="Code"
            value={newProductCode}
            onChange={setNewProductCode}
          />
          <Input
            className="border border-gray-400 pl-2 py-2"
            placeholder="Price"
            value={newProductPrice}
            onChange={setNewProductPrice}
          />
          <Input
            className="border border-gray-400 pl-2 py-2"
            placeholder="Category"
            value={newProductCategory}
            onChange={setNewProductCategory}
          />
          <Input
            className="border border-gray-400 pl-2 py-2"
            placeholder="Stocked"
            value={newProductStocked}
            onChange={setNewProductStocked}
          />
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setNewProductImage(e.target.files[0]);
              }
            }}
          />
          <Button
            className="px-3 py-1.5 text-white bg-pink-500"
            content="Modifier"
          />
        </form>
      )}
      {showProductDeleteConfirmationMessage && (
        <div className="absolute bg-gray-300 border border-gray-500 p-2.5 top-0 right-2.5">
          <p className="text-blue-950 font-bold mb-5">
            Voulez-vous vraiment supprimer ce produit ?
          </p>
          <div className="flex gap-3">
            <Button
              className="px-5 bg-amber-100"
              content="Oui"
              onClick={async () => {
                await deleteProduct(product.id);
                await reloadProducts();
              }}
            />
            <Button
              onClick={() => setShowProductDeleteConfirmationMessage(false)}
              className="px-5 bg-amber-100"
              content="Non"
            />
          </div>
        </div>
      )}
      <p className="w-1/5 truncate">{product.name}</p>
      <p>{product.code}</p>
      <p>{product.price}</p>
      <div className="flex gap-2">
        <Button
          content="Modifier"
          onClick={() => setShowUpdateProductForm(true)}
          className="bg-amber-300"
        />
        <Button
          content="Supprimer"
          className="bg-red-600"
          onClick={() => {
            setShowProductDeleteConfirmationMessage(true);
          }}
        />
      </div>
    </div>
  );
}
