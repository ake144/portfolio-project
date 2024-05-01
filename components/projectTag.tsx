import React from "react";

interface projectProps {
    name: string;
    onClick: (newTag: string) => void; // Adjusted onClick prop to accept a string parameter
    isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: projectProps) => {
    const buttonStyles = isSelected
        ? "text-white border-primary-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white";
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl dark:text-white cursor-pointer`}
            onClick={() => onClick(name)} // Pass the name string to onClick
        >
            {name}
        </button>
    );
};

export default ProjectTag;
