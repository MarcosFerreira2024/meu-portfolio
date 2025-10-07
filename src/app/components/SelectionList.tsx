import React from "react";
import SelectionButton from "./selection/Selection";

type SelectionProps = {
  nome: string;
  img: string;
  id: number;
};

function SelectionList({
  data,
  currentActive,
  action,
}: {
  currentActive: number;
  action: React.Dispatch<React.SetStateAction<number>>;
  data: SelectionProps[];
}) {
  return (
    <>
      {data.map((item, i) => {
        return (
          <SelectionButton
            animationDelay={0.01 * i}
            key={i}
            id={item.id}
            active={currentActive}
            action={action}
            alt={item.nome}
            src={item.img}
          />
        );
      })}
    </>
  );
}

export default SelectionList;
