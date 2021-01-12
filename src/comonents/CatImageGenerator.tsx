/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useQuery } from "react-query";

export const CatImageGenerator: React.FC = () => {
  const API_KEY = "a5759837-6d0e-4fa1-bc54-f6107032494a";

  interface Category {
    id: number;
    name: string;
  }

  interface CatDto {
    breeds: any[];
    categories: Category[];
    id: string;
    url: string;
    width: number;
    height: number;
  }

  const fetchCat = async () => {
    try {
      const catInfo = await axios.get<CatDto[]>(
        "https://api.thecatapi.com/v1/images/search",
        {
          headers: {
            "x-api-key": API_KEY,
          },
        }
      );
      return catInfo.data[0].url;
    } catch {
      alert("Error ://////");
    }
  };

  const { data, isLoading } = useQuery("planetsList", fetchCat);

  return (
    <div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div
          css={css({
            width: 300,
            height: 300,
            borderRadius: "50%",
            backgroundImage: `url(${data})`,
            backgroundSize: "cover",
          })}
        />
      )}
    </div>
  );
};
