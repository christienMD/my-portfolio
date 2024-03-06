import { Chip, Checkbox } from "../MaterialTailwind";

interface Props {
  isNew: boolean;
}

const NewBadge = ({ isNew }: Props) => {
  return (
    <>
      {isNew && (
        <Chip
          value="New"
          variant="ghost"
          color="purple"
          className="white"
          icon={
            <Checkbox
              crossOrigin=""
              checked={true}
              color="purple"
              ripple={false}
              containerProps={{ className: "p-0" }}
              className="-ml-px border-2 border-purple-800 before:hidden checked:border-purple-800 checked:bg-purple-900 text-white"
            />
          }
        />
      )}
    </>
  );
};

export default NewBadge;
