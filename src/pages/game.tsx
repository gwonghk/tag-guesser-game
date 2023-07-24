import React, { type ReactElement } from 'react';
import { type Anime, type JikanResource } from '@tutkli/jikan-ts';
import { useQuery } from 'react-query';
import Image from 'next/image';

const Game = (): ReactElement => {
  const fetchRandomAnime = async (): Promise<Anime> =>
    await fetch('https://api.jikan.moe/v4/random/anime').then(async (res) => await res.json());

  const {
    isSuccess,
    isLoading,
    error,
    data: { data = {} } = {},
    refetch,
  } = useQuery('randomAnime', fetchRandomAnime, { enabled: false, refetchOnWindowFocus: false });

  const handleOnClick = async (): Promise<void> => {
    await refetch();
  };

  const { title, images, genres, themes } = data;
  const imgurl = images?.webp?.large_image_url ?? images?.webp?.image_url;

  const genreTags = genres?.map((genre: JikanResource) => genre.name) ?? [];
  const themeTags = themes?.map((theme: JikanResource) => theme.name) ?? [];
  const tags = [...genreTags, ...themeTags].toString();

  return (
    <div>
      <button disabled={isLoading} onClick={handleOnClick}>
        Random Anime
      </button>
      <div>
        <h1>
          <span>{title}</span>
        </h1>
        <div style={{ width: '400px', height: '400px', position: 'relative' }}>
          <Image alt="cover image" src={imgurl} layout="fill" objectFit="contain"></Image>
        </div>
        <br />
        Tags:
        <br />
        {tags}
        {/* <ButtonLink
              href="https://github.com/hoangvvo/nextjs-mongodb-app"
              type="secondary"
              className={styles.button}
            >
              GitHub
            </ButtonLink> */}
        <br />
        <br />
        <p>Description</p>
      </div>
    </div>
  );
};

export default Game;
