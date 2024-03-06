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
          color="red"
          className="white"
          icon={
            <Checkbox
              crossOrigin=""
              checked={true}
              color="red"
              ripple={false}
              containerProps={{ className: "p-0" }}
              className="-ml-px border-2 border-red-800 before:hidden checked:border-red-800 checked:bg-red-900 text-white"
            />
          }
        />
      )}
    </>
  );
};

export default NewBadge;
