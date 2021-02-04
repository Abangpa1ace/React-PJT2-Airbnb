import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context'
import ListRests from './ListRests';
import ListMap from './ListMap';

const List = () => {
  const [restId, setRestId] = useState(-1);
  const { setNavFixed, setSearchOn } = useGlobalContext();

  useEffect(() => {
    setNavFixed(true);
    setSearchOn(false);
  }, [])

  return (
    <ListPage>
      <ListRests restId={restId} setRestId={setRestId} />
      <ListMap restId={restId} />
    </ListPage>
  )
}

const ListPage = styled.main`
  display: flex;
  align-items: flex-start;
`;

export default List;