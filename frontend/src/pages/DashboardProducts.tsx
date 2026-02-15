import { useEffect, useState } from "react";
import { verifyAdminToken } from "../utils/verifyAdminToken";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { NewProductForm } from "../components/NewProductForm";
import { ProductRowContainer } from "../sections/dashboardProductsSections/ProductRowContainer";
import { getProducts } from "../queries";

export function DashboardProducts() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    verifyAdminToken(navigate);
  });

  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const onNewProductFormClose = () => {
    setShowNewProductForm(false);
  };

  const [showMissingInputMessage, setShowMissingInputMessage] = useState(false);
  const [
    showNewProductCreationSuccessMessage,
    setShowNewProductCreationSuccessMessage,
  ] = useState(false);
  const [showInputErrorMessage, setShowInputErrorMessage] = useState(false);
  const [showServerErrorMessage, setShowServerErrorMessage] = useState(false);
  const [
    showUpdateProductFormInputMissingMessage,
    setShowUpdateProductFormInputMissingMessage,
  ] = useState(false);

  const reloadProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  const onNewProductFormInputMissing = async () => {
    setShowMissingInputMessage(true);
    setTimeout(() => {
      setShowMissingInputMessage(false);
    }, 2000);
  };

  const onNewProductCreationSuccess = async () => {
    setShowNewProductCreationSuccessMessage(true);
    setTimeout(() => {
      setShowNewProductCreationSuccessMessage(false);
    }, 2000);
    await reloadProducts();
  };

  const onNewProductFormInputError = () => {
    setShowInputErrorMessage(true);
    setTimeout(() => {
      setShowInputErrorMessage(false);
    }, 2000);
  };

  const onServerError = () => {
    setShowServerErrorMessage(true);
    setTimeout(() => {
      setShowServerErrorMessage(false);
    }, 2000);
  };

  const onUpdateProductFormInputMissing = () => {
    setShowUpdateProductFormInputMissingMessage(true);
    setTimeout(() => {
      setShowUpdateProductFormInputMissingMessage(false);
    }, 2000);
  };

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  return (
    <div className="px-3.5 relative">
      {showMissingInputMessage && (
        <div className="absolute py-2 px-5 right-5 top-5 bg-gray-300 border border-gray-400">
          <p className="font-bold text-lg text-blue-950">
            Tous les champs sont obligatoires !!
          </p>
        </div>
      )}
      {showUpdateProductFormInputMissingMessage && (
        <div className="absolute py-2 px-5 right-5 top-5 bg-gray-300 border border-gray-400">
          <p className="font-bold text-lg text-blue-950">
            Vérifiez les champs et réessayez !!
          </p>
        </div>
      )}
      {showNewProductCreationSuccessMessage && (
        <div className="absolute py-2 px-5 right-5 top-5 bg-gray-300 border border-gray-400">
          <p className="font-bold text-lg text-blue-950">
            Nouveau produit créé avec succès !!
          </p>
        </div>
      )}
      {/*  */}
      {showInputErrorMessage && (
        <div className="absolute py-2 px-5 right-5 top-5 bg-gray-300 border border-gray-400">
          <p className="font-bold text-lg text-blue-950">
            Erreur: Vérifiez les entrées et réessayez !!
          </p>
        </div>
      )}
      {showServerErrorMessage && (
        <div className="absolute py-2 px-5 right-5 top-5 bg-gray-300 border border-gray-400">
          <p className="font-bold text-lg text-blue-950">
            Une erreur s'est produite en interne. Réessayez plus tard !!
          </p>
        </div>
      )}

      <Button
        className="px-4 py-1.5 bg-pink-500 text-white"
        content="Nouveau"
        onClick={() => {
          setShowNewProductForm(true);
        }}
      />
      {showNewProductForm && (
        <NewProductForm
          onNewProductFormClose={onNewProductFormClose}
          onNewProductFormInputMissing={onNewProductFormInputMissing}
          onNewProductCreationSuccess={onNewProductCreationSuccess}
          onNewProductFormInputError={onNewProductFormInputError}
          onServerError={onServerError}
        />
      )}
      <ProductRowContainer
        reloadProducts={reloadProducts}
        products={products}
        onUpdateProductFormInputMissing={onUpdateProductFormInputMissing}
      />
    </div>
  );
}
