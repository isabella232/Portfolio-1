import Loader from "@/components/atoms/shared/loader";
import KeyPoint from "@/components/molecules/index/key-point";
import IKeyPoint from "@/models/keypoint";
import { KeyPointsCol } from "@/services/firebase";
import { getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";

const KeyPoints = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [keypoints, setKeypoints] = useState<IKeyPoint[]>([]);

  useEffect(() => {
    getLorems().then((data) => {
      setKeypoints(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="mb-8 flex flex-col items-center justify-evenly space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
      {isLoading && <Loader />}
      {!isLoading &&
        keypoints
          .sort((a, b) => a.Id - b.Id)
          .map(({ icon, title, text }) => {
            return <KeyPoint icon={icon} title={title} text={text} />;
          })}
    </div>
  );
};

const getLorems = async () => {
  const keyPointsSnapshot = await getDocs(KeyPointsCol);
  let keyPoints: IKeyPoint[] = [];
  keyPointsSnapshot.docs.forEach((keyPoint) => {
    keyPoints.push(keyPoint.data());
  });
  return keyPoints;
};

export default KeyPoints;
