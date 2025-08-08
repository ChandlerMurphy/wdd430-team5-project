import SellForm from "@/app/ui/products/SellForm";
import { fetchCategories } from "lib/data";

const page = async () => {
  const categories = await fetchCategories();
  return (
    <div>
      <SellForm categories={categories} />
    </div>
  );
};

export default page;
