import Image from "next/image";
import { Motiondiv } from "./Motiondiv";

export interface AnimeProp {
  id: string;
  name: string;
  url: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function AnimeCard({ anime, index }: Prop) {
  return (
    <Motiondiv
      className="max-w-sm rounded relative w-full"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.4 }}
      viewport={{ amount: 0 }}
    >
      <a href={`https://shikimori.one${anime.url}`} target="__blank">
        <div className="relative w-full h-[400px]">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-xl hover:opacity-70 hover:-translate-y-2 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">
                {anime.score}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Motiondiv>
  );
}

export default AnimeCard;
