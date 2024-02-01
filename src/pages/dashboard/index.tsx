import { useEffect, useState } from "react";
import { getProducts } from "../../services/products/get-product";
import Table from "../../component/ui/table";
import Button from "../../component/ui/button";
import PlotChart from "../../component/ui/plot-chart";
import { QUERY_PARAMS } from "../../shared/types/queryParams";

type PRODUCT_TYPE = {
  id: number;
  title: string;
  brand: string;
  price: number;
  stock: number;
};

const tableColumns = ["", "NAME", "BRAND", "PRICE", "STOCK"];

const Dashboard = () => {
  const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<PRODUCT_TYPE[]>([]);
  const [queryParams, setQueryParams] = useState<QUERY_PARAMS>({
    page: 1,
    searchParams: "",
    limit: 10,
  });
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const isFirstPage = queryParams.page === 1;

  const totalPages = Math.ceil(totalProducts / queryParams?.limit);
  const isLastPage = queryParams?.page === totalPages;

  const fetchData = async () => {
    const res = await getProducts(queryParams);
    setTotalProducts(res?.data?.total);
    setProducts(res.data.products);
    if (!products.length) {
      setSelectedProducts(res.data.products.slice(0, 5));
    }
  };

  useEffect(() => {
    fetchData();
  }, [queryParams.page, queryParams.searchParams]);

  const handleCheckboxChange = (product: PRODUCT_TYPE) => {
    if (
      selectedProducts.some((selectedProd) => selectedProd.id === product.id)
    ) {
      const filteredProducts = selectedProducts.filter(
        (selectedProd) => selectedProd.id !== product.id
      );

      return setSelectedProducts(filteredProducts);
    }

    setSelectedProducts([...selectedProducts, product]);
  };

  const handlePageChange = (type: "incr" | "dec") => {
    if (type === "incr") {
      return setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }
    if (queryParams.page === 1) return;

    return setQueryParams({ ...queryParams, page: queryParams.page - 1 });
  };

  return (
    <div className="container mx-auto px-4 md:px-4 py-8 ">
      <h5 className="flex text-2xl font-bold mb-4 justify-center">DataPulse</h5>

      <div className="flex flex-col space-y-6 items-center">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search here..."
            className="border border-black rounded-md px-4 py-2 w-full md:w-96"
            onChange={(e) =>
              setQueryParams({ ...queryParams, searchParams: e.target.value })
            }
          />
        </div>
        <PlotChart
          xAxis={selectedProducts?.map((product) => product.title)}
          yAxis={selectedProducts.map((product) => product.price)}
        />
        <Table
          columns={tableColumns}
          rows={products}
          selectedColumns={selectedProducts}
          onCheckboxChange={handleCheckboxChange}
        />

        <div className="flex flex-col md:flex-row justify-center md:gap-10 items-center">
          <Button
            className={`border border-black px-4 py-2 rounded-md ${
              isFirstPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange("dec")}
            disabled={isFirstPage}
          >
            Prev
          </Button>

          <Button
            className={`border border-black px-4 py-2 rounded-md ${
              isLastPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange("incr")}
            disabled={isLastPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
