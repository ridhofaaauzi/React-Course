import UseFetch from "./UseFetch";

export default function UseFetchHookTest() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);
  return (
    <div>
      <h1>Use Fetch Hook Test</h1>
      {pending ? <h3>Pending ! Please with</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
