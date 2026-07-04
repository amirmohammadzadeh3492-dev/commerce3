const handleSubmit = async () => {
  console.log("CLICKED");

  try {
    const res = await createProduct({
      title,
      price: Number(price),
    });

    console.log("SUCCESS:", res);

    alert("OK SAVED");
  } catch (e) {
    console.error("FORM ERROR:", e);
    alert("FAILED");
  }
};
