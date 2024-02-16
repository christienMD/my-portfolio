import { Button } from "../MaterialTailwind";

interface Props {
  children: string;
}

const Stacks = ({ children }: Props) => {
  return (
    <Button
      placeholder=""
      color="purple"
      size="sm"
      className="m-1.5 capitalize text-gray-300 py-1.5 cursor-default"
    >
      {children}
    </Button>
  );
};

export default Stacks;
