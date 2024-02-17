import { Button } from "../MaterialTailwind";

interface Props {
  children: string;
}

const Stacks = ({ children }: Props) => {
  return (
    <Button
      placeholder=""
      size="sm"
      className="m-1.5 capitalize text-[#ADB7BE] py-1 px-1.5 cursor-default bg-purple-800"
    >
      {children}
    </Button>
  );
};

export default Stacks;
