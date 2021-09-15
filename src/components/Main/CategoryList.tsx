import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`;

const CategoryListItem = styled(Link)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

function CategoryList({ categoryList, selectedCategory }: CategoryListProps) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryListItem key={name} to={`/?category=${name}`}>
          #{name}({count})
        </CategoryListItem>
      ))}
    </CategoryListWrapper>
  );
}
export default CategoryList;
