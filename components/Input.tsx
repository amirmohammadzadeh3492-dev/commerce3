export default function Input(props: any) {
  return (
    <input
      {...props}
      style={{
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 6,
        width: "100%",
        marginBottom: 10,
      }}
    />
  );
}
