"use client";
import { useActionState, useState } from "react";
import { sellProductData, ErrorState } from "lib/actions";
import Spinner from "../loading/Spinner";
import { Category } from "lib/definition";

const SellForm = ({ categories }: { categories: Category[] }) => {
  const initialState: ErrorState = { message: null, errors: {} };
  const [image, setImage] = useState<string | null>(null);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log("Uploaded image data:", data);

      if (data.image) {
        setImage(data.image);
      } else {
        console.error("Image not returned from API");
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  }

  const [state, formAction, isLoading] = useActionState(sellProductData, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Sell a Product
        </h2>
        <div id="customer-error" aria-live="polite" aria-atomic="true">
          {state.errors?.product_name &&
            state.errors.product_name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="product_name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name Of Product
            </label>
            <input
              type="text"
              name="product_name"
              id="product_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Organic Honey"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Image
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-white"
            />

            {image && (
              <div>
                <label
                  htmlFor="image"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Product Image
                </label>
                <img src={image} alt="Your Product Image" className="w-full h-48 object-cover" />
              </div>
            )}


            {/* Hidden input to pass image URL to server action */}
            {image && <input type="hidden" name="image" value={image} />}

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="price"
                className="block text-gray-700 font-medium mb-2"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 25.99"
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-medium mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 100"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write a detailed description of your product..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-medium mb-2"
            >
              Rating (1-5)
            </label>
            <input
              type="number"
              name="ratings"
              id="ratings"
              min="1"
              max="5"
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 4.5"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="product_owner"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Owner
            </label>
            <input
              type="text"
              name="product_owner"
              id="product_owner"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Jane Doe"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="category_id"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Category
            </label>
            <select
              name="category_id"
              id="category_id"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat.category_id} value={cat.category_id}>{cat.category_name}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-100 opacity-80 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 flex items-center justify-center"
          >
            List Product
          </button>
        </form>
      </div>
      {isLoading && <Spinner message="Adding product, please wait..." />}
    </div>
  );
};
export default SellForm;
