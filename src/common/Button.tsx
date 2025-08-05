type ButtonProps = {
  text: string;
  bgColour: "primary" | "secondary" | "white";
};

export default function Button({ text, bgColour }: ButtonProps) {
  const colourMap: Record<ButtonProps["bgColour"], string> = {
    primary:
      "bg-primary text-white hover:bg-secondary hover:text-black border border-secondary hover:border-primary",
    secondary:
      "bg-secondary text-white hover:bg-primary hover:text-white border border-white hover:border-secondary",
    white:
      "bg-white text-black hover:bg-primary hover:text-white border border-primary hover:border-secondary",
  };

  const colourClass = colourMap[bgColour];

  return (
    <button
      className={`px-8 py-3 text-[20px] cursor-pointer font-medium rounded-[10px] inline-block w-max hover:shadow-2xl ${colourClass}`}
    >
      {text || "Button"}
    </button>
  );
}
