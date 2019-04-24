import React from 'react';
import { Flex, Box } from 'rebass';
import { GithubSquare, Medium, BehanceSquare } from 'styled-icons/fa-brands/';
import { Book, Music, PenFancy, MoneyBillAlt } from 'styled-icons/fa-solid/';
import { LocalMovies } from 'styled-icons/material/';

import colors from '../../styles/colors';
import data from './data.js';
import Header from '../Header';

export default ({ title, type }) => (
  <>
    {title && <Header text={title} />}
    <Flex mt={3} mb={3} justifyContent="start">
      {data[type].map((icon, index) => (
        <Box key={index} width={2 / 12}>
          {type === 'social' ? (
            <a href={icon.link} title={icon.type}>
              <Box color={colors.hillight} width={'3rem'}>
                {icon.type.toLowerCase() === 'github' ? (
                  <GithubSquare />
                ) : icon.type.toLowerCase() === 'medium' ? (
                  <Medium />
                ) : icon.type.toLowerCase() === 'behance' ? (
                  <BehanceSquare />
                ) : icon.type.toLowerCase() === 'book' ? (
                  <Book />
                ) : icon.type.toLowerCase() === 'music' ? (
                  <Music />
                ) : icon.type.toLowerCase() === 'penfancy' ? (
                  <PenFancy />
                ) : icon.type.toLowerCase() === 'moneybillalt' ? (
                  <MoneyBillAlt />
                ) : icon.type.toLowerCase() === 'localmovies' ? (
                  <LocalMovies />
                ) : null}
              </Box>
            </a>
          ) : (
            <Box color={colors.hillight} width={'3rem'}>
              {icon.type.toLowerCase() === 'book' ? (
                <>
                  <Book style={{ height: '3rem' }} />
                  <span style={{ marginTop: '1rem', display: 'inline-block' }}>{icon.title}</span>
                </>
              ) : icon.type.toLowerCase() === 'music' ? (
                <>
                  <Music style={{ height: '3rem' }} />
                  <span style={{ marginTop: '1rem', display: 'inline-block' }}>{icon.title}</span>
                </>
              ) : icon.type.toLowerCase() === 'penfancy' ? (
                <>
                  <PenFancy style={{ height: '3rem' }} />
                  <span style={{ marginTop: '1rem', display: 'inline-block' }}>{icon.title}</span>
                </>
              ) : icon.type.toLowerCase() === 'moneybillalt' ? (
                <>
                  <MoneyBillAlt style={{ height: '3rem' }} />
                  <span style={{ marginTop: '1rem', display: 'inline-block' }}>{icon.title}</span>
                </>
              ) : icon.type.toLowerCase() === 'localmovies' ? (
                <>
                  <LocalMovies style={{ height: '3rem' }} />
                  <span style={{ marginTop: '1rem', display: 'inline-block' }}>{icon.title}</span>
                </>
              ) : null}
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  </>
);
