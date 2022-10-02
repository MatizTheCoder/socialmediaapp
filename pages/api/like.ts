import type { NextApiRequest, NextApiResponse } from 'next';
import { uuid } from 'uuidv4';

import { allUsersQuery } from './../../utils/queries';
import { client } from '../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'PUT'){
  
  };
}