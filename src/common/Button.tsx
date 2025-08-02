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
      href="/"
      style={{
        backgroundColor: bgColour,
        color: textColour,
        
      }}
      className="px-8 py-3 text-[20px] border hover:border-2 hover:shadow-2xl hover:border-[#000000] border-gray-500 font-medium rounded-[10px] inline-block w-max "
    >
      {text || 'Button'}
    </a>
  );
}
