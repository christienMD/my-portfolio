interface Props {
  name: string;
  isSelected: boolean;
  onClick: (name: string) => void;
}

const ProjectTag = ({ name, isSelected, onClick }: Props) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-1 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
