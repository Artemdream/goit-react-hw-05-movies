import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  gap: 20px;
`;

export const BackLink = styled(Link)`
  display: block;
  width: 60px;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: solid 1px rgb(0, 1, 0, 0.24);
  border-radius: 7px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;

  &.active {
    color: orange;
  }
`;

export const ItemLink = styled.li`
  width: 60px;
  margin-bottom: 10px;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: solid 1px rgb(0, 1, 0, 0.24);
  border-radius: 7px;
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 20px;
`;
