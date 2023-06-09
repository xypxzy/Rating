import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { Htag, Button, Tag, P, Rating, Input, TextArea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import Search from './search';
import { API } from '../../helper/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Button appearance='primary' arrow='right'>
        Increase
      </Button>
      <Button appearance='ghost' arrow='down'>
        Decrease
      </Button>
      <P size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum
        quae sit nam qui placeat, quibusdam itaque delectus voluptatum, labore
        quo omnis sunt! Dolore quas aliquam neque repellat totam officia!
      </P>
      <Tag size='s' color='red' href='#'>
        Reeeo
      </Tag>
      <Tag color='grey' href='#'>
        Lorrrr
      </Tag>
      <Tag size='m' color='primary'>
        Polo
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='test' />
      <TextArea />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
