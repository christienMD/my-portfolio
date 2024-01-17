interface Props {
  children: string;
}

const Stack = ({ children }: Props) => {
  return (
    <button className="bg-purple-900 cursor-default text-sm font-medium text-gray-300 border border-purple-950 px-1 ms-2 mb-2 rounded-md">
      {children}
    </button>
  );
};

export default Stack;
