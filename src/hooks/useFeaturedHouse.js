import { useMemo } from "react";
const useFeatureHouse = (allHouses) => {
    const featuredHouse=useMemo(() => {
        if(allHouses.length){
          const randomIndex=Math.floor(Math.random() * allHouses.length);
          return allHouses[randomIndex];
        }
    },[allHouses])
    return featuredHouse;
}
export default useFeatureHouse;