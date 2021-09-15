import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { Global, css } from '@emotion/react';

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, author, description },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      {title} {description} {author}
    </div>
  );
};

export default InfoPage;

export const metaDataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;
