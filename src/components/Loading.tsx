import React from "react";
import { BeatLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-[100%] h-[90vh]">
      <BeatLoader
        color="rgba(0, 0, 0, 1)"
        loading={true}
        cssOverride={{ marginTop: "-50px" }}
      />
    </div>
  );
};

export default Loading;
