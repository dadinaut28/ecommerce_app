import { useState, type SyntheticEvent } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { createNewProduct, InputError, ServerError } from "../queries";

interface NewProductFormProps {
  onNewProductFormClose: () => void;
  onNewProductFormInputMissing: () => void;
  onNewProductCreationSuccess: () => void;
  onNewProductFormInputError: () => void;
  onServerError: () => void;
}

export function NewProductForm({
  onNewProductFormClose,
  onNewProductFormInputMissing,
  onNewProductCreationSuccess,
  onNewProductFormInputError,
  onServerError,
}: NewProductFormProps) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [stocked, setStocked] = useState("false");
  const [loading, setLoading] = useState(false);
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleFormSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (
      productName &&
      description &&
      price &&
      code &&
      category &&
      stocked &&
      productImage
    ) {
      setLoading(true);
      try {
        await createNewProduct(
          productName,
          description,
          price,
          code,
          stocked,
          category,
          productImage,
        );
        setLoading(false);
        onNewProductCreationSuccess();
        setProductName("");
        setDescription("");
        setCategory("");
        setCode("");
        setPrice(0);
        onNewProductFormClose();
      } catch (err) {
        if (err instanceof InputError) {
          onNewProductFormInputError();
        } else if (err instanceof ServerError) {
          onServerError();
        }
        setLoading(false);
      }
    } else {
      onNewProductFormInputMissing();
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="absolute w-[320px] shadow-lg flex flex-col px-4 pt-10 pb-5 left-1/2 -translate-x-1/2 mt-2 z-10 bg-white"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          onNewProductFormClose();
        }}
        className="absolute top-5 right-10"
      >
        <span className="absolute rotate-45 bg-black h-1 w-8"></span>
        <span className="absolute -rotate-45 bg-black h-1 w-8"></span>
      </button>
      <Input
        className="pl-2 py-2 border border-gray-400 my-2"
        placeholder="Nom du produit"
        value={productName}
        onChange={setProductName}
      />
      <Input
        className="pl-2 py-2 border border-gray-400 my-2"
        placeholder="Description"
        value={description}
        onChange={setDescription}
      />
      <Input
        type="number"
        className="pl-2 py-2 border border-gray-400 my-2"
        placeholder="Prix"
        value={price}
        onChange={setPrice}
      />
      <Input
        className="pl-2 py-2 border border-gray-400 my-2"
        placeholder="Code"
        value={code}
        onChange={setCode}
      />
      <Input
        className="pl-2 py-2 border border-gray-400 my-2"
        placeholder="Catégorie"
        value={category}
        onChange={setCategory}
      />
      <Input
        className="stocked pl-2 py-2 border border-gray-400 my-2"
        placeholder="Stocked"
        value={stocked}
        onChange={setStocked}
      />
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setProductImage(e.target.files[0]);
          }
        }}
      />
      <Button
        disabled={loading}
        className="bg-pink-500 mt-2 py-1.5 text-white font-bold"
        content={loading ? "Création..." : "Créer"}
      />
    </form>
  );
}
