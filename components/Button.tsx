"use client";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        background: "black",
        color: "white",
        border: "none",
        borderRadius: 6,
      }}
    >
      {children}
    </button>
  );
}
