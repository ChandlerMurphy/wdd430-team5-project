import { allProductsData } from '@/app/query/query';
import { PredefinedCategoriesData } from 'lib/placeholder';
import { ProductData } from 'lib/definition';

function filterProductsByCategory(products: ProductData[], categoryId: number | null) {
  if (categoryId === null) return products;
  return products.filter((p) => p.category_id === categoryId);
}


export default async function CategorySidebar({
  searchParams,
}: {
  searchParams?: { category?: string };
}){
  const products = await allProductsData();
  const selectedCategory = searchParams?.category ? Number(searchParams.category) : null;
  const filteredProducts = filterProductsByCategory(products ?? [], selectedCategory);


  return (
    <aside className="w-48">
        <h2 className="font-bold mb-4">Categories</h2>
        <ul>
          <li
            className={`cursor-pointer p-2 rounded mb-2 ${selectedCategory === null ? 'font-bold' : ''} hover:bg-secondary hover:text-white text-gray-700`}
          >
            <a href="/products" className="hover:underline">All</a>
          </li>
          {PredefinedCategoriesData.map((cat) => (
            <li
              key={cat.category_id}
              className={`cursor-pointer mb-2 rounded pl-4 pr-2 py-2 ${selectedCategory === cat.category_id ? 'font-bold' : ''} hover:bg-secondary hover:text-white text-gray-700`}
            >
              <a
                href={`/products?category=${cat.category_id}`}
              >
                {cat.category_name.charAt(0).toUpperCase() + cat.category_name.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </aside>
  );
}