export default function Button({
  text,
  bgColour,
  textColour = 'black',
}: {
  text: string;
  bgColour: string;
  textColour?: string;
}) {
  return (
    <a
      href="/about-us"
      style={{
        backgroundColor: bgColour,
        color: textColour,
      }}
      className="px-8 py-3 text-[20px] border border-gray-500 font-medium rounded-[10px] inline-block w-max"
    >
      {text || 'Button'}
    </a>
  );
}
